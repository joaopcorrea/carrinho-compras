import { ProductFormComponent } from './../../../shared/product-form/product-form.component';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Product from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-your-products',
  templateUrl: './your-products.component.html',
  styleUrls: ['./your-products.component.scss'],
})
export class YourProductsComponent {
  products: Product[] = [];

  constructor(productService: ProductService, public dialog: MatDialog) {
    productService.getProducts().subscribe({
      next: (products) => {
        this.products = (products as Product[]).filter((p) => p.sellerId === 1);
        console.log('produtos', this.products);
      },
    });
    // this.products = productService.getSellingProducts();
  }

  openDialog(
    operation: 'insert' | 'update',
    product: Product | undefined = undefined
  ): void {
    const dialogRef = this.dialog.open(ProductFormComponent, {
      data: { product, operation },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
