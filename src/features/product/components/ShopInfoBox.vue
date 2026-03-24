<script setup lang="ts">
import Avatar from '@/shared/components/atoms/Avatar.vue';
import BaseButton from '@/shared/components/atoms/BaseButton.vue';
import { MessageSquare, Store } from 'lucide-vue-next';
</script>

<template>
  <div class="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white rounded shadow-sm">
    <!-- Shop Avatar & Actions -->
    <div class="flex items-center gap-4 sm:pr-6 sm:border-r sm:border-gray-200">
      <div class="relative">
        <Avatar src="https://down-vn.img.susercontent.com/file/vn-11134216-7r98o-lst1z78p9y49ec@resize_w120_nl.webp" alt="Shop Avatar" size="lg" />
        <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
      </div>
      <div class="flex flex-col gap-2">
        <h3 class="font-medium text-gray-800 text-base">SHOPEE OFFICIAL VN</h3>
        <p class="text-xs text-gray-500">Online 5 Phút Trước</p>
        <div class="flex gap-2 mt-1">
          <BaseButton 
            size="sm" 
            bgColor="bg-orange-50" 
            textColor="text-orange-500" 
            customClasses="border border-orange-500 !h-8 px-3"
            labelClasses="gap-1 flex items-center"
          >
            <MessageSquare class="w-4 h-4" />
            Chat Ngay
          </BaseButton>
          <BaseButton 
            size="sm" 
            bgColor="bg-white" 
            textColor="text-gray-600" 
            customClasses="border border-gray-300 !h-8 px-3"
            labelClasses="gap-1 flex items-center"
          >
            <Store class="w-4 h-4" />
            Xem Shop
          </BaseButton>
        </div>
      </div>
    </div>

    <!-- Shop Stats -->
    <div class="flex-1 grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 text-sm">
      <div class="flex items-center gap-2 justify-between md:justify-start">
        <span class="text-gray-500">Đánh Giá</span>
        <span class="text-orange-500">12,6k</span>
      </div>
      <div class="flex items-center gap-2 justify-between md:justify-start">
        <span class="text-gray-500">Tỉ Lệ Phản Hồi</span>
        <span class="text-orange-500">95%</span>
      </div>
      <div class="flex items-center gap-2 justify-between md:justify-start">
        <span class="text-gray-500">Tham Gia</span>
        <span class="text-orange-500">5 năm trước</span>
      </div>
      <div class="flex items-center gap-2 justify-between md:justify-start">
        <span class="text-gray-500">Sản Phẩm</span>
        <span class="text-orange-500">145</span>
      </div>
      <div class="flex items-center gap-2 justify-between md:justify-start">
        <span class="text-gray-500">Thời Gian Phản Hồi</span>
        <span class="text-orange-500">trong vài giờ</span>
      </div>
      <div class="flex items-center gap-2 justify-between md:justify-start">
        <span class="text-gray-500">Người Theo Dõi</span>
        <span class="text-orange-500">52,5k</span>
      </div>
    </div>
  </div>
</template>
