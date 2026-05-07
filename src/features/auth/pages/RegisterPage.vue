<script setup lang="ts">
import AuthLayout from '@/features/layouts/AuthLayout.vue';
import BaseInput from '@/shared/components/atoms/BaseInput.vue';
import BaseButton from '@/shared/components/atoms/BaseButton.vue';
import BaseLink from '@/shared/components/atoms/BaseLink.vue';
import { useRegisterFlow } from '../composables/useRegisterFlow';
import { REGISTER_CONSTANTS } from '../constants/register.constants';

const C = REGISTER_CONSTANTS;

const {
  step,
  phone, phoneError,
  otp, otpError, isVerifyingOtp, countdown, canResend,
  password, passwordError, isSubmitting,
  isPhoneValid, isOtpValid, isPasswordValid,
  stepLabel, passwordHints,
  handlePhoneSubmit,
  handleOtpSubmit,
  handleResendOtp,
  handlePasswordSubmit,
} = useRegisterFlow();
</script>

<template>
  <AuthLayout>
    <template #header-title>Đăng ký</template>

    <div class="flex justify-end w-full">
      <div class="bg-white p-8 rounded-sm shadow-lg w-[400px]">

        <!-- ── Header ─────────────────────────────────── -->
        <div class="mb-6">
          <h2 class="text-xl font-normal text-[#222]">Đăng ký</h2>

          <!-- Step indicator -->
          <div class="step-indicator mt-3 flex items-center gap-2">
            <template v-for="n in C.TOTAL_STEPS" :key="n">
              <div
                class="step-dot"
                :class="{
                  'step-dot--active':  n === step,
                  'step-dot--done':    n < step,
                  'step-dot--pending': n > step,
                }"
              >
                <svg v-if="n < step" width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span v-else class="step-dot__num">{{ n }}</span>
              </div>
              <div v-if="n < C.TOTAL_STEPS" class="step-line" :class="{ 'step-line--done': n < step }"></div>
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
            :maxlength="C.PHONE_MAX_LENGTH"
            :error="phoneError"
          />
          <BaseButton
            type="submit"
            size="xl"
            :label="C.LABELS.STEP_NEXT"
            :disabled="!isPhoneValid"
            :custom-classes="[
              'w-full text-white font-medium transition-all',
              isPhoneValid ? 'bg-[#ee4d2d] hover:opacity-90' : 'bg-gray-300 cursor-not-allowed',
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
            :maxlength="C.OTP_LENGTH"
            :error="otpError"
          />

          <!-- Countdown / Resend -->
          <div class="text-right text-sm">
            <span v-if="!canResend" class="text-gray-400">
              {{ C.LABELS.RESEND_COUNTDOWN }}
              <span class="text-[#ee4d2d] font-semibold tabular-nums">{{ countdown }}s</span>
            </span>
            <button
              v-else
              type="button"
              class="text-[#ee4d2d] font-medium hover:opacity-80 transition-opacity"
              @click="handleResendOtp"
            >
              {{ C.LABELS.RESEND_OTP }}
            </button>
          </div>

          <div class="flex gap-3">
            <BaseButton
              type="button"
              size="xl"
              :label="C.LABELS.STEP_BACK"
              bg-color="bg-white"
              text-color="text-gray-500"
              custom-classes="flex-1 border border-gray-200 hover:bg-gray-50 font-medium transition-all"
              @click="step = 1"
            />
            <BaseButton
              type="submit"
              size="xl"
              :label="C.LABELS.OTP_CONFIRM"
              :disabled="!isOtpValid || isVerifyingOtp"
              :custom-classes="[
                'flex-1 text-white font-medium transition-all',
                isOtpValid && !isVerifyingOtp ? 'bg-[#ee4d2d] hover:opacity-90' : 'bg-gray-300 cursor-not-allowed',
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

          <!-- Password strength hints -->
          <div class="password-hints text-xs space-y-1">
            <div
              v-for="hint in C.PASSWORD_HINTS"
              :key="hint.key"
              class="hint-item"
              :class="passwordHints[hint.key as keyof typeof passwordHints] ? 'hint--ok' : 'hint--no'"
            >
              <span class="hint-icon">
                {{ passwordHints[hint.key as keyof typeof passwordHints] ? '✓' : '○' }}
              </span>
              {{ hint.label }}
            </div>
          </div>

          <BaseButton
            type="submit"
            size="xl"
            :label="isSubmitting ? C.LABELS.REGISTERING : C.LABELS.REGISTER"
            :disabled="!isPasswordValid || isSubmitting"
            :custom-classes="[
              'w-full text-white font-medium transition-all',
              isPasswordValid && !isSubmitting ? 'bg-[#ee4d2d] hover:opacity-90' : 'bg-gray-300 cursor-not-allowed',
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
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                  class="w-5 h-5 mr-2"
                  alt="Facebook"
                />
                Facebook
              </BaseButton>
              <BaseButton
                bg-color="bg-white"
                text-color="text-[#222]"
                custom-classes="border !border-black/10 hover:bg-gray-50 font-normal shadow-sm flex items-center justify-center h-10"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                  class="w-5 h-5 mr-2"
                  alt="Google"
                />
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
          <BaseLink :to="C.ROUTES.LOGIN" variant="orange" class="font-bold ml-1 no-underline">Đăng nhập</BaseLink>
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
.step-dot--active { background: #ee4d2d; color: white; }
.step-dot--done   { background: #ee4d2d; color: white; }
.step-dot--pending { background: #e8e8e8; color: #aaa; }
.step-dot__num { line-height: 1; }

.step-line {
  flex: 1;
  height: 2px;
  background: #e8e8e8;
  transition: background-color 0.25s;
}
.step-line--done { background: #ee4d2d; }

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
.hint--ok { color: #27ae60; }
.hint--no { color: #bbb; }
.hint-icon { font-size: 12px; width: 14px; text-align: center; }
</style>