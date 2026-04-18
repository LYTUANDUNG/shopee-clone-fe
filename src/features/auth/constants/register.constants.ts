export const REGISTER_CONSTANTS = {
  TOTAL_STEPS: 3,

  OTP_LENGTH: 6,
  OTP_COUNTDOWN_SECONDS: 60,
  PHONE_MAX_LENGTH: 10,

  REGEX: {
    PHONE: /^(0[35789])[0-9]{8}$/,
    PASSWORD: /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/,
    HAS_LETTER: /[a-zA-Z]/,
    HAS_DIGIT: /\d/,
  },

  ROUTES: {
    LOGIN: '/login',
  },

  STEP_LABELS: {
    1: 'Nhập số điện thoại',
    2: 'Xác minh OTP',
    3: 'Tạo mật khẩu',
  } as Record<number, string>,

  MESSAGES: {
    PHONE_INVALID: 'Số điện thoại không hợp lệ (phải là 10 số, bắt đầu bằng 03/05/07/08/09)',
    OTP_INVALID: 'Mã OTP phải đủ 6 chữ số',
    OTP_WRONG: 'Mã OTP không đúng, vui lòng thử lại',
    PASSWORD_INVALID: 'Mật khẩu tối thiểu 8 ký tự, bao gồm cả chữ và số',
    REGISTER_FAILED: 'Đăng ký thất bại, vui lòng thử lại',
  },

  LABELS: {
    STEP_NEXT: 'TIẾP THEO',
    STEP_BACK: 'QUAY LẠI',
    OTP_CONFIRM: 'XÁC NHẬN',
    REGISTER: 'ĐĂNG KÝ',
    REGISTERING: 'ĐANG XỬ LÝ...',
    RESEND_OTP: 'Gửi lại mã OTP',
    RESEND_COUNTDOWN: 'Gửi lại sau',
  },

  PASSWORD_HINTS: [
    { key: 'minLength', label: 'Ít nhất 8 ký tự' },
    { key: 'hasLetter', label: 'Có chữ cái' },
    { key: 'hasDigit', label: 'Có chữ số' },
  ],
} as const;
