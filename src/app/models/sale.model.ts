import Cart from "./cart.model";

export default class Sale {
  id: number;
  cart: Cart;

  constructor(cart: Cart) {
    this.id = Date.now();
    this.cart = cart;
  }
}
