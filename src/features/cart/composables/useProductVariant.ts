import { computed, ref, toValue, watch } from "vue";
import type { MaybeRef } from "vue";
import type {
  Product,
  ProductVariant as IProductVariant,
} from "../types/product.types";

export function useProductVariant(
  productRef: MaybeRef<Product | { variants: IProductVariant[] }>,
  initialSelected?: MaybeRef<Record<string, string> | undefined>,
) {
  const selectedAttributes = ref<Record<string, string>>({
    ...toValue(initialSelected),
  });

  watch(
    () => toValue(initialSelected),
    (newVal) => {
      if (newVal) {
        selectedAttributes.value = { ...newVal };
      }
    },
    { deep: true },
  );

  const product = computed(() => toValue(productRef));

  const availability = computed(() => {
    const variants = product.value.variants;
    const selected = selectedAttributes.value;
    const map: Record<string, Record<string, boolean>> = {};

    const allKeys = new Set<string>();
    for (const variant of variants) {
      for (const key of Object.keys(variant.attributes)) {
        allKeys.add(key);
      }
    }

    for (const checkingKey of allKeys) {
      map[checkingKey] = {};

      for (const variant of variants) {
        if (variant.stock <= 0) continue;

        const isMatch = Object.entries(selected).every(([selKey, selValue]) => {
          if (selKey === checkingKey) return true;
          return variant.attributes[selKey] === selValue;
        });

        if (isMatch) {
          const value = variant.attributes[checkingKey];
          if (value) {
            map[checkingKey][value] = true;
          }
        }
      }
    }
    return map;
  });

  const popupGroups = computed(() => {
    const groups = new Map<string, Set<string>>();
    for (const variant of product.value.variants) {
      for (const [key, value] of Object.entries(variant.attributes)) {
        if (!groups.has(key)) groups.set(key, new Set());
        groups.get(key)!.add(value);
      }
    }

    return Array.from(groups.entries()).map(([name, values]) => ({
      name,
      options: Array.from(values).map((value) => ({
        name: value,
        value: value,
        disabled: !availability.value[name]?.[value],
      })),
    }));
  });

  const currentVariant = computed(() => {
    return product.value.variants.find((v) => {
      return (
        Object.entries(selectedAttributes.value).every(
          ([k, val]) => v.attributes[k] === val,
        ) &&
        Object.keys(selectedAttributes.value).length ===
          Object.keys(v.attributes).length
      );
    });
  });

  const selectOption = (groupName: string, value: string) => {
    if (selectedAttributes.value[groupName] === value) {
      const newAttrs = { ...selectedAttributes.value };
      delete newAttrs[groupName];
      selectedAttributes.value = newAttrs;
    } else {
      selectedAttributes.value = {
        ...selectedAttributes.value,
        [groupName]: value,
      };
    }
  };

  return {
    selectedAttributes,
    availability,
    popupGroups,
    currentVariant,
    selectOption,
  };
}
