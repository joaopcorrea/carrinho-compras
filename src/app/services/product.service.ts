import { Injectable } from '@angular/core';
import Product from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  sellingProducts: Product[];
  purchasableProducts: Product[];

  constructor() {
    this.sellingProducts = [new Product('', 0, '')];
    this.purchasableProducts = [new Product('', 0, '')];
  }
}
