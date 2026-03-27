import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Product } from '@/features/product/types';

export interface CartItem {
  product: Product;
  variant: Record<string, string>;
  quantity: number;
  price: number;
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    // Check if item with same ID and variant already exists
    const existingItem = items.value.find(
      (i) =>
        i.product.id === item.product.id &&
        JSON.stringify(i.variant) === JSON.stringify(item.variant)
    );

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      items.value.push(item);
    }
  };

  return { items, addItem };
});
