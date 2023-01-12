import { ProductService } from './../../../services/product.service';
import { Component } from '@angular/core';
import Product from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Product[];

  constructor(productService: ProductService){
    this.products = productService.getPurchasableProducts();
  }
}
