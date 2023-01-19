import { CartService } from './../../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import Cart from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart?: Cart;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe({
      next: (response) => (this.cart = response as Cart),
      error: (error) => {
        if (error.status === 404) {
          this.cartService.createCart().subscribe({
            next: (response) => (this.cart = response as Cart),
          });
        }
      },
    });
  }
}
