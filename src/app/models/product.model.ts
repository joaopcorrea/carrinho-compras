export default class Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;

  constructor(name: string, price: number, imageUrl: string ) {
    this.id = this.getNewId();
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
  }

  private getNewId(): number {
    return Date.now();
  }
}
