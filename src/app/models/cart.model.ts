import CartItems from "./cart-items.model";

export default class Cart {
  id: number;
  cartItems: CartItems[];

  constructor(buyerId: number, cartItems: CartItems[]) {
    this.id = buyerId;
    this.cartItems = cartItems;
  }
}
