import http from '@/lib/http';

export interface SendOtpPayload {
  phone: string;
}

export interface VerifyOtpPayload {
  phone: string;
  otp: string;
}

export interface RegisterPayload {
  phone: string;
  otp: string;
  password: string;
}

export interface RegisterResponse {
  message: string;
}

export const registerApi = {
  sendOtp: async (payload: SendOtpPayload): Promise<void> => {
    return http.post('/auth/send-otp', payload);
  },

  verifyOtp: async (payload: VerifyOtpPayload): Promise<void> => {
    return http.post('/auth/verify-otp', payload);
  },

  register: async (payload: RegisterPayload): Promise<RegisterResponse> => {
    return http.post('/auth/register', payload);
  },
};
