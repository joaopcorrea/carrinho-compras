import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Cart from '../models/cart.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:3000';
  private userId;

  constructor(authService: AuthService, private http: HttpClient) {
    this.userId = authService.getLoggedUser()!.id;
  }

  getCart = () => this.http.get(this.apiUrl + '/carts/' + this.userId);

  createCart = (cart: Cart) => this.http.post(this.apiUrl + '/carts', cart);

  updateCart = (cart: Cart) => this.http.put(this.apiUrl + '/carts/' + cart.id, cart);

  removeCart = (id: number) => this.http.delete(this.apiUrl + '/carts/' + id);
}
