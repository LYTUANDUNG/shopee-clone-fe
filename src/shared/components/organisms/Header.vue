<template>
  <header class="shopee-header">
    <div class="container">
      <nav class="top-nav">
        <div class="top-nav-left">
          <a href="#" class="nav-link">Kênh Người Bán</a>
          <span class="divider">|</span>
          <a href="#" class="nav-link">Tải ứng dụng</a>
          <span class="divider">|</span>
          <span class="nav-link">
            Kết nối <FacebookIcon :size="14" class="social-icon" /> <InstagramIcon :size="14" class="social-icon" />
          </span>
        </div>

        <div class="top-nav-right">
          <div class="nav-item">
            <BellIcon :size="16" /> Thông báo
          </div>
          <div class="nav-item">
            <HelpCircleIcon :size="16" /> Hỗ trợ
          </div>

          <span class="divider">|</span>
          <div class="nav-item language-selector">
            <GlobeIcon :size="16" />
            Tiếng Việt
            <ChevronDownIcon :size="12" class="chevron-icon" />

            <div class="language-dropdown">
              <div class="dropdown-arrow"></div>
              <ul class="language-list">
                <li class="language-option">Tiếng Việt</li>
                <li class="language-option">English</li>
              </ul>
            </div>
          </div>
          <span class="divider">|</span>

          <div class="auth-group">
            <div class="nav-item auth-item">Đăng ký</div>
            <span class="divider">|</span>
            <div class="nav-item auth-item">Đăng nhập</div>
          </div>
        </div>
      </nav>

      <div class="main-header">
        <LogoShopee />

        <div class="search-section">
          <SearchInput
              v-model="searchQuery"
              placeholder="Shopee bao ship 0Đ - Đăng ký ngay!"
              @search="handleSearch"
          >
            <template #suffix>
              <button class="btn-search">
                <SearchIcon :size="18" color="#fff" />
              </button>
            </template>
          </SearchInput>

          <div class="hot-words">
            <span
                v-for="word in [
                'Sục Crocs', 'Áo Khoác', 'Ốp Đẹp',
                'Quần Bò Ống Rộng Cạp Cao', 'Son Romand Juicy 24',
                'Giày Quai Hậu Nữ Đế Cao', 'iPhone 14 Pro Max Giá Rẻ 1k'
              ]"
                :key="word"
                class="search-suggestion"
                @click="handleSearch(word)"
            >
              {{ word }}
            </span>
          </div>
        </div>

        <div class="cart-section">
          <ShoppingCartIcon :size="28" color="#fff" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  Bell as BellIcon,
  CircleHelp as HelpCircleIcon,
  ShoppingCart as ShoppingCartIcon,
  Search as SearchIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Globe as GlobeIcon,
  ChevronDown as ChevronDownIcon
} from 'lucide-vue-next';

import LogoShopee from '@/shared/components/atoms/LogoShopee.vue';
import SearchInput from '@/shared/components/molecules/SearchInput.vue';

const router = useRouter();
const searchQuery = ref('');

const handleSearch = (value) => {
  const content = (typeof value === 'string' ? value : searchQuery.value).trim();
  if (content) {
    router.push({ name: 'search', query: { keyword: content } });
  }
};
</script>

<style scoped>
.shopee-header {
  background: linear-gradient(-180deg, #f53d2d, #f63);
  padding: 10px 0;
  color: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.top-nav {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin-bottom: 12px;
}

.top-nav-left, .top-nav-right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.nav-link, .nav-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  color: inherit;
  text-decoration: none;
}

.divider {
  opacity: 0.4;
  font-weight: 300;
  margin: 0 2px;
}

.auth-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.auth-item { font-weight: 500; }

.language-selector {
  position: relative;
  padding: 10px 0;
}

.language-selector:hover .language-dropdown {
  display: block;
}

.language-dropdown {
  position: absolute;
  top: 100%; /* Sát mép vùng đệm */
  right: 0;
  width: 170px;
  background-color: #ffffff !important; /* Trắng đặc 100% */
  opacity: 1 !important;
  border-radius: 2px;
  box-shadow: 0 1px 3.125rem 0 rgba(0, 0, 0, 0.2);
  display: none;
  z-index: 1000; /* Nằm trên cùng */
  animation: fadeIn 0.2s ease-in;
}

.language-dropdown::before {
  content: "";
  position: absolute;
  top: -15px;
  left: 0;
  width: 100%;
  height: 20px;
  display: block;
}

.language-list {
  background-color: #ffffff;
  padding: 5px 0;
  margin: 0;
  list-style: none;
}

.language-option {
  padding: 10px 15px;
  color: #333;
  font-size: 14px;
  background-color: #ffffff;
}

.language-option:hover {
  background-color: #fafafa;
  color: #ee4d2d;
}

.dropdown-arrow {
  position: absolute;
  top: -8px;
  right: 20px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #ffffff;
}

.main-header {
  display: flex;
  align-items: center;
  gap: 40px;
}

.search-section {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.btn-search {
  background: #fb5533;
  border: none;
  padding: 8px 20px;
  margin: 3px;
  border-radius: 2px;
  cursor: pointer;
}

.hot-words {
  display: flex;
  gap: 12px;
  font-size: 12px;
  margin-top: 5px;
  opacity: 0.9;
}

.search-suggestion { cursor: pointer; white-space: nowrap; }
.search-suggestion:hover { opacity: 1; color: #fff; }

.cart-section { cursor: pointer; padding: 10px; }

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>