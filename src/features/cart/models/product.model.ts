import type { VariantDefinition, VariantItem } from './variant.model';

export class Product {
  readonly id: string;
  readonly name: string;
  readonly definitions: VariantDefinition[];
  readonly variations: VariantItem[];
  readonly voucherLabel?: string;
  readonly image: string; 

  constructor(
    id: string, 
    name: string, 
    definitions: VariantDefinition[], 
    variations: VariantItem[],
    image: string,
    voucherLabel?: string
  ) {
    this.id = id;
    this.name = name;
    this.definitions = definitions;
    this.variations = variations;
    this.image = image;
    this.voucherLabel = voucherLabel;
  }

  get price(): number {
    if (this.variations.length > 0) {
      return this.variations[0].price; 
    }
    return 0;
  }

  get isInStock(): boolean {
    return this.variations.some((v) => v.isInStock);
  }
}
