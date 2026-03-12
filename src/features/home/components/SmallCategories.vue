<script setup lang="ts">
interface Category {
  id: number;
  name: string;
  icon: string;
}
const categories: Category[] = [
  { id: 1, name: 'Voucher Giảm Đến 500K', icon: 'https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi' },
  { id: 2, name: 'Shopee Xu', icon: 'https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi' },
  { id: 3, name: 'Freeship Xtra', icon: 'https://cf.shopee.vn/file/vn-50009109-c7a2e1ae72c0d6886dde863c9b7431eeb1_xhdpi' },
  { id: 4, name: 'Hàng Quốc Tế', icon: 'https://cf.shopee.vn/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_xhdpi' },
  { id: 5, name: 'Nạp Thẻ, Dịch Vụ & Flash",', icon: 'https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi' },
  { id: 6, name: 'Bắt Trend - Giá Sốc', icon: 'https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi' },
  { id: 7, name: 'Mã Giảm Giá', icon: 'https://cf.shopee.vn/file/vn-50009109-f6c34d719c3e4d33857371458e7a7059_xhdpi' },
  { id: 8, name: 'Voucher Xtra', icon: 'https://cf.shopee.vn/file/vn-50009109-852300c407c5e79bf5dc1854aa0cfeef_xhdpi' },
  { id: 9, name: 'Shopee Choice', icon: 'https://cf.shopee.vn/file/vn-50009109-1e35d25e0e02addf9b0edff09503add5_xhdpi' },
  { id: 10, name: 'Hàng Hiệu Deal Hời', icon: 'https://cf.shopee.vn/file/vn-50009109-b7bc6c9cedbe3dfb3a0e695d71a17937_xhdpi' }
]
</script>

<template>
  <div class="small-categories bg-white rounded-sm drop-shadow-sm p-4 mb-5">
    <div class="flex">
      <div 
        v-for="cat in categories" 
        :key="cat.id" 
        class="flex-1 flex flex-col items-center cursor-pointer group hover:-translate-y-0.5 transition-transform"
      >
        <div class="w-11 h-11 mb-2">
          <img :src="cat.icon" :alt="cat.name" class="w-full h-full object-contain" />
        </div>
        <div class="text-[13px] text-gray-800 text-center leading-tight px-1 group-hover:text-shopee group-hover:font-medium">
          {{ cat.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-shopee {
  color: #ee4d2d;
}
</style>
