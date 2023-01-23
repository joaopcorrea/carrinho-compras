import { CartService } from './cart.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Cart from '../models/cart.model';
import { AuthService } from './auth.service';
import Sale from '../models/sale.model';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  private apiUrl = 'http://localhost:3000';

  constructor(authService: AuthService, private http: HttpClient, private cartService: CartService) {
  }

  getSales = () => this.http.get(this.apiUrl + '/sales/');

  createSale = () => {
    let sale: Sale;

    this.cartService.getCart().subscribe(({
      next: (response) => {
        sale = new Sale(response as Cart);

        this.http.post(this.apiUrl + '/sales', sale).subscribe({
          next: () => {
            this.cartService.removeCart(sale.cart.id).subscribe();
          }
        });
      }
    }));
  }
}
