export class Product {
  constructor(id, name, variant) {
    this.id = id;
    this.name = name;
    this.variant = variant;
  }
  get isInStock() {
    return this.variant.isInStock;
  }
  get price() {
    return this.variant.price;
  }
  get image() {
    return this.variant.image;
  }
  get optionValues() {
    return this.variant.optionValues;
  }
}
