<script setup lang="ts">
import { ref, computed } from 'vue';
import type { Address, ShippingOption, Voucher, PaymentMethod, CheckoutItem } from '@/features/checkout/types/checkout.types';
import BaseButton from "@/shared/components/atoms/BaseButton.vue";

const props = defineProps<{
  addresses: Address[];
  shippingOptions: ShippingOption[];
  shopVouchers: Voucher[];
  shopeeVouchers: Voucher[];
  paymentMethods: PaymentMethod[];
  checkoutItems: CheckoutItem[];
  userShopeeXu: number;
}>();

const isShowAddressModal = ref(false);
const isShowShippingModal = ref(false);
const isShowShopVoucherModal = ref(false);
const isShowShopeeVoucherModal = ref(false);
const isOrdering = ref(false);
const isHasInsurance = ref(false);
const insurancePrice = 579;

const selectedAddressId = ref(props.addresses[0]?.id);
const currentAddress = computed(() => props.addresses.find(a => a.id === selectedAddressId.value) || props.addresses[0]);

const selectedShippingOption = ref(props.shippingOptions[0]?.id);
const shippingFee = ref(37700);
const currentShipping = computed(() => props.shippingOptions.find(o => o.id === selectedShippingOption.value));

const confirmShipping = () => {
  if (currentShipping.value) {
    shippingFee.value = currentShipping.value.price;
  }
  isShowShippingModal.value = false;
};

const selectedShopVoucherId = ref<number | null>(null);
const currentShopVoucherDiscount = computed(() => props.shopVouchers.find(v => v.id === selectedShopVoucherId.value)?.discount || 0);

const selectedShopeeVoucherId = ref<number | null>(null);
const shopeeVoucherDiscount = computed(() => props.shopeeVouchers.find(v => v.id === selectedShopeeVoucherId.value)?.discount || 0);

const selectedPaymentId = ref('Ví ShopeePay');
const selectedBankId = ref('bidv');

const localCheckoutItems = ref([...props.checkoutItems]);
const updateQuantity = (id: string, delta: number) => {
  const item = localCheckoutItems.value.find(i => i.id === id);
  if (item && item.quantity + delta >= 1) item.quantity += delta;
};

const totalProductPrice = computed(() =>
    localCheckoutItems.value.reduce((t: number, i: CheckoutItem) => t + (i.price * i.quantity), 0)
);

const totalInsurance = computed(() => isHasInsurance.value ? insurancePrice : 0);
const totalPayment = computed(() => totalProductPrice.value + shippingFee.value + totalInsurance.value - currentShopVoucherDiscount.value - shopeeVoucherDiscount.value);

const handleOrder = () => {
  isOrdering.value = true;
  setTimeout(() => { isOrdering.value = false; alert(" Đặt hàng thành công!"); }, 1000);
};
</script>

<template>
  <div class="checkout-container bg-[#f5f5f5] min-h-screen py-5 font-['Helvetica_Neue',_Helvetica,_Arial,_sans-serif]">
    <div class="max-w-[1200px] mx-auto space-y-3 px-4 md:px-0">

      <div class="bg-white shadow-sm rounded-sm overflow-hidden">
        <div class="h-[3px] bg-[repeating-linear-gradient(45deg,#6fa6d6,#6fa6d6_33px,transparent_0,transparent_41px,#f18d9b_0,#f18d9b_74px,transparent_0,transparent_82px)]"></div>
        <div class="p-6">
          <div class="flex items-center gap-2 text-[#ee4d2d] mb-4 text-lg">
            <svg class="w-4 h-5 fill-current" viewBox="0 0 12 16"><path d="M6 3.2c1.506 0 2.727 1.195 2.727 2.667 0 1.473-1.22 2.666-2.727 2.666S3.273 7.34 3.273 5.867C3.273 4.395 4.493 3.2 6 3.2zM0 6c0-3.315 2.686-6 6-6s6 2.685 6 6c0 2.498-1.964 5.742-6 9.933C1.613 11.743 0 8.498 0 6z"/></svg>
            <h2 class="font-medium">Địa Chỉ Nhận Hàng</h2>
          </div>
          <div class="flex items-center justify-between" v-if="currentAddress">
            <div class="flex items-center gap-4 text-[16px]">
              <span class="font-bold text-black">{{ currentAddress.name }} {{ currentAddress.phone }}</span>
              <span class="text-black">{{ currentAddress.detail }}</span>
              <span v-if="currentAddress.isDefault" class="text-[#ee4d2d] border border-[#ee4d2d] text-[10px] px-1 py-0.5 uppercase">Mặc Định</span>
            </div>
            <button @click="isShowAddressModal = true" class="text-[#0055aa] uppercase text-sm font-medium shrink-0">Thay Đổi</button>
          </div>
        </div>
      </div>

      <div class="bg-white shadow-sm rounded-sm overflow-hidden">
        <div class="grid grid-cols-12 p-6 pb-2 text-sm text-gray-500 border-b uppercase">
          <div class="col-span-6 font-medium text-black text-base normal-case">Sản phẩm</div>
          <div class="col-span-2 text-center">Đơn giá</div>
          <div class="col-span-2 text-center">Số lượng</div>
          <div class="col-span-2 text-right">Thành tiền</div>
        </div>

        <div v-for="item in localCheckoutItems" :key="item.id">
          <div class="px-6 py-4 flex items-center gap-2 border-b border-gray-50">
            <span class="bg-[#ee4d2d] text-white text-[10px] px-1 rounded-sm">Yêu thích+</span>
            <span class="text-sm font-bold">CAMA STORE</span>
            <span class="text-[#00bfa5] flex items-center gap-1 text-xs border-l pl-2 ml-2 cursor-pointer">Chat ngay</span>
          </div>

          <div class="grid grid-cols-12 items-center p-6 bg-white">
            <div class="col-span-6 flex gap-3">
              <img :src="item.image" class="w-10 h-10 object-cover border" />
              <div class="text-sm">
                <h3 class="line-clamp-1 text-[#222]">{{ item.name }}</h3>
                <div class="text-gray-400 text-xs">Phân loại: {{ item.variation }}</div>
              </div>
            </div>
            <div class="col-span-2 text-center text-sm">₫{{ item.price.toLocaleString() }}</div>
            <div class="col-span-2 flex justify-center">
              <div class="flex items-center border border-gray-200 rounded-sm h-7">
                <button @click="updateQuantity(item.id, -1)" class="w-7 border-r hover:bg-gray-50">-</button>
                <span class="w-8 text-center text-sm">{{ item.quantity }}</span>
                <button @click="updateQuantity(item.id, 1)" class="w-7 border-l hover:bg-gray-50">+</button>
              </div>
            </div>
            <div class="col-span-2 text-right text-sm">₫{{ (item.price * item.quantity).toLocaleString() }}</div>
          </div>

          <div class="mx-6 p-4 bg-[#fafdff] border border-[#bee1ff] flex items-center justify-between mb-4">
            <div class="flex items-start gap-3">
              <input type="checkbox" v-model="isHasInsurance" class="mt-1 accent-[#ee4d2d]" />
              <div class="text-xs">
                <span class="font-medium">Bảo hiểm Thời trang</span> <span class="bg-[#ee4d2d] text-white text-[8px] px-1 rounded-sm ml-1 uppercase font-bold italic">Mới</span>
                <p class="text-gray-400 mt-1 max-w-[500px]">Bảo vệ sản phẩm được bảo hiểm khỏi thiệt hại do sự cố bất ngờ, tiếp xúc với chất lỏng hoặc hư hỏng... <a href="#" class="text-[#0055aa]">Tìm hiểu thêm</a></p>
              </div>
            </div>
            <div class="text-sm flex flex-col items-end">
              <span class="text-gray-400 line-through text-xs">₫60.000</span>
              <span class="font-medium">₫{{ insurancePrice }}</span>
            </div>
          </div>

          <div class="px-6 py-4 flex items-center justify-between border-t border-dashed">
            <div class="flex items-center gap-2 text-sm text-gray-600">
              <span class="text-[#ee4d2d]">🎫</span> Voucher của Shop
            </div>
            <button @click="isShowShopVoucherModal = true" class="text-[#0055aa] text-sm">Chọn Voucher</button>
          </div>

          <div class="grid grid-cols-12 border-t border-dashed bg-[#fafdff]">
            <div class="col-span-5 p-6 border-r border-dashed border-gray-200 flex items-center gap-4">
              <span class="text-sm text-black shrink-0">Lời nhắn:</span>
              <input type="text" placeholder="Lưu ý cho Người bán..." class="flex-grow border border-gray-200 px-3 py-2 text-sm outline-none bg-white">
            </div>
            <div class="col-span-7 p-6 flex justify-between items-start">
              <div class="text-sm">
                <div class="flex items-center gap-6">
                  <span class="text-[#00bfa5] font-medium shrink-0">Phương thức vận chuyển:</span>
                  <div class="flex flex-col">
                    <span class="font-bold">Nhanh</span>
                    <span class="text-[11px] text-gray-400">Nhận từ 12 Th03 - 16 Th03</span>
                  </div>
                  <button @click="isShowShippingModal = true" class="text-[#0055aa] uppercase text-sm font-medium ml-auto">Thay Đổi</button>
                  <span class="font-medium text-black">₫{{ shippingFee.toLocaleString() }}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="p-6 flex justify-end items-center bg-white border-b gap-4">
            <span class="text-sm text-gray-500">Tổng số tiền ({{ item.quantity }} sản phẩm):</span>
            <span class="text-2xl text-[#ee4d2d]">₫{{ (item.price * item.quantity + shippingFee + totalInsurance - currentShopVoucherDiscount).toLocaleString() }}</span>
          </div>
        </div>
      </div>

      <div class="bg-white shadow-sm rounded-sm">
        <div class="p-6 border-b flex items-center justify-between">
          <div class="flex items-center gap-2 text-[#ee4d2d]"><span class="text-lg">🎫</span> <span class="text-black">Shopee Voucher</span></div>
          <button @click="isShowShopeeVoucherModal = true" class="text-[#0055aa] text-sm">Chọn Voucher</button>
        </div>
        <div class="p-6 flex items-center justify-between">
          <div class="flex items-center gap-2 text-gray-400">
            <span class="text-[#f6a708]">💰</span> <span>Shopee Xu</span> <span class="text-sm ml-4">Không thể sử dụng Xu</span>
          </div>
          <input type="checkbox" disabled class="w-4 h-4 accent-[#ee4d2d]" />
        </div>
      </div>

      <div class="bg-white shadow-sm rounded-sm overflow-hidden border-b">
        <div class="p-6 border-b flex items-center gap-6">
          <h3 class="text-base text-black shrink-0">Phương thức thanh toán</h3>
          <div class="flex flex-wrap gap-2">
            <button v-for="method in ['Ví ShopeePay', 'Thẻ Tín dụng/Ghi nợ', 'Google Pay', 'Thẻ nội địa NAPAS', 'Thanh toán khi nhận hàng']"
                    :key="method"
                    @click="selectedPaymentId = method"
                    class="px-4 py-2 border text-sm rounded-sm transition-all relative"
                    :class="selectedPaymentId === method ? 'border-[#ee4d2d] text-[#ee4d2d]' : 'border-gray-200 hover:border-gray-300'">
              {{ method }}
              <div v-if="selectedPaymentId === method" class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#ee4d2d] [clip-path:polygon(100%_0,0_100%,100%_100%)]"></div>
            </button>
          </div>
        </div>

        <div class="p-8 bg-white" v-if="selectedPaymentId === 'Ví ShopeePay'">
          <div class="flex items-center gap-4">
            <input type="radio" :checked="selectedBankId === 'bidv'" @change="selectedBankId = 'bidv'" class="accent-[#ee4d2d] w-4 h-4">
            <div class="w-8 h-8 bg-[#005aab] flex items-center justify-center text-[8px] text-white font-bold rounded-sm uppercase">BIDV</div>
            <div class="text-sm">BIDV <p class="text-gray-400 text-xs uppercase">xl__08</p></div>
          </div>
        </div>

        <div class="bg-[#fffefb] p-8 border-t border-dashed border-gray-100">
          <div class="flex flex-col items-end gap-3 w-full max-w-[400px] ml-auto">
            <div class="flex justify-between w-full text-gray-500 text-sm"><span>Tổng tiền hàng</span><span>₫{{ totalProductPrice.toLocaleString() }}</span></div>
            <div class="flex justify-between w-full text-gray-500 text-sm"><span>Phí vận chuyển</span><span>₫{{ shippingFee.toLocaleString() }}</span></div>
            <div v-if="isHasInsurance" class="flex justify-between w-full text-gray-500 text-sm"><span>Phí bảo hiểm</span><span>₫{{ insurancePrice }}</span></div>

            <div class="flex justify-between w-full pt-6 items-center border-t mt-4">
              <span class="text-sm text-gray-600">Tổng thanh toán</span>
              <span class="text-4xl font-medium text-[#ee4d2d]">₫{{ totalPayment.toLocaleString() }}</span>
            </div>

            <div class="w-full mt-10 pt-6 border-t flex flex-col items-end gap-6">
              <p class="text-xs text-gray-500">Nhấn "Đặt hàng" đồng nghĩa với việc bạn đồng ý tuân theo <a href="#" class="text-[#0055aa]">Điều khoản Shopee</a></p>
              <BaseButton
                  :label="isOrdering ? 'ĐANG XỬ LÝ...' : 'Đặt hàng'"
                  :disabled="isOrdering"
                  custom-classes="bg-[#ee4d2d] text-white w-[210px] py-3 text-lg rounded-sm shadow-md uppercase font-medium hover:bg-[#d73211] transition-colors"
                  @click="handleOrder"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isShowAddressModal" class="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div class="bg-white rounded-sm w-full max-w-[500px] shadow-xl p-6">
        <h3 class="text-lg mb-4 font-medium">Địa Chỉ Của Tôi</h3>
        <div class="space-y-4 max-h-[300px] overflow-y-auto">
          <div v-for="addr in props.addresses" :key="addr.id" @click="selectedAddressId = addr.id" class="flex gap-3 cursor-pointer p-2 hover:bg-gray-50 rounded">
            <input type="radio" :value="addr.id" v-model="selectedAddressId" class="accent-[#ee4d2d]">
            <div class="text-sm">
              <div class="font-bold">{{ addr.name }} | {{ addr.phone }}</div>
              <p class="text-gray-500">{{ addr.detail }}</p>
            </div>
          </div>
        </div>
        <div class="flex justify-end gap-3 mt-6">
          <button @click="isShowAddressModal = false" class="px-6 py-2 border rounded-sm">Trở lại</button>
          <button @click="isShowAddressModal = false" class="px-6 py-2 bg-[#ee4d2d] text-white rounded-sm uppercase">Xác nhận</button>
        </div>
      </div>
    </div>

    <div v-if="isShowShippingModal" class="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div class="bg-white rounded-sm w-full max-w-[500px] shadow-xl p-6">
        <h3 class="text-lg mb-4 font-medium">Chọn đơn vị vận chuyển</h3>
        <div class="space-y-3">
          <div v-for="opt in props.shippingOptions" :key="opt.id" @click="selectedShippingOption = opt.id"
               class="p-4 border rounded cursor-pointer" :class="selectedShippingOption === opt.id ? 'border-[#ee4d2d] bg-[#fffcf5]' : ''">
            <div class="flex justify-between">
              <span class="font-bold">{{ opt.name }}</span>
              <span class="text-[#ee4d2d]">₫{{ opt.price.toLocaleString() }}</span>
            </div>
            <p class="text-xs text-gray-500">{{ opt.estimate }}</p>
          </div>
        </div>
        <div class="flex justify-end gap-3 mt-6">
          <button @click="isShowShippingModal = false" class="px-6 py-2 border rounded-sm">Trở lại</button>
          <button @click="confirmShipping" class="px-6 py-2 bg-[#ee4d2d] text-white rounded-sm uppercase font-medium">Xác nhận</button>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
</style>