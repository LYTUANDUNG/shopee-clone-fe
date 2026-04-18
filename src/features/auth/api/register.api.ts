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
  sendOtp: async (_payload: SendOtpPayload): Promise<void> => {
    // TODO: replace with real HTTP call, e.g.:
    // return httpClient.post('/auth/send-otp', payload)
    return new Promise<void>((resolve) => setTimeout(resolve, 400));
  },

  verifyOtp: async (_payload: VerifyOtpPayload): Promise<void> => {
    // TODO: replace with real HTTP call, e.g.:
    // return httpClient.post('/auth/verify-otp', payload)
    return new Promise<void>((resolve) => setTimeout(resolve, 500));
  },

  register: async (_payload: RegisterPayload): Promise<RegisterResponse> => {
    // TODO: replace with real HTTP call, e.g.:
    // return httpClient.post('/auth/register', payload)
    return new Promise<RegisterResponse>((resolve) =>
      setTimeout(() => resolve({ message: 'Đăng ký thành công' }), 800)
    );
  },
};
