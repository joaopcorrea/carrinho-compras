import { AuthService } from 'src/app/services/auth.service';
import { ProductFormComponent } from '../../../shared/product-form/product-form.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Product from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss'],
})
export class MyProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private authService: AuthService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts = () =>
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = (products as Product[]).filter(
          (p) => p.sellerId === this.authService.getLoggedUser()?.id
        );
        console.log('produtos', this.products);
      },
    });

  openDialog(
    operation: 'insert' | 'update',
    product: Product | undefined = undefined
  ): void {
    const dialogRef = this.dialog.open(ProductFormComponent, {
      data: { product, operation },
    });

    dialogRef.afterClosed().subscribe((result) => {
      setTimeout(() => {
        this.loadProducts();
      }, 500);
    });
  }
}
