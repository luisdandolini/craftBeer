export class Products {
  id: string;
  name: string;
  price: string;
  img: string;

  constructor(id: string, name: string, price: string, img: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.img = img;
  }
}
