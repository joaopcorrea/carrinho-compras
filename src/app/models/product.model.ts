export default class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
  sellerId: number;
  soldQuantity: number;

  constructor(
    name: string,
    description: string,
    price: number,
    stock: number,
    imageUrl: string,
    sellerId: number,
  ) {
    this.id = this.getNewId();
    this.name = name;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.imageUrl = imageUrl;
    this.sellerId = sellerId;
    this.soldQuantity = 0;
  }

  private getNewId(): number {
    return Date.now();
  }
}
