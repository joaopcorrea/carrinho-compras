import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Product from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000';
  private userId: number;

  private sellingProducts: Product[] = [];
  private purchasableProducts: Product[] = [];

  constructor(authService: AuthService, private http: HttpClient) {
    this.userId = authService.getLoggedUser()!.id;

    this.http.get(this.apiUrl + '/products').subscribe({
      next: (products) => {
        this.sellingProducts = (products as Product[]).filter(
          (p) => p.sellerId === this.userId
        );
        console.log('userid', this.sellingProducts);

        this.purchasableProducts = (products as Product[]).filter(
          (p) => p.sellerId !== this.userId
        );
      },
      error: (err) => {
        console.log('erro ao buscar produtos:', err)
      }
    });
  }

  getProducts = () => this.http.get(this.apiUrl + '/products');

  getPurchasableProducts() {
    return this.purchasableProducts;
  }

  getSellingProducts() {
    return this.sellingProducts;
  }

  getProductById(id: number): Product | undefined {
    let product;

    this.http.get(this.apiUrl + '/products/' + id).subscribe({
      next: (response) => {
        product = response as Product;
      }
    });

    return product;
  }

  createProduct(product: Product) {
    this.http.post(this.apiUrl + '/products', product).subscribe({
      next: (response) => {
        console.log('resposta ao criar produto', response);
      }
    });
  }

  updateProduct(product: Product) {
    this.http.put(this.apiUrl + '/products/' + product.id, product).subscribe({
      next: (response) => {
        console.log('resposta ao atualizar produto', response);
      }
    });
  }

  removeProduct(id: number) {
    this.http.delete(this.apiUrl + '/products/' + id).subscribe({
      next: (response) => {
        console.log('resposta ao remover produto', response);
      }
    });
  }
}
