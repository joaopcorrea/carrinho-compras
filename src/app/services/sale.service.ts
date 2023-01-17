import { CartService } from './cart.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Cart from '../models/cart.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  private apiUrl = 'http://localhost:3000';
  private userId;

  constructor(authService: AuthService, private http: HttpClient, private cartService: CartService) {
    this.userId = authService.getLoggedUser()!.id;
  }

  getSales = () => this.http.get(this.apiUrl + '/sales/');

  createSale = () => {
    let sale: Cart;

    this.cartService.getCart().subscribe(({
      next: (response) => {
        sale = response as Cart;

        this.http.post(this.apiUrl + '/sales', sale).subscribe({
          next: () => {
            this.cartService.removeCart(sale.id);
          }
        });
      }
    }));
  }
}
