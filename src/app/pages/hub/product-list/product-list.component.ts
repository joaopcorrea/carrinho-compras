import { ActivatedRoute } from '@angular/router';
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
    private authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {}

  search: string = '';

  ngOnInit(): void {
    this.userId = this.authService.getLoggedUser()?.id;
    this.search = this.activatedRoute.snapshot.params['search']?.toLowerCase();

    this.loadProducts();

    this.activatedRoute.queryParams.subscribe((p) => {
      this.search = p['search'];
      this.loadProducts();
    });
  }

  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = (products as Product[]).filter(
          (p) => p.sellerId !== this.userId
        );

        if (this.search) {
          this.products = this.products.filter((p) =>
            p.name.toLowerCase().includes(this.search)
          );
        }
      },
      error: (err) => {
        console.log('erro ao buscar produtos:', err);
      },
    });
  }
}
