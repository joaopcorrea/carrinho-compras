import Product from "./product.model";

export default class CartItems {
   product: Product;
   quantity: number;

   constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
   }
}
