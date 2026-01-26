import { Product } from './product.model';
import { Shop } from './shop.model';

export class CartItem {
  readonly id: string;
  readonly product: Product;
  readonly shop: Shop;
  public quantity: number;

  constructor(
    id: string,
    product: Product,
    shop: Shop,
    quantity: number
  ) {
    this.id = id;
    this.product = product;
    this.shop = shop;
    this.quantity = quantity;
  }

  get totalPrice(): number {
    return this.product.price * this.quantity;
  }

  get isInStock(): boolean {
    return this.product.isInStock;
  }

  get optionValues(): string {
    return this.product.optionValues;
  }
}
