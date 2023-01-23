import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Cart from '../models/cart.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:3000';

  constructor(private authService: AuthService, private http: HttpClient) {}

  getCart = () => this.http.get(this.apiUrl + '/carts/' + this.authService.getLoggedUser()!.id);

  createCart = () => this.http.post(this.apiUrl + '/carts', new Cart(this.authService.getLoggedUser()!.id));

  updateCart = (cart: Cart) => this.http.put(this.apiUrl + '/carts/' + cart.id, cart);

  removeCart = (id: number) => this.http.delete(this.apiUrl + '/carts/' + id);
}
