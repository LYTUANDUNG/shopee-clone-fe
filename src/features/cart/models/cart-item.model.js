export class CartItem {
  constructor(id, product, shop, quantity) {
    this.id = id;
    this.product = product;
    this.shop = shop;
    this.quantity = quantity;
  }
  get totalPrice() {
    return this.product.price * this.quantity;
  }
  get isInStock() {
    return this.product.isInStock;
  }
  get optionValues() {
    return this.product.optionValues;
  }
}
