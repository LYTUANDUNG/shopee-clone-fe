<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import AuthLayout from '@/features/layouts/AuthLayout.vue';
import BaseInput from '@/shared/components/atoms/BaseInput.vue';
import BaseButton from '@/shared/components/atoms/BaseButton.vue';
import BaseLink from '@/shared/components/atoms/BaseLink.vue';

const router = useRouter();

// ─── State ───────────────────────────────────────────────────────────────────
const step = ref<1 | 2 | 3>(1);

// Step 1 – Phone
const phone = ref('');
const phoneError = ref('');

// Step 2 – OTP
const otp = ref('');
const otpError = ref('');
const countdown = ref(60);
const canResend = ref(false);
let countdownTimer: ReturnType<typeof setInterval> | null = null;

// Step 3 – Password
const password = ref('');
const passwordError = ref('');
const isSubmitting = ref(false);

// ─── Validators ──────────────────────────────────────────────────────────────
const PHONE_REGEX = /^(0[3|5|7|8|9])[0-9]{8}$/;
const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

const isPhoneValid = computed(() => PHONE_REGEX.test(phone.value));
const isOtpValid  = computed(() => otp.value.length === 6);
const isPasswordValid = computed(() => PASSWORD_REGEX.test(password.value));

// ─── Step label ──────────────────────────────────────────────────────────────
const stepLabel = computed(() => {
  if (step.value === 1) return 'Nhập số điện thoại';
  if (step.value === 2) return 'Xác minh OTP';
  return 'Tạo mật khẩu';
});

// ─── OTP countdown ───────────────────────────────────────────────────────────
function startCountdown() {
  countdown.value = 60;
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

// Step 1: validate phone → go to OTP
function handlePhoneSubmit() {
  phoneError.value = '';
  if (!isPhoneValid.value) {
    phoneError.value = 'Số điện thoại không hợp lệ (phải là 10 số, bắt đầu bằng 03/05/07/08/09)';
    return;
  }
  // TODO: gọi API send-otp ở đây
  step.value = 2;
  startCountdown();
}

// Step 2: gọi API verify-otp → go to password
async function handleOtpSubmit() {
  otpError.value = '';
  if (!isOtpValid.value) {
    otpError.value = 'Mã OTP phải đủ 6 chữ số';
    return;
  }
  try {
    // TODO: thay bằng API call thực tế
    // await verifyOtp({ phone: phone.value, otp: otp.value })
    await new Promise(r => setTimeout(r, 500)); // giả lập network
    step.value = 3;
  } catch {
    otpError.value = 'Mã OTP không đúng, vui lòng thử lại';
  }
}

function handleResendOtp() {
  otp.value = '';
  otpError.value = '';
  // TODO: gọi lại API send-otp
  startCountdown();
}

// Step 3: validate password → call API register → redirect
async function handlePasswordSubmit() {
  passwordError.value = '';
  if (!isPasswordValid.value) {
    passwordError.value = 'Mật khẩu tối thiểu 8 ký tự, bao gồm cả chữ và số';
    return;
  }
  isSubmitting.value = true;
  try {
    // TODO: thay bằng API call thực tế
    // await registerApi({ phone: phone.value, otp: otp.value, password: password.value })
    await new Promise(r => setTimeout(r, 800)); // giả lập network
    router.push('/login');
  } catch {
    passwordError.value = 'Đăng ký thất bại, vui lòng thử lại';
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<template>
  <AuthLayout>
    <template #header-title>Đăng ký</template>

    <div class="register-outer flex justify-end w-full">
      <div class="register-card bg-white p-8 rounded-sm shadow-lg w-[400px]">

        <!-- ── Header ─────────────────────────────────── -->
        <div class="mb-6">
          <h2 class="text-xl font-normal text-[#222]">Đăng ký</h2>

          <!-- Step indicator -->
          <div class="step-indicator mt-3 flex items-center gap-2">
            <template v-for="n in 3" :key="n">
              <div
                class="step-dot"
                :class="{
                  'step-dot--active':  n === step,
                  'step-dot--done':    n < step,
                  'step-dot--pending': n > step
                }"
              >
                <svg v-if="n < step" width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span v-else class="step-dot__num">{{ n }}</span>
              </div>
              <div v-if="n < 3" class="step-line" :class="{ 'step-line--done': n < step }"></div>
            </template>
          </div>

          <p class="text-sm text-gray-500 mt-2">{{ stepLabel }}</p>
        </div>

        <!-- ── STEP 1: PHONE ──────────────────────────── -->
        <form v-if="step === 1" class="space-y-4" @submit.prevent="handlePhoneSubmit">
          <BaseInput
            v-model="phone"
            placeholder="Số điện thoại"
            :is-number-only="true"
            maxlength="10"
            :error="phoneError"
          />
          <BaseButton
            type="submit"
            size="xl"
            label="TIẾP THEO"
            :disabled="!isPhoneValid"
            :custom-classes="[
              'w-full text-white font-medium transition-all',
              isPhoneValid ? 'bg-[#ee4d2d] hover:opacity-90' : 'bg-gray-300 cursor-not-allowed'
            ].join(' ')"
          />
        </form>

        <!-- ── STEP 2: OTP ────────────────────────────── -->
        <form v-else-if="step === 2" class="space-y-4" @submit.prevent="handleOtpSubmit">
          <p class="text-sm text-gray-500">
            Mã OTP đã được gửi đến <strong class="text-[#222]">{{ phone }}</strong>
          </p>

          <BaseInput
            v-model="otp"
            placeholder="Nhập mã OTP (6 số)"
            :is-number-only="true"
            maxlength="6"
            :error="otpError"
          />

          <!-- Countdown / Resend -->
          <div class="text-right text-sm">
            <span v-if="!canResend" class="text-gray-400">
              Gửi lại sau
              <span class="text-[#ee4d2d] font-semibold tabular-nums">{{ countdown }}s</span>
            </span>
            <button
              v-else
              type="button"
              class="text-[#ee4d2d] font-medium hover:opacity-80 transition-opacity"
              @click="handleResendOtp"
            >
              Gửi lại mã OTP
            </button>
          </div>

          <div class="flex gap-3">
            <BaseButton
              type="button"
              size="xl"
              label="QUAY LẠI"
              bg-color="bg-white"
              text-color="text-gray-500"
              custom-classes="flex-1 border border-gray-200 hover:bg-gray-50 font-medium transition-all"
              @click="step = 1"
            />
            <BaseButton
              type="submit"
              size="xl"
              label="XÁC NHẬN"
              :disabled="!isOtpValid"
              :custom-classes="[
                'flex-1 text-white font-medium transition-all',
                isOtpValid ? 'bg-[#ee4d2d] hover:opacity-90' : 'bg-gray-300 cursor-not-allowed'
              ].join(' ')"
            />
          </div>
        </form>

        <!-- ── STEP 3: PASSWORD ───────────────────────── -->
        <form v-else class="space-y-4" @submit.prevent="handlePasswordSubmit">
          <BaseInput
            v-model="password"
            type="password"
            placeholder="Mật khẩu (≥ 8 ký tự, gồm chữ và số)"
            :error="passwordError"
          />

          <!-- Password strength hint -->
          <div class="password-hints text-xs space-y-1">
            <div class="hint-item" :class="password.length >= 8 ? 'hint--ok' : 'hint--no'">
              <span class="hint-icon">{{ password.length >= 8 ? '✓' : '○' }}</span>
              Ít nhất 8 ký tự
            </div>
            <div class="hint-item" :class="/[a-zA-Z]/.test(password) ? 'hint--ok' : 'hint--no'">
              <span class="hint-icon">{{ /[a-zA-Z]/.test(password) ? '✓' : '○' }}</span>
              Có chữ cái
            </div>
            <div class="hint-item" :class="/\d/.test(password) ? 'hint--ok' : 'hint--no'">
              <span class="hint-icon">{{ /\d/.test(password) ? '✓' : '○' }}</span>
              Có chữ số
            </div>
          </div>

          <BaseButton
            type="submit"
            size="xl"
            :label="isSubmitting ? 'ĐANG XỬ LÝ...' : 'ĐĂNG KÝ'"
            :disabled="!isPasswordValid || isSubmitting"
            :custom-classes="[
              'w-full text-white font-medium transition-all',
              isPasswordValid && !isSubmitting ? 'bg-[#ee4d2d] hover:opacity-90' : 'bg-gray-300 cursor-not-allowed'
            ].join(' ')"
          />
        </form>

        <!-- ── Footer (Social + Login link) ─────────────── -->
        <template v-if="step === 1">
          <div class="mt-4">
            <div class="flex items-center gap-4">
              <div class="flex-grow border-t border-gray-200"></div>
              <span class="text-gray-400 text-[10px] uppercase font-medium">hoặc</span>
              <div class="flex-grow border-t border-gray-200"></div>
            </div>
            <div class="grid grid-cols-2 gap-2 mt-4">
              <BaseButton
                bg-color="bg-white"
                text-color="text-[#222]"
                custom-classes="border !border-black/10 hover:bg-gray-50 font-normal shadow-sm flex items-center justify-center h-10"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                     class="w-5 h-5 mr-2" alt="FB"/>
                Facebook
              </BaseButton>
              <BaseButton
                bg-color="bg-white"
                text-color="text-[#222]"
                custom-classes="border !border-black/10 hover:bg-gray-50 font-normal shadow-sm flex items-center justify-center h-10"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                     class="w-5 h-5 mr-2" alt="GG"/>
                Google
              </BaseButton>
            </div>
          </div>

          <div class="mt-6 text-center text-[12px] text-[#222] leading-relaxed px-2">
            Bằng việc đăng ký, bạn đã đồng ý với Shopee về
            <BaseLink to="/terms" variant="orange" class="font-bold no-underline mx-1">Điều khoản dịch vụ</BaseLink> &amp;
            <BaseLink to="/privacy" variant="orange" class="font-bold no-underline mx-1">Chính sách bảo mật</BaseLink>
          </div>
        </template>

        <div class="mt-8 text-center text-sm text-gray-400 border-t pt-6 border-gray-100">
          Bạn đã có tài khoản?
          <BaseLink to="/login" variant="orange" class="font-bold ml-1 no-underline">Đăng nhập</BaseLink>
        </div>

      </div>
    </div>
  </AuthLayout>
</template>

<style scoped>
/* ── Step indicator ──────────────────────────────── */
.step-dot {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 600;
  flex-shrink: 0;
  transition: background-color 0.25s, color 0.25s;
}

.step-dot--active {
  background: #ee4d2d;
  color: white;
}

.step-dot--done {
  background: #ee4d2d;
  color: white;
}

.step-dot--pending {
  background: #e8e8e8;
  color: #aaa;
}

.step-dot__num {
  line-height: 1;
}

.step-line {
  flex: 1;
  height: 2px;
  background: #e8e8e8;
  transition: background-color 0.25s;
}

.step-line--done {
  background: #ee4d2d;
}

/* ── Password hints ──────────────────────────────── */
.password-hints {
  background: #fafafa;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  padding: 8px 12px;
}

.hint-item {
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s;
}

.hint--ok  { color: #27ae60; }
.hint--no  { color: #bbb; }

.hint-icon {
  font-size: 12px;
  width: 14px;
  text-align: center;
}
</style>