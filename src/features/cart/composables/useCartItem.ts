import { computed, toValue } from "vue";
import type { MaybeRef } from "vue";
import type { CartItem } from "../types/cart.types";

export function useCartItem(itemRef: MaybeRef<CartItem>) {
  const item = computed(() => toValue(itemRef));

  const price = computed(() => item.value.variant?.price ?? 0);

  const totalPrice = computed(() => price.value * item.value.quantity);

  const isInStock = computed(() => (item.value.variant?.stock ?? 0) > 0);

  const optionValues = computed(() => {
    const attributes = item.value.variant?.attributes;
    if (!attributes) return "";
    return Object.values(attributes).join(", ");
  });

  return {
    price,
    totalPrice,
    isInStock,
    optionValues,
  };
}
