import { ref, computed, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { registerApi } from '../api/register.api';
import { REGISTER_CONSTANTS } from '../constants/register.constants';

export function useRegisterFlow() {
  const router = useRouter();
  const C = REGISTER_CONSTANTS;

  // ─── State ───────────────────────────────────────────────────────────────────
  const step = ref<1 | 2 | 3>(1);

  // Step 1 – Phone
  const phone = ref('');
  const phoneError = ref('');

  // Step 2 – OTP
  const otp = ref('');
  const otpError = ref('');
  const isVerifyingOtp = ref(false);
  const countdown = ref(C.OTP_COUNTDOWN_SECONDS);
  const canResend = ref(false);
  let countdownTimer: ReturnType<typeof setInterval> | null = null;

  // Step 3 – Password
  const password = ref('');
  const passwordError = ref('');
  const isSubmitting = ref(false);

  // ─── Computed ─────────────────────────────────────────────────────────────────
  const isPhoneValid = computed(() => C.REGEX.PHONE.test(phone.value));
  const isOtpValid = computed(() => otp.value.length === C.OTP_LENGTH);
  const isPasswordValid = computed(() => C.REGEX.PASSWORD.test(password.value));

  const stepLabel = computed(() => C.STEP_LABELS[step.value]);

  const passwordHints = computed(() => ({
    minLength: password.value.length >= 8,
    hasLetter: C.REGEX.HAS_LETTER.test(password.value),
    hasDigit: C.REGEX.HAS_DIGIT.test(password.value),
  }));

  // ─── OTP Countdown ────────────────────────────────────────────────────────────
  function startCountdown() {
    countdown.value = C.OTP_COUNTDOWN_SECONDS;
    canResend.value = false;
    if (countdownTimer) clearInterval(countdownTimer);
    countdownTimer = setInterval(() => {
      countdown.value--;
      if (countdown.value <= 0) {
        clearInterval(countdownTimer!);
        canResend.value = true;
      }
    }, 1000);
  }

  onUnmounted(() => {
    if (countdownTimer) clearInterval(countdownTimer);
  });

  // ─── Handlers ────────────────────────────────────────────────────────────────

  /** Step 1: Validate phone → send OTP → go to step 2 */
  async function handlePhoneSubmit() {
    phoneError.value = '';
    if (!isPhoneValid.value) {
      phoneError.value = C.MESSAGES.PHONE_INVALID;
      return;
    }
    try {
      await registerApi.sendOtp({ phone: phone.value });
      step.value = 2;
      startCountdown();
    } catch {
      phoneError.value = C.MESSAGES.PHONE_INVALID;
    }
  }

  /** Step 2: Verify OTP → go to step 3 */
  async function handleOtpSubmit() {
    otpError.value = '';
    if (!isOtpValid.value) {
      otpError.value = C.MESSAGES.OTP_INVALID;
      return;
    }
    isVerifyingOtp.value = true;
    try {
      await registerApi.verifyOtp({ phone: phone.value, otp: otp.value });
      step.value = 3;
    } catch {
      otpError.value = C.MESSAGES.OTP_WRONG;
    } finally {
      isVerifyingOtp.value = false;
    }
  }

  /** Step 2: Resend OTP */
  async function handleResendOtp() {
    otp.value = '';
    otpError.value = '';
    try {
      await registerApi.sendOtp({ phone: phone.value });
      startCountdown();
    } catch {
      otpError.value = C.MESSAGES.OTP_WRONG;
    }
  }

  /** Step 3: Register → redirect to login */
  async function handlePasswordSubmit() {
    passwordError.value = '';
    if (!isPasswordValid.value) {
      passwordError.value = C.MESSAGES.PASSWORD_INVALID;
      return;
    }
    isSubmitting.value = true;
    try {
      await registerApi.register({ phone: phone.value, otp: otp.value, password: password.value });
      router.push(C.ROUTES.LOGIN);
    } catch {
      passwordError.value = C.MESSAGES.REGISTER_FAILED;
    } finally {
      isSubmitting.value = false;
    }
  }

  return {
    // State
    step,
    phone, phoneError,
    otp, otpError, isVerifyingOtp, countdown, canResend,
    password, passwordError, isSubmitting,
    // Computed
    isPhoneValid, isOtpValid, isPasswordValid,
    stepLabel, passwordHints,
    // Handlers
    handlePhoneSubmit,
    handleOtpSubmit,
    handleResendOtp,
    handlePasswordSubmit,
  };
}
