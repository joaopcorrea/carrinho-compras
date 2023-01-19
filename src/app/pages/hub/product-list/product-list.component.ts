import { AuthService } from './../../../services/auth.service';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import Product from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  userId?: number;
  products?: Product[];

  constructor(
    private productService: ProductService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userId = this.authService.getLoggedUser()?.id;

    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = (products as Product[]).filter(
          (p) => p.sellerId !== this.userId
        );
      },
      error: (err) => {
        console.log('erro ao buscar produtos:', err);
      },
    });
  }
}
