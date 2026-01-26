import { Variant } from './variant.model';

export class Product {
  readonly id: string;
  readonly name: string;
  readonly variant: Variant;

  constructor(id: string, name: string, variant: Variant) {
    this.id = id;
    this.name = name;
    this.variant = variant;
  }

  get isInStock(): boolean {
    return this.variant.isInStock;
  }

  get price(): number {
    return this.variant.price;
  }

  get image(): string {
    return this.variant.image;
  }

  get optionValues(): string {
    return this.variant.optionValues;
  }
}
