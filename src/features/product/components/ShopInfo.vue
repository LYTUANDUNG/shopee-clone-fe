<script setup lang="ts">
// ShopInfo component displays the shop information on the product detail page,
// matching the Shopee-like UI shown in the specifications.
</script>

<template>
  <div class="bg-white p-6 rounded shadow-sm mt-4 flex flex-col md:flex-row items-center border-t md:border-t-0">
    <!-- Left Section: Shop Avatar & Name -->
    <div class="flex items-center w-full md:w-[400px] md:border-r border-gray-200 pr-6 mb-4 md:mb-0">
      <div class="relative mr-4 flex-shrink-0">
        <div class="w-[78px] h-[78px] rounded-full border border-gray-200 overflow-hidden bg-[#24b9d7] flex items-center justify-center text-white font-bold text-center leading-tight">
          <div class="flex flex-col items-center">
             <span class="text-xl font-serif">CIDER</span>
             <span class="text-xs font-serif">STORE</span>
          </div>
        </div>
        <div class="absolute -bottom-2 w-full flex justify-center">
            <span class="bg-[#ee4d2d] text-white text-[10px] px-1.5 py-[2px] rounded-sm whitespace-nowrap shadow-sm">Yêu thích</span>
        </div>
      </div>
      <div>
        <h3 class="text-base font-medium text-gray-800 line-clamp-1">CIDER STORE - THỜI TRANG 4 MÙA</h3>
        <p class="text-[13px] text-gray-500 mb-2">Online 1 Phút Trước</p>
        <div class="flex gap-2">
          <button class="flex items-center gap-1.5 border border-[#ee4d2d] text-[#ee4d2d] bg-[#ffedea] px-3 py-1.5 rounded-sm text-sm hover:bg-[#ffe1db] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.157.02.312.041.467.062M11.25 22.5l-3-3v-30" />
            </svg>
            Chat Ngay
          </button>
          <button class="flex items-center gap-1.5 border border-gray-300 text-gray-600 bg-white px-3 py-1.5 rounded-sm text-sm hover:bg-gray-50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5l-3-3v-3h3v3h-3m3 3V13.5" />
            </svg>
            Xem Shop
          </button>
        </div>
      </div>
    </div>

    <!-- Right Section: Stats Grid -->
    <div class="flex-1 w-full pl-0 md:pl-8 grid grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-[14px]">
      <div class="flex justify-between md:justify-start items-center gap-1 md:gap-4">
        <span class="text-gray-500 whitespace-nowrap">Đánh Giá</span>
        <span class="text-[#ee4d2d]">112,2k</span>
      </div>
      <div class="flex justify-between md:justify-start items-center gap-1 md:gap-4">
        <span class="text-gray-500 whitespace-nowrap">Tỉ Lệ Phản Hồi</span>
        <span class="text-[#ee4d2d]">99%</span>
      </div>
      <div class="flex justify-between md:justify-start items-center gap-1 md:gap-4">
        <span class="text-gray-500 whitespace-nowrap">Tham Gia</span>
        <span class="text-[#ee4d2d]">5 năm trước</span>
      </div>
      <div class="flex justify-between md:justify-start items-center gap-1 md:gap-4">
        <span class="text-gray-500 whitespace-nowrap">Sản Phẩm</span>
        <span class="text-[#ee4d2d]">341</span>
      </div>
      <div class="flex justify-between md:justify-start items-center gap-1 md:gap-4">
        <span class="text-gray-500 whitespace-nowrap">Thời Gian Phản Hồi</span>
        <span class="text-[#ee4d2d]">trong vài giờ</span>
      </div>
      <div class="flex justify-between md:justify-start items-center gap-1 md:gap-4">
        <span class="text-gray-500 whitespace-nowrap">Người Theo Dõi</span>
        <span class="text-[#ee4d2d]">135,5k</span>
      </div>
    </div>
  </div>
</template>
