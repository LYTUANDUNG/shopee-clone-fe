<script setup lang="ts">
import Avatar from '@/shared/components/atoms/Avatar.vue';
import Rating from '@/shared/components/atoms/Rating.vue';

const reviews = [
  {
    id: 1,
    author: 'nguyenvana123',
    avatar: 'https://down-vn.img.susercontent.com/file/vn-11134216-7r98o-lst1z78p9y49ec@resize_w120_nl.webp',
    rating: 5,
    date: '2023-11-20 14:30',
    variant: 'Phân loại hàng: Đen, M',
    content: 'Áo đẹp lắm shop ơi, vải dày dặn, form chuẩn. Sẽ ủng hộ shop tiếp vào lần sau ạ!',
    images: [
      'https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mipuh16cvd350a.webp',
      'https://down-vn.img.susercontent.com/file/vn-11134207-820l4-midywhy6emm986.webp'
    ]
  },
  {
    id: 2,
    author: 'tranb456',
    avatar: '',
    rating: 4,
    date: '2023-11-18 09:15',
    variant: 'Phân loại hàng: Trắng, L',
    content: 'Chất lượng áo khá tốt, giao hàng nhanh. Tuy nhiên áo hơi rộng so với mình nghĩ.',
    images: []
  }
];
</script>

<template>
  <div class="bg-white p-6 rounded shadow-sm">
    <h2 class="text-lg font-medium text-gray-800 mb-6 uppercase">Đánh Giá Sản Phẩm</h2>
    
    <!-- Filter -->
    <div class="bg-orange-50 p-4 flex gap-4 items-center flex-wrap mb-6 border border-orange-100 rounded-[2px]">
      <div class="text-center mr-8">
        <div class="text-orange-500 font-medium whitespace-nowrap"><span class="text-3xl">4.9</span>/5</div>
        <div class="flex justify-center mt-1"><Rating :rating="4.9" :size="16" /></div>
      </div>
      <!-- Filters Mock -->
      <div class="flex flex-wrap gap-2">
         <button class="px-3 py-1 bg-white border border-orange-500 text-orange-500 rounded-[2px] text-sm">Tất Cả</button>
         <button class="px-3 py-1 bg-white border border-gray-300 text-gray-800 rounded-[2px] text-sm">5 Sao (1.2k)</button>
         <button class="px-3 py-1 bg-white border border-gray-300 text-gray-800 rounded-[2px] text-sm">Có Hình Ảnh / Video (300)</button>
      </div>
    </div>

    <!-- Review List -->
    <div class="flex flex-col gap-6">
      <div v-for="review in reviews" :key="review.id" class="flex gap-4 border-b border-gray-100 pb-6 last:border-0 last:pb-0">
        <Avatar :src="review.avatar" size="base" class="flex-shrink-0" />
        <div class="flex-1">
          <div class="text-xs text-gray-800 font-medium">{{ review.author }}</div>
          <div class="mt-1"><Rating :rating="review.rating" :size="12" /></div>
          <div class="text-xs text-gray-500 mt-1">{{ review.date }} | {{ review.variant }}</div>
          <div class="mt-3 text-sm text-gray-800 leading-relaxed">{{ review.content }}</div>
          <div v-if="review.images.length" class="flex flex-wrap gap-2 mt-3">
            <img v-for="(img, idx) in review.images" :key="idx" :src="img" class="w-[72px] h-[72px] object-cover cursor-pointer border border-gray-200 rounded-[2px]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
