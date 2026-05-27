import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { useAuthStore } from '@/stores/auth';

const http: AxiosInstance = axios.create({
  // Sử dụng biến môi trường hoặc fallback về port 8081 (user-service)
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8081/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Interceptor cho Request: Tự động đính kèm Token nếu có
http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Không thể import trực tiếp store ở top-level nếu app chưa mount
    // nên ta khởi tạo trong lúc gọi interceptor
    const authStore = useAuthStore();
    if (authStore.accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${authStore.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor cho Response: Xử lý lỗi chung (VD: 401 Hết hạn token)
http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Tự động logout nếu token không hợp lệ hoặc hết hạn
      const authStore = useAuthStore();
      authStore.clearAuth();
      // Tùy chọn: redirect về trang login, 
      // ở đây ta có thể để component tự redirect khi state authentication thay đổi
    }
    return Promise.reject(error);
  }
);

export default http;
