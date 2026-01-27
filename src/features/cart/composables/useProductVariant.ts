import { ref, computed, watchEffect } from 'vue';
import type { VariantDefinition, VariantItem } from '../models/variant.model';
import type { VariantUIGroup } from '../types/variant-ui.types';

export function useProductVariant(
  props: {
    definitions: VariantDefinition[];
    variations: VariantItem[];
  }
) {
  const selectedAttributes = ref<Record<string, string>>({});

  watchEffect(() => {
    const hasNoSelection = Object.keys(selectedAttributes.value).length === 0;
    const hasVariations = props.variations.length > 0;

    if (hasNoSelection && hasVariations) {
      const firstInStock = props.variations.find((v) => v.stock > 0);
      if (firstInStock) {
        selectedAttributes.value = { ...firstInStock.attributes };
      }
    }
  });

  const currentVariantText = computed(() => {
    return Object.values(selectedAttributes.value).join(', ');
  });

  const popupGroups = computed<VariantUIGroup[]>(() => {
    return props.definitions.map((def) => ({
      name: def.name,
      options: def.options.map((optValue) => {
        const otherSelections = { ...selectedAttributes.value };
        delete otherSelections[def.name];
        
        const hypotheticalSelection = {
             ...otherSelections,
             [def.name]: optValue
        };

        const hasMatchingStock = props.variations.some((variant) => {
             const isMatch = Object.entries(hypotheticalSelection).every(([key, value]) => {
                 return variant.attributes[key] === value;
             });
             
             return isMatch && variant.stock > 0;
        });

        const isDisabled = !hasMatchingStock;

        return {
          name: optValue,
          value: optValue,
          disabled: isDisabled,
          active: false,
        };
      }),
    }));
  });

  const selectOption = (groupName: string, value: string) => {
    selectedAttributes.value = {
      ...selectedAttributes.value,
      [groupName]: value,
    };
  };

  return {
    selectedAttributes,
    currentVariantText,
    popupGroups,
    selectOption,
  };
}
