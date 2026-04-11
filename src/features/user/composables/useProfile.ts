import { ref, onMounted } from 'vue';
import { profileApi } from '../api/profile.api';
import type { UserProfile } from '../api/profile.api';
import { PROFILE_CONSTANTS } from '../constants/profile.constants';

export function useProfile() {
  const profile = ref<UserProfile>({
    username: '',
    name: '',
    email: '',
    phone: '',
    gender: '',
    dob: '',
    avatarUrl: ''
  });
  
  const isLoading = ref(true);
  const isSaving = ref(false);
  const error = ref('');
  const successMessage = ref('');
  
  const avatarFile = ref<File | null>(null);
  const avatarPreview = ref('');

  const fetchProfile = async () => {
    isLoading.value = true;
    error.value = '';
    try {
      const data = await profileApi.getProfile();
      profile.value = data;
    } catch (err: any) {
      error.value = err.message || 'Lỗi khi tải thông tin hồ sơ';
    } finally {
      isLoading.value = false;
    }
  };

  const handleAvatarChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      
      // Validate file size and type
      if (file.size > 1024 * 1024) {
        error.value = PROFILE_CONSTANTS.MESSAGES.IMAGE_SIZE_ERROR;
        return;
      }
      
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        error.value = PROFILE_CONSTANTS.MESSAGES.IMAGE_FORMAT_ERROR;
        return;
      }
      
      error.value = '';
      avatarFile.value = file;
      avatarPreview.value = URL.createObjectURL(file);
    }
  };

  const saveProfile = async () => {
    isSaving.value = true;
    error.value = '';
    successMessage.value = '';
    try {
      const updatedProfile = await profileApi.updateProfile(profile.value, avatarFile.value || undefined);
      profile.value = updatedProfile;
      successMessage.value = PROFILE_CONSTANTS.MESSAGES.SAVE_SUCCESS;
      
      // Clear preview state since it's saved now
      if (avatarPreview.value) {
        avatarPreview.value = ''; // It will fallback to the saved avatarUrl
      }
      avatarFile.value = null;
    } catch (err: any) {
      error.value = err.message || PROFILE_CONSTANTS.MESSAGES.SAVE_ERROR;
    } finally {
      isSaving.value = false;
    }
  };

  onMounted(() => {
    fetchProfile();
  });

  return {
    profile,
    isLoading,
    isSaving,
    error,
    successMessage,
    avatarFile,
    avatarPreview,
    handleAvatarChange,
    saveProfile
  };
}
