import { SaleService } from './../../../services/sale.service';
import { CartService } from './../../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import Cart from 'src/app/models/cart.model';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart?: Cart;
  total: number = 0;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private saleService: SaleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.cartService.getCart().subscribe({
      next: (response) => (this.cart = response as Cart),
      error: (error) => {
        if (error.status === 404) {
          this.cartService.createCart().subscribe({
            next: (response) => (this.cart = response as Cart),
          });
        }
      },
      complete: () => this.calculateTotal(),
    });
  }

  updateCart() {
    this.cartService.updateCart(this.cart!).subscribe({
      next: () => this.loadCart(),
    });
  }

  calculateTotal() {
    this.total = 0;

    this.cart?.cartItems.forEach((item) => {
      this.total += item.product.price * item.quantity;
    });
  }

  remove(id: number) {
    let newCartItems = this.cart?.cartItems.filter((i) => i.product.id !== id);
    this.cart!.cartItems = newCartItems!;

    this.updateCart();
  }

  addQuantity(id: number) {
    let item = this.cart?.cartItems.find((i) => i.product.id === id);
    item!.quantity++;
    this.updateCart();
  }

  subtractQuantity(id: number) {
    let item = this.cart?.cartItems.find((i) => i.product.id === id);
    item!.quantity--;
    this.updateCart();
  }

  finishCart() {
    this.cart?.cartItems.forEach((item) => {
      if (item.quantity > item.product.stock || item.quantity < 1) {
        alert('Estoque indisponível! Ajuste as quantidades dos produtos.');
        return;
      }
    });

    this.cart?.cartItems.forEach((item) => {
      item.product.stock -= item.quantity;
      item.product.soldQuantity = item.product.soldQuantity ?? 0 + item.quantity;
      setTimeout(() => {
        this.productService.updateProduct(item.product);
      }, 50);
    });

    setTimeout(() => {
      this.saleService.createSale();
    }, this.cart?.cartItems.length ?? 1 * 50);

    alert('Finalizando compra, aguarde!');

    setTimeout(() => {
      this.router.navigateByUrl('hub/my-purchases');
    }, 2000);
  }
}
