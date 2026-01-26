export class Variant {
  constructor(id, options, stock, price, image) {
    this.id = id;
    this.options = options;
    this.stock = stock;
    this.price = price;
    this.image = image;
  }
  get isInStock() {
    return this.stock > 0;
  }
  get optionValues() {
    return this.options.map((option) => option.value).join(", ");
  }
}
