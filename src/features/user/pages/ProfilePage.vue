<script setup lang="ts">
import { ref } from 'vue';
import Header from '@/shared/components/organisms/Header.vue';
import BaseInput from '@/shared/components/atoms/BaseInput.vue';
import BaseButton from '@/shared/components/atoms/BaseButton.vue';
import Avatar from '@/shared/components/atoms/Avatar.vue';
import { useProfile } from '../composables/useProfile';
import { PROFILE_CONSTANTS } from '../constants/profile.constants';
import { 
  User,
  FileText,
  Ticket,
  Coins
} from 'lucide-vue-next';

const {
  profile,
  isLoading,
  isSaving,
  error,
  successMessage,
  avatarPreview,
  handleAvatarChange,
  saveProfile
} = useProfile();

const fileInput = ref<HTMLInputElement | null>(null);

const triggerFileInput = () => {
  fileInput.value?.click();
};
</script>

<template>
  <div class="user-profile-page min-h-screen bg-[#f5f5f5]">
    <Header />

    <main class="container mx-auto mt-8 w-[1200px] max-w-full pb-10">
      <div v-if="isLoading" class="flex justify-center p-20">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-shopee-orange"></div>
      </div>
      
      <div v-else class="flex gap-4">
        <!-- Sidebar Menu -->
        <aside class="w-[180px] shrink-0">
          <div class="flex items-center gap-3 py-4 border-b border-gray-200">
            <Avatar :src="avatarPreview || profile.avatarUrl" :fallback-text="profile.name || profile.username" size="sm" />
            <div class="flex flex-col overflow-hidden">
              <span class="font-semibold text-[#333] truncate text-sm">{{ profile.username }}</span>
              <a href="#" class="text-xs text-[#888] flex items-center gap-1 hover:text-shopee-orange">
                <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" style="fill: currentcolor;"><path d="M8.54 0L6.987 1.56l3.46 3.48L12 3.48M0 8.52l.073 3.428L3.46 12l6.21-6.18-3.46-3.48"></path></svg>
                Sửa Hồ Sơ
              </a>
            </div>
          </div>
          
          <nav class="mt-6 flex flex-col gap-4">
            <div>
              <div class="flex items-center gap-2 mb-2 text-shopee-orange font-medium text-sm">
                <User class="w-5 h-5 text-[#1f59c1]" />
                {{ PROFILE_CONSTANTS.SIDEBAR.MY_ACCOUNT }}
              </div>
              <ul class="flex flex-col gap-2 pl-7 text-sm">
                <li><a href="#" class="text-shopee-orange cursor-pointer">{{ PROFILE_CONSTANTS.SIDEBAR.PROFILE }}</a></li>
                <li><a href="#" class="text-gray-600 hover:text-shopee-orange">{{ PROFILE_CONSTANTS.SIDEBAR.BANK }}</a></li>
                <li><a href="#" class="text-gray-600 hover:text-shopee-orange">{{ PROFILE_CONSTANTS.SIDEBAR.ADDRESS }}</a></li>
                <li><a href="#" class="text-gray-600 hover:text-shopee-orange">{{ PROFILE_CONSTANTS.SIDEBAR.CHANGE_PASSWORD }}</a></li>
                <li><a href="#" class="text-gray-600 hover:text-shopee-orange">{{ PROFILE_CONSTANTS.SIDEBAR.NOTIFICATION_SETTINGS }}</a></li>
                <li><a href="#" class="text-gray-600 hover:text-shopee-orange">{{ PROFILE_CONSTANTS.SIDEBAR.PRIVACY_SETTINGS }}</a></li>
              </ul>
            </div>
            
            <a href="#" class="flex items-center gap-2 text-gray-700 hover:text-shopee-orange font-medium text-sm">
              <FileText class="w-5 h-5 text-[#1f59c1]" />
              {{ PROFILE_CONSTANTS.SIDEBAR.ORDERS }}
            </a>
            <a href="#" class="flex items-center gap-2 text-gray-700 hover:text-shopee-orange font-medium text-sm">
              <Ticket class="w-5 h-5 text-[#ee4d2d]" />
              {{ PROFILE_CONSTANTS.SIDEBAR.VOUCHERS }}
            </a>
            <a href="#" class="flex items-center gap-2 text-gray-700 hover:text-shopee-orange font-medium text-sm">
              <Coins class="w-5 h-5 text-[#f1c40f]" />
              {{ PROFILE_CONSTANTS.SIDEBAR.COINS }}
            </a>
          </nav>
        </aside>

        <!-- Main Content -->
        <div class="flex-1 bg-white rounded-sm shadow-sm">
          <div class="border-b border-gray-100 py-4 px-6">
            <h1 class="text-lg font-medium text-[#333]">{{ PROFILE_CONSTANTS.PAGE_TITLE }}</h1>
            <p class="text-sm text-gray-500 mt-1">{{ PROFILE_CONSTANTS.PAGE_SUBTITLE }}</p>
          </div>

          <div v-if="error" class="mx-6 mt-4 p-3 bg-red-50 text-red-600 text-sm rounded-sm">
            {{ error }}
          </div>
          <div v-if="successMessage" class="mx-6 mt-4 p-3 bg-green-50 text-green-600 text-sm rounded-sm">
            {{ successMessage }}
          </div>

          <form @submit.prevent="saveProfile" class="flex p-6">
            <!-- Left Side: Form Fields -->
            <div class="flex-1 pr-12 pb-8 flex flex-col gap-6">
              
              <div class="flex items-center">
                <div class="w-[20%] text-right pr-5 text-sm text-gray-500">{{ PROFILE_CONSTANTS.LABELS.USERNAME }}</div>
                <div class="w-[80%] text-sm text-[#333] font-medium">
                  {{ profile.username }}
                  <p class="text-xs text-gray-400 font-normal mt-1">{{ PROFILE_CONSTANTS.MESSAGES.USERNAME_HINT }}</p>
                </div>
              </div>

              <div class="flex items-center">
                <div class="w-[20%] text-right pr-5 text-sm text-gray-500">{{ PROFILE_CONSTANTS.LABELS.NAME }}</div>
                <div class="w-[80%] max-w-[400px]">
                  <BaseInput v-model="profile.name" />
                </div>
              </div>

              <div class="flex items-center">
                <div class="w-[20%] text-right pr-5 text-sm text-gray-500">{{ PROFILE_CONSTANTS.LABELS.EMAIL }}</div>
                <div class="w-[80%] text-sm text-[#333] flex items-center">
                  {{ profile.email }}
                  <button type="button" class="ml-4 text-[#0055aa] underline text-xs">
                    {{ PROFILE_CONSTANTS.BUTTONS.CHANGE }}
                  </button>
                </div>
              </div>

              <div class="flex items-center">
                <div class="w-[20%] text-right pr-5 text-sm text-gray-500">{{ PROFILE_CONSTANTS.LABELS.PHONE }}</div>
                <div class="w-[80%] text-sm text-[#333] flex items-center">
                  {{ profile.phone }}
                  <button type="button" class="ml-4 text-[#0055aa] underline text-xs">
                    {{ PROFILE_CONSTANTS.BUTTONS.CHANGE }}
                  </button>
                </div>
              </div>

              <div class="flex items-center">
                <div class="w-[20%] text-right pr-5 text-sm text-gray-500">{{ PROFILE_CONSTANTS.LABELS.GENDER }}</div>
                <div class="w-[80%] text-sm text-[#333] flex gap-4">
                  <label v-for="option in PROFILE_CONSTANTS.GENDER_OPTIONS" :key="option.value" class="flex items-center gap-2 cursor-pointer">
                    <input type="radio" :value="option.value" v-model="profile.gender" class="accent-shopee-orange" />
                    {{ option.label }}
                  </label>
                </div>
              </div>

              <div class="flex items-center">
                <div class="w-[20%] text-right pr-5 text-sm text-gray-500">{{ PROFILE_CONSTANTS.LABELS.DOB }}</div>
                <div class="w-[80%] text-sm text-[#333] flex items-center">
                  {{ profile.dob }}
                  <button type="button" class="ml-4 text-[#0055aa] underline text-xs">
                    {{ PROFILE_CONSTANTS.BUTTONS.CHANGE }}
                  </button>
                </div>
              </div>

              <div class="flex items-center mt-2">
                <div class="w-[20%]"></div>
                <div class="w-[80%]">
                  <BaseButton 
                    type="submit"
                    :label="isSaving ? 'Đang lưu...' : PROFILE_CONSTANTS.BUTTONS.SAVE"
                    :disabled="isSaving"
                    custom-classes="bg-shopee-orange text-white px-8 py-2 rounded-sm hover:bg-[#d73f22] disabled:opacity-70 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

            </div>

            <!-- Right Side: Avatar Upload -->
            <div class="w-[280px] border-l border-gray-100 flex flex-col items-center pt-8 px-6">
              <div class="w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center overflow-hidden border border-gray-100 mb-5 relative group">
                <Avatar 
                  :src="avatarPreview || profile.avatarUrl" 
                  :fallback-text="profile.name || profile.username" 
                  size="lg" 
                  class="w-full h-full object-cover rounded-full" 
                />
              </div>
              
              <input 
                type="file" 
                ref="fileInput" 
                accept="image/jpeg, image/png" 
                class="hidden" 
                @change="handleAvatarChange" 
              />
              
              <BaseButton 
                type="button"
                @click="triggerFileInput"
                :label="PROFILE_CONSTANTS.BUTTONS.CHOOSE_IMAGE"
                bg-color="bg-white"
                text-color="text-[#555]"
                custom-classes="border text-sm px-4 py-2 rounded-sm hover:bg-gray-50 shadow-sm font-normal mb-4"
              />
              
              <div class="text-xs text-gray-400 text-center space-y-1">
                <p>{{ PROFILE_CONSTANTS.MESSAGES.IMAGE_REQUIREMENT_SIZE }}</p>
                <p>{{ PROFILE_CONSTANTS.MESSAGES.IMAGE_REQUIREMENT_FORMAT }}</p>
              </div>
            </div>
            
          </form>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
</style>
