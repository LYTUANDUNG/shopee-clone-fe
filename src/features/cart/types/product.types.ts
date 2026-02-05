export interface ProductVariant {
  id: string;
  tierIndexes: number[]; // [0,1] -> Size: Red, Color: Blue
  attributes: Record<string, string>; // {Size: Red, Color: Blue}
  price: number;
  stock: number;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  variants: ProductVariant[]; // [{Size: Red, Color: Blue}, {Size: Green, Color: Blue}]
  voucherLabel?: string;
}

export interface VariantOption {
  name: string;
  value: string;
  disabled?: boolean;
}

export interface VariantGroup {
  name: string;
  options: VariantOption[];
}
