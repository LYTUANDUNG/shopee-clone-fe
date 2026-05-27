import http from '@/lib/http';

export interface LoginPayload {
  email?: string;
  phone?: string;
  password: string;
}

export interface LoginResponse {
  user: {
    id: string;
    name: string;
    email?: string;
    phone?: string;
  };
  accessToken: string;
}

export const loginApi = {
  login: async (payload: LoginPayload): Promise<LoginResponse> => {
    // Gọi thực tế qua instance axios đã setup config interceptor
    return http.post('/auth/login', payload);
  },
};
