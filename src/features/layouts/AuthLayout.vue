<script setup lang="ts">
import ShopeeLogoWithTitle from '@/shared/components/atoms/ShopeeLogoWithTitle.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white">
    <nav class="XTygfR bg-white">
      <div class="aSMz_B">
        <ShopeeLogoWithTitle>
          <template v-if="$slots['header-title']">
            <slot name="header-title" />
          </template>
        </ShopeeLogoWithTitle>

        <a href="https://help.shopee.vn/vn/s" target="_blank" class="kFs6aX">
          Bạn cần giúp đỡ?
        </a>
      </div>
    </nav>

    <main class="auth-content-wrapper">
      <div class="UCVQlJ">
        <div class="KeDAsM">
          <slot />
        </div>
      </div>
    </main>

    <footer class="bg-[#f5f5f5] py-16 text-center text-xs text-gray-500 uppercase">
      © 2026 Shopee Clone. Project by Hùng.
    </footer>
  </div>
</template>

<style scoped>
.XTygfR {
  box-shadow: 0 6px 6px rgba(0, 0, 0, .06);
  height: 84px;
  display: flex;
  align-items: center;
}

.aSMz_B {
  margin: 0 auto;
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.auth-content-wrapper {
  background-image: url(https://down-vn.img.susercontent.com/file/sg-11134004-8260u-mjxncd2nlouc27);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: rgb(238, 77, 45);
}

.UCVQlJ {
  margin: 0 auto;
  min-height: 600px;
  width: 1040px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.KeDAsM {
  height: 600px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.kFs6aX {
  color: #ee4d2d;
  font-size: 0.875rem;
  text-decoration: none;
}

@media (max-width: 1200px) {
  .aSMz_B { width: 100%; padding: 0 20px; }
}

@media (max-width: 1040px) {
  .UCVQlJ { width: 100%; padding: 0 20px; justify-content: center; }
  .KeDAsM { justify-content: center; }
}
</style>