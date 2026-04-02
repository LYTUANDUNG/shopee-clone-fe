<script setup lang="ts">
import { ref, computed } from 'vue';
import { formatCurrency } from '@/shared/utils/format';
import { useCartStore } from '@/stores/cart';
import type { Product } from '../types/productDetail';
import Badge from '@/shared/components/atoms/Badge.vue';
import Rating from '@/shared/components/atoms/Rating.vue';
import BaseButton from '@/shared/components/atoms/BaseButton.vue';
import { ShoppingCart } from 'lucide-vue-next';
interface Props {
  product: Product;
}

const props = defineProps<Props>();

const selectedVariant = ref<Record<string, string>>({});
const quantity = ref(1);

const handleVariantSelect = (type: string, option: string) => {
  selectedVariant.value = {
    ...selectedVariant.value,
    [type]: option,
  };
};

const displayPrice = computed(() => {
  let price = props.product.price;
  if (selectedVariant.value['Size']) {
    const sizeIndex = props.product.variants?.find(v => v.type === 'Size')?.options.indexOf(selectedVariant.value['Size']) || 0;
    price += sizeIndex * 15000;
  }
  return price;
});

const cartStore = useCartStore();

const handleAddToCart = () => {
  if (props.product.variants) {
    const missingVariants = props.product.variants.filter(v => !selectedVariant.value[v.type]);
    if (missingVariants.length > 0) {
      alert(`Vui lòng chọn ${missingVariants.map(v => v.type).join(', ')}`);
      return;
    }
  }

  if (quantity.value < 1) {
    alert(`Số lượng không hợp lệ`);
    return;
  }

  const cartProduct = {
    ...props.product,
    image: props.product.images?.[0] || '',
    location: 'Hà Nội',
  } as any;

  cartStore.addItem({
    product: cartProduct,
    variant: selectedVariant.value,
    quantity: quantity.value,
    price: displayPrice.value
  });

  alert('Đã thêm sản phẩm vào giỏ hàng');
};

const decreaseQuantity = () => {
  if (quantity.value > 1) quantity.value--;
};

const increaseQuantity = () => {
  quantity.value++;
};
</script>

<template>
  <div class="flex flex-col gap-1">
    <!-- Title -->
    <h1 class="text-xl font-medium text-gray-800 leading-tight flex items-center flex-wrap gap-2">
      <Badge text="Yêu thích" type="favorite" />
      <span class="align-middle">{{ product.name }}</span>
    </h1>

    <!-- Rating & Sold -->
    <div class="flex items-center mt-2">
      <div class="flex items-center gap-1 pr-4 border-r border-gray-300">
        <span class="text-orange-500 border-b border-orange-500 font-medium text-base">{{ product.rating }}</span>
        <div class="flex">
          <Rating :rating="product.rating" :size="14" />
        </div>
      </div>
      <div class="px-4 border-r border-gray-300">
        <span class="border-b border-black font-medium text-base text-gray-800">330</span>
        <span class="text-sm text-gray-500 ml-1">Đánh Giá</span>
      </div>
      <div class="pl-4">
        <span class="font-medium text-base text-gray-800">{{ product.sold }}</span>
        <span class="text-sm text-gray-500 ml-1">Đã bán</span>
      </div>
      <div class="ml-auto text-sm text-gray-500 cursor-pointer hover:text-gray-700">
        Tố cáo
      </div>
    </div>

    <!-- Price Section -->
    <div class="mt-4 bg-gray-50">
      <!-- Banner dành riêng bạn mới (Optional overlay or just top bar) -->
      <div class="flex items-center gap-2 px-4 py-2 bg-[#ff5722] text-white" v-if="true">
         <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/d9e992985b18d96aab90.png" class="w-4 h-4 brightness-0 invert" alt="icon">
         <span class="text-sm font-medium">Giá dành riêng bạn mới</span>
      </div>
      <div class="p-4 flex items-end gap-3">
        <span v-if="product.originalPrice" class="text-gray-400 line-through text-base">
          {{ formatCurrency(product.originalPrice) }}
        </span>
        <span class="text-3xl font-medium text-orange-500">
          {{ formatCurrency(displayPrice) }}
        </span>
        <span v-if="product.originalPrice" class="bg-orange-500 text-white text-[10px] font-bold px-1 rounded-[2px] uppercase mb-1">
          {{ Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) }}% GIẢM
        </span>
      </div>
    </div>

    <!-- Info Grid -->
    <div class="mt-6 flex flex-col gap-6 px-4">
       <!-- Voucher -->
       <div class="flex items-center">
          <span class="text-gray-500 w-28 text-sm flex-shrink-0">Voucher Của Shop</span>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="(voucher, index) in product.vouchers" 
              :key="index"
              class="bg-orange-100 text-orange-600 text-xs px-2 py-1 relative before:content-[''] before:absolute before:-left-[2px] before:top-1/2 before:-translate-y-1/2 before:w-[4px] before:h-[4px] before:bg-white before:rounded-full after:content-[''] after:absolute after:-right-[2px] after:top-1/2 after:-translate-y-1/2 after:w-[4px] after:h-[4px] after:bg-white after:rounded-full"
            >
              {{ voucher }}
            </span>
          </div>
       </div>

       <!-- Shipping -->
       <div class="flex items-start">
          <span class="text-gray-500 w-28 text-sm flex-shrink-0 pt-1">Vận Chuyển</span>
          <div class="flex flex-col gap-2 text-sm">
            <div class="flex items-center gap-2">
              <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/d9e992985b18d96aab90.png" class="w-5 h-4 object-contain" />
              <span class="text-gray-800">Nhận từ 5 Th02 - 9 Th02, phí giao 0₫</span>
            </div>
            <div class="text-gray-500 text-xs ml-7">Tặng Voucher 15.000₫ nếu đơn giao sau thời gian trên.</div>
          </div>
       </div>

       <!-- Insurance -->
       <div class="flex items-center">
         <span class="text-gray-500 w-28 text-sm flex-shrink-0">An Tâm Mua Sắm Cùng Shopee</span>
         <div class="flex items-center text-sm text-gray-800 gap-2">
            <span class="text-orange-500 text-lg">🛡️</span>
            <span>Trả hàng miễn phí 15 ngày · Bảo hiểm Thời trang</span>
         </div>
       </div>

      <!-- Variants -->
      <div v-if="product.variants" class="flex flex-col gap-6 mt-2">
        <div v-for="variant in product.variants" :key="variant.type" class="flex flex-col sm:flex-row sm:items-baseline">
          <span class="text-gray-500 w-28 text-sm flex-shrink-0">{{ variant.type }}</span>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="option in variant.options"
              :key="option"
              class="px-4 py-2 border rounded-[2px] text-sm min-w-[5rem] transition-all relative overflow-hidden group"
              :class="selectedVariant[variant.type] === option 
                ? 'border-orange-500 text-orange-500' 
                : 'border-gray-200 hover:border-orange-500 text-gray-800 bg-white'"
              @click="handleVariantSelect(variant.type, option)"
            >
              {{ option }}
              <div v-if="selectedVariant[variant.type] === option" class="absolute bottom-0 right-0 w-3 h-3 bg-orange-500">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-2 h-2 absolute bottom-0 right-0">
                    <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
                 </svg>
              </div>
            </button>
          </div>
        </div>
        
        <!-- Quantity -->
        <div class="flex flex-col sm:flex-row sm:items-center">
          <span class="text-gray-500 w-28 text-sm flex-shrink-0">Số lượng</span>
          <div class="flex items-center">
            <div class="flex items-center border border-gray-300 rounded-[2px] overflow-hidden">
              <button class="px-3 py-2 border-r border-gray-300 hover:bg-gray-50" @click="decreaseQuantity">-</button>
              <input 
                type="text" 
                v-model="quantity" 
                class="w-14 text-center outline-none py-2 text-gray-600 font-medium" 
                readonly 
              />
              <button class="px-3 py-2 border-l border-gray-300 hover:bg-gray-50" @click="increaseQuantity">+</button>
            </div>
            <span class="ml-4 text-sm text-gray-500">{{ product.sold }} sản phẩm có sẵn</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="flex gap-4 mt-8 px-4">
      <BaseButton 
        @click="handleAddToCart"
        label="Thêm Vào Giỏ Hàng"
        bgColor="bg-orange-50"
        textColor="text-orange-500"
        customClasses="border border-orange-500 hover:bg-orange-100 min-w-[200px]"
        :leftIcon="ShoppingCart"
      />
      <BaseButton 
        label="Mua Ngay"
        bgColor="bg-orange-600"
        textColor="text-white"
        customClasses="hover:bg-orange-700 min-w-[200px]"
      />
    </div>
  </div>
</template>