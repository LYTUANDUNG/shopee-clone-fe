export interface VariantDefinition {
  name: string; 
  options: string[]; 
}

export class VariantItem {
  readonly id: string;
  readonly tierIndexes: number[]; 
  readonly attributes: Record<string, string>; 
  readonly price: number;
  readonly stock: number;
  readonly image?: string;

  constructor(
    id: string,
    tierIndexes: number[],
    attributes: Record<string, string>,
    price: number,
    stock: number,
    image?: string
  ) {
    this.id = id;
    this.tierIndexes = tierIndexes;
    this.attributes = attributes;
    this.price = price;
    this.stock = stock;
    this.image = image;
  }

  get isInStock(): boolean {
    return this.stock > 0;
  }
}
