import { CartService } from './../../../services/cart.service';
import { ProductService } from './../../../services/product.service';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import Product from 'src/app/models/product.model';
import User from 'src/app/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import Cart from 'src/app/models/cart.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;
  seller?: User;

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.productService.getProductById(id).subscribe({
      next: (response) => {
        this.product = response as Product;
        this.seller = this.userService.getUser(this.product.sellerId);
      },
    });
  }

  addIntoCart() {
    this.cartService.getCart().subscribe({
      next: (response) => {
        let cart = response as Cart;

        let item = cart.cartItems.find(
          (i) => i.product.id === this.product?.id
        );
        if (item) item.quantity += 1;
        else cart.cartItems.push({ product: this.product!, quantity: 1 });

        this.cartService.updateCart(cart).subscribe({
          next: () => this.router.navigateByUrl('hub/cart'),
        });
      },
    });
  }
}
