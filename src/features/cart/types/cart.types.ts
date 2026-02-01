import type { Product, ProductVariant } from './product.types';
import type { Shop } from './shop.types';

export interface CartItem {
  id: string;
  product: Product;
  shop: Shop;
  quantity: number;
  variant: ProductVariant;
}
