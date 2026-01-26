export interface VariantOption {
  name: string;
  value: string;
}

export class Variant {
  readonly id: string;
  readonly options: VariantOption[];
  readonly stock: number;
  readonly price: number;
  readonly image: string;

  constructor(
    id: string,
    options: VariantOption[],
    stock: number,
    price: number,
    image: string
  ) {
    this.id = id;
    this.options = options;
    this.stock = stock;
    this.price = price;
    this.image = image;
  }

  get isInStock(): boolean {
    return this.stock > 0;
  }

  get optionValues(): string {
    return this.options.map((option) => option.value).join(", ");
  }
}
