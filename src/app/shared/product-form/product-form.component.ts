import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder } from '@angular/forms';
import { Component, Inject } from '@angular/core';

import Product from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
  private userId: number;

  form = this.formBuilder.group({
    imageUrl: this.data.product?.imageUrl,
    name: this.data.product?.name,
    price: this.data.product?.price,
    description: this.data.product?.description,
    stock: this.data.product?.stock,
  });

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private authService: AuthService,
    public dialogRef: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {product: Product, operation: 'insert' | 'update'},
  ) {
    this.userId = authService.getLoggedUser()!.id;
  }

  onSubmit() {
    const product = new Product(
      this.form.value.name ?? '',
      this.form.value.description ?? '',
      this.form.value.price ?? 0,
      this.form.value.stock ?? 0,
      this.form.value.imageUrl ?? '',
      this.userId
    );

    if (this.data.product) {
      product.id = this.data.product.id;
    }

    if (this.data.operation === 'insert') {
      this.productService.createProduct(product);
    }
    else {
      this.productService.updateProduct(product);
    }
  }
}
