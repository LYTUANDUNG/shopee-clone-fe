<script setup lang="ts">
import { ref, computed } from 'vue';
import VoucherCard from "@/shared/components/molecules/VoucherCard.vue";
import BaseButton from "@/shared/components/atoms/BaseButton.vue";

// --- 1. QUẢN LÝ ĐỊA CHỈ & MODAL ---
const isShowAddressModal = ref(false);
const selectedAddressId = ref(1);
const addresses = ref([
  { id: 1, name: 'Lê Vũ Hùng', phone: '(+84) 944 982 985', detail: 'Cư Xá C, Trường Đh Nông Lâm, Phường Linh Trung, Thành Phố Thủ Đức, TP. Hồ Chí Minh', isDefault: true },
  { id: 2, name: 'Lê Vũ Hùng (Cơ quan)', phone: '(+84) 123 456 789', detail: 'Khu Công Nghệ Cao, Phường Tân Phú, Quận 9, TP. Hồ Chí Minh', isDefault: false }
]);
const currentAddress = computed(() => addresses.value.find(a => a.id === selectedAddressId.value) || addresses.value[0]);

// --- 2. QUẢN LÝ VẬN CHUYỂN & MODAL ---
const isShowShippingModal = ref(false);
const selectedShippingOption = ref('nhanh');
const shippingFee = ref(35700);
const shippingOptions = [
  { id: 'nhanh', name: 'Nhanh', price: 35700, estimate: '26 Th03 - 28 Th03', note: 'Nhận Voucher trị giá 15.000đ nếu đơn hàng được giao trễ.' },
  { id: 'bulk', name: 'Hàng Cồng Kềnh', price: 0, estimate: '', note: 'Dưới giới hạn kích thước tối thiểu', disabled: true }
];
const currentShipping = computed(() => shippingOptions.find(o => o.id === selectedShippingOption.value)!);
const confirmShipping = () => {
  const option = shippingOptions.find(o => o.id === selectedShippingOption.value);
  if (option) shippingFee.value = option.price;
  isShowShippingModal.value = false;
};
const closeShippingModal = () => { isShowShippingModal.value = false; };

// --- 3. QUẢN LÝ VOUCHER (SHOP & SHOPEE) ---
// Voucher của Shop (Modal riêng của shop)
const isShowShopVoucherModal = ref(false);
const selectedShopVoucherId = ref(1);
const shopVouchers = ref([
  { id: 1, discount: 140000, minOrder: 200000, tag: 'Sản phẩm nhất định', expiry: '18.05.2026', isBest: true },
  { id: 2, discount: 50000, minOrder: 100000, tag: 'Mã khách hàng mới', expiry: '18.05.2026', isBest: false }
]);
const currentShopVoucherDiscount = computed(() => shopVouchers.value.find(v => v.id === selectedShopVoucherId.value)?.discount || 0);

// Shopee Voucher (Modal chung của hệ thống)
const isShowShopeeVoucherModal = ref(false);
const selectedShopeeVoucherId = ref<number | null>(null);
const shopeeVouchers = ref([
  { id: 1, title: 'Giảm tối đa 15k₫', subtitle: 'Đơn Tối Thiểu 40k₫', tag: 'Chỉ có trên Live', expiry: '31.03.2026', iconText: 'Shopee Live', discount: 15000 },
  { id: 2, title: 'Giảm tối đa 50k₫', subtitle: 'Đơn Tối Thiểu 500k₫', tag: 'Chỉ có trên Shopee Video', expiry: '31.03.2026', iconText: 'Voucher Xtra', discount: 50000 }
]);
const shopeeVoucherDiscount = computed(() => shopeeVouchers.value.find(v => v.id === selectedShopeeVoucherId.value)?.discount || 0);

// --- 4. PHƯƠNG THỨC THANH TOÁN ---
const paymentMethods = [
  { id: 'shopeepay', name: 'Ví ShopeePay' },
  { id: 'card', name: 'Thẻ Tín dụng/Ghi nợ' },
  { id: 'googlepay', name: 'Google Pay' },
  { id: 'cod', name: 'Thanh toán khi nhận hàng', description: 'Phí thu hộ: ₫0 VNĐ. Ưu đãi về phí vận chuyển áp dụng cả với phí thu hộ.' }
];
const selectedPaymentId = ref('cod');
const cardPromotions = ref([
  { bank: 'AGRIBANK', discount: '100.000₫', desc: 'Thẻ Agribank JCB', active: true, color: 'bg-[#b31f31]' },
  { bank: 'MSB', discount: '100.000₫', desc: 'Thẻ MSB Mastercard', active: true, color: 'bg-[#f04e23]' },
  { bank: 'MB', discount: '30.000₫', desc: 'Đã hết lượt sử dụng', active: false, color: 'bg-gray-400' }
]);
const currentPayment = computed(() => paymentMethods.find(m => m.id === selectedPaymentId.value));

// --- 5. DỮ LIỆU SẢN PHẨM & XU ---
const userShopeeXu = ref(5000);
const isUseShopeeXu = ref(false);
const checkoutItems = ref([
  {
    id: "1",
    name: "Quần đùi thể thao 2 lớp : bơi, tập gym, chạy bộ QC01",
    variation: "Màu đen, Size 4XL",
    price: 120000,
    originalPrice: 200000,
    quantity: 3,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lylxyusyobbh36"
  }
]);

// --- 6. LOGIC TÍNH TIỀN ---
const updateQuantity = (id: string, delta: number) => {
  const item = checkoutItems.value.find(i => i.id === id);
  if (item && item.quantity + delta >= 1) item.quantity += delta;
};
const totalProductPrice = computed(() => checkoutItems.value.reduce((t, i) => t + (i.price * i.quantity), 0));
const shopeeXuDiscount = computed(() => isUseShopeeXu.value ? userShopeeXu.value : 0);
const totalPayment = computed(() =>
    totalProductPrice.value + shippingFee.value - currentShopVoucherDiscount.value - shopeeXuDiscount.value - shopeeVoucherDiscount.value
);

const handleOrder = () => alert(`Đặt hàng thành công!\nTổng thanh toán: ₫${totalPayment.value.toLocaleString()}`);
</script>

<template>
  <div class="checkout-container bg-[#f5f5f5] min-h-screen py-5 pb-20 font-['Roboto']">
    <div class="max-w-[1200px] mx-auto space-y-4 px-4 md:px-0">

      <div class="bg-white shadow-sm rounded-sm overflow-hidden border-b">
        <div class="address-border-top h-[3px]"></div>
        <div class="p-6">
          <div class="flex items-center gap-2 text-[#ee4d2d] mb-4">
            <svg height="16" viewBox="0 0 12 16" width="12" fill="currentColor"><path d="M6 3.2c1.506 0 2.727 1.195 2.727 2.667 0 1.473-1.22 2.666-2.727 2.666S3.273 7.34 3.273 5.867C3.273 4.395 4.493 3.2 6 3.2zM0 6c0-3.315 2.686-6 6-6s6 2.685 6 6c0 2.498-1.964 5.742-6 9.933C1.613 11.743 0 8.498 0 6z"></path></svg>
            <h2 class="text-lg font-medium">Địa chỉ nhận hàng</h2>
          </div>
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div class="text-[16px]"><span class="font-bold text-[#222]">{{ currentAddress.name }} {{ currentAddress.phone }}</span> <span class="text-[#222] ml-4">{{ currentAddress.detail }}</span></div>
            <button @click="isShowAddressModal = true" class="text-[#0055aa] uppercase text-sm font-medium">Thay đổi</button>
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
        <div v-for="item in checkoutItems" :key="item.id">
          <div class="grid grid-cols-12 items-center p-6 bg-white">
            <div class="col-span-6 flex gap-3">
              <img :src="item.image" class="w-20 h-20 object-cover border border-gray-100 rounded-sm" />
              <div class="flex flex-col justify-between py-1">
                <h3 class="text-sm line-clamp-2 text-[#222] leading-5">{{ item.name }}</h3>
                <div class="text-xs text-gray-400">Phân loại: {{ item.variation }}</div>
                <div class="text-[10px] border border-[#ee4d2d] text-[#ee4d2d] px-1 font-medium">Đổi ý miễn phí</div>
              </div>
            </div>
            <div class="col-span-2 text-center text-sm italic text-gray-400">₫{{ item.price.toLocaleString() }}</div>
            <div class="col-span-2 flex justify-center">
              <div class="flex items-center border border-gray-200 rounded-sm h-8">
                <button @click="updateQuantity(item.id, -1)" class="w-8 hover:bg-gray-50 border-r" :disabled="item.quantity <= 1">-</button>
                <span class="w-10 text-center text-sm">{{ item.quantity }}</span>
                <button @click="updateQuantity(item.id, 1)" class="w-8 hover:bg-gray-50 border-l">+</button>
              </div>
            </div>
            <div class="col-span-2 text-right text-sm font-medium">₫{{ (item.price * item.quantity).toLocaleString() }}</div>
          </div>
          <div class="px-6 py-4 flex items-center justify-end gap-3 border-t border-dashed bg-[#fffcf5]">
            <svg fill="none" viewBox="0 -2 23 22" class="w-5 h-5 text-[#ee4d2d]"><path d="M1 2h18v2.32a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75V16H1v-2.12a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75V2z" stroke="currentColor" stroke-width="1.5"></path></svg>
            <span class="text-sm">Voucher của Shop</span>
            <span class="text-[11px] px-1 border border-[#ee4d2d] text-[#ee4d2d]">-₫{{ currentShopVoucherDiscount.toLocaleString() }}</span>
            <button @click="isShowShopVoucherModal = true" class="text-[#0055aa] text-sm font-medium hover:underline">Chọn Voucher Khác</button>
          </div>
          <div class="grid grid-cols-12 bg-[#fafdff] border-y border-dashed border-[#bee1ff]">
            <div class="col-span-5 p-6 border-r border-dashed border-[#bee1ff] flex items-center gap-4">
              <span class="text-sm text-[#222]">Lời nhắn:</span>
              <input type="text" placeholder="Lưu ý cho Người bán..." class="flex-grow border border-gray-200 px-3 py-2 text-sm outline-none bg-white">
            </div>
            <div class="col-span-7 p-6 flex justify-between items-start">
              <div class="space-y-1">
                <div class="text-sm">Vận chuyển: <span class="font-bold">{{ currentShipping.name }}</span></div>
                <div class="text-xs text-gray-500">Nhận vào {{ currentShipping.estimate }}</div>
              </div>
              <div class="text-right">
                <button @click="isShowShippingModal = true" class="text-[#0055aa] uppercase text-sm font-medium mr-4">Thay đổi</button>
                <span class="text-sm font-medium">₫{{ shippingFee.toLocaleString() }}</span>
              </div>
            </div>
          </div>
          <div class="p-6 flex justify-end items-center bg-white border-b gap-2">
            <span class="text-sm text-gray-500">Tổng số tiền ({{ item.quantity }} sản phẩm):</span>
            <span class="text-xl font-medium text-[#ee4d2d]">₫{{ (item.price * item.quantity + shippingFee - currentShopVoucherDiscount).toLocaleString() }}</span>
          </div>
        </div>
      </div>

      <div class="bg-white shadow-sm rounded-sm">
        <div class="p-6 border-b flex items-center justify-between">
          <div class="flex items-center gap-2 text-[#ee4d2d]"><svg fill="none" viewBox="0 -2 23 22" class="w-6 h-6"><path d="M1 2h18v2.32a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75v.65a1.5 1.5 0 000 2.75V16H1v-2.12a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75v-.65a1.5 1.5 0 000-2.75V2z" stroke="currentColor" stroke-width="2"></path></svg><span class="text-lg text-black font-sans">Shopee Voucher</span></div>
          <div class="flex items-center gap-4">
            <span v-if="shopeeVoucherDiscount > 0" class="text-[#ee4d2d] font-medium">-₫{{ shopeeVoucherDiscount.toLocaleString() }}</span>
            <button @click="isShowShopeeVoucherModal = true" class="text-[#0055aa] text-sm font-medium uppercase hover:underline">Chọn Voucher</button>
          </div>
        </div>
        <div class="p-6 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <svg viewBox="0 0 18 18" class="w-5 h-5 fill-[#f6a708]"><path d="M9 0C4.029 0 0 4.029 0 9s4.029 9 9 9 9-4.029 9-9-4.029-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm1-11H8v3H5v2h3v3h2v-3h3V8h-3V5z"></path></svg>
            <span class="text-base">Shopee Xu</span>
            <span class="text-[#929292] text-sm ml-4">{{ userShopeeXu > 0 ? `Dùng ${userShopeeXu} xu` : 'Không thể sử dụng Xu' }}</span>
          </div>
          <input type="checkbox" v-model="isUseShopeeXu" :disabled="userShopeeXu === 0" class="w-4 h-4 cursor-pointer accent-[#ee4d2d]" />
        </div>
      </div>

      <div class="bg-white shadow-sm rounded-sm overflow-hidden">
        <div class="p-6 border-b flex flex-col md:flex-row md:items-center gap-6">
          <h3 class="text-[16px] text-[#222] shrink-0">Phương thức thanh toán</h3>
          <div class="flex flex-wrap gap-2">
            <button v-for="method in paymentMethods" :key="method.id" @click="selectedPaymentId = method.id"
                    class="relative px-4 py-2 border text-sm rounded-sm min-w-[120px]"
                    :class="selectedPaymentId === method.id ? 'border-[#ee4d2d] text-[#ee4d2d]' : 'border-gray-200 hover:border-gray-300'">
              {{ method.name }}
              <div v-if="selectedPaymentId === method.id" class="absolute bottom-0 right-0 overflow-hidden w-3 h-3">
                <div class="absolute bottom-[-2px] right-[-2px] bg-[#ee4d2d] w-4 h-4 rotate-45"></div>
                <svg class="absolute bottom-0 right-0 w-2 h-2 text-white" viewBox="0 0 10 10"><path d="M2 5 L4 7 L8 3" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
            </button>
          </div>
        </div>
        <div class="px-6 py-8 bg-white border-t border-gray-50 flex items-center min-h-[140px]">
          <div v-if="selectedPaymentId === 'shopeepay'" class="flex items-center gap-4 w-full">
            <div class="w-10 h-10 bg-[#f6a708] rounded-sm flex items-center justify-center text-white font-bold text-xl">₫</div>
            <div class="text-sm">Số dư Ví ShopeePay: 0₫</div>
          </div>
          <div v-else-if="selectedPaymentId === 'card'" class="grid grid-cols-12 gap-6 w-full">
            <div class="col-span-2 text-sm text-gray-500">Promotion</div>
            <div class="col-span-10 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div v-for="(promo, i) in cardPromotions" :key="i" class="h-[80px] rounded-sm flex text-white relative overflow-hidden" :class="promo.active ? promo.color : 'bg-gray-400'">
                <div class="flex-grow p-3"><div class="text-base font-bold">{{ promo.discount }} Giảm</div><div class="text-[10px] opacity-80 line-clamp-2">{{ promo.desc }}</div></div>
                <div class="w-1/3 bg-black/10 flex items-center justify-center p-2 text-[10px] font-bold">{{ promo.bank }}</div>
              </div>
            </div>
          </div>
          <div v-else class="flex gap-12 text-sm"><span class="font-medium text-black">{{ currentPayment?.name }}</span><span class="text-gray-500">{{ currentPayment?.description }}</span></div>
        </div>
        <div class="bg-[#fffefb] p-8 border-t border-dashed border-gray-200">
          <div class="flex flex-col items-end gap-3">
            <div class="w-full max-w-[400px] space-y-3">
              <div class="flex justify-between text-gray-500 text-sm"><span>Tổng tiền hàng</span><span>₫{{ totalProductPrice.toLocaleString() }}</span></div>
              <div v-if="currentShopVoucherDiscount > 0" class="flex justify-between text-gray-500 text-sm"><span>Voucher giảm giá của Shop</span><span class="text-[#ee4d2d]">-₫{{ currentShopVoucherDiscount.toLocaleString() }}</span></div>
              <div v-if="shopeeVoucherDiscount > 0" class="flex justify-between text-gray-500 text-sm"><span>Voucher giảm giá Shopee</span><span class="text-[#ee4d2d]">-₫{{ shopeeVoucherDiscount.toLocaleString() }}</span></div>
              <div class="flex justify-between items-center pt-4"><span class="text-sm text-gray-600">Tổng thanh toán</span><span class="text-4xl font-medium text-[#ee4d2d]">₫{{ totalPayment.toLocaleString() }}</span></div>
            </div>
            <div class="w-full mt-8 flex justify-end"><BaseButton label="Đặt hàng" custom-classes="bg-[#ee4d2d] text-white w-[210px] py-3 text-lg rounded-sm shadow-md" @click="handleOrder" /></div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isShowAddressModal" class="fixed inset-0 z-[300] flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" @click="isShowAddressModal = false"></div>
      <div class="bg-white rounded-sm shadow-xl w-full max-w-[500px] z-10 overflow-hidden font-sans">
        <div class="px-6 py-4 border-b flex justify-between items-center"><h3 class="text-lg">Địa Chỉ Của Tôi</h3><button @click="isShowAddressModal = false" class="text-3xl text-gray-400 leading-none">&times;</button></div>
        <div class="p-6 space-y-6 max-h-[400px] overflow-y-auto">
          <div v-for="addr in addresses" :key="addr.id" class="flex gap-3 items-start cursor-pointer" @click="selectedAddressId = addr.id">
            <input type="radio" :value="addr.id" v-model="selectedAddressId" class="mt-1 accent-[#ee4d2d] w-4 h-4" />
            <div class="text-sm"><span class="font-bold border-r border-gray-300 pr-2 mr-2">{{ addr.name }}</span><span class="text-gray-500">{{ addr.phone }}</span><p class="text-gray-500 mt-1">{{ addr.detail }}</p></div>
          </div>
        </div>
        <div class="p-6 border-t flex justify-end gap-3"><button @click="isShowAddressModal = false" class="px-8 py-2 border rounded-sm">Hủy</button><button @click="isShowAddressModal = false" class="px-8 py-2 bg-[#ee4d2d] text-white rounded-sm">Xác nhận</button></div>
      </div>
    </div>

    <div v-if="isShowShippingModal" class="fixed inset-0 z-[300] flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" @click="closeShippingModal"></div>
      <div class="bg-white rounded-sm shadow-xl w-full max-w-[600px] z-10 overflow-hidden">
        <div class="p-6 border-b flex justify-between items-center"><h3 class="text-xl font-medium">Chọn phương thức vận chuyển</h3><button @click="closeShippingModal" class="text-3xl text-gray-400">&times;</button></div>
        <div class="p-6 space-y-4">
          <div v-for="opt in shippingOptions" :key="opt.id" @click="!opt.disabled && (selectedShippingOption = opt.id)"
               class="p-4 rounded-sm border transition-all cursor-pointer relative"
               :class="[selectedShippingOption === opt.id ? 'border-[#ee4d2d] bg-[#fafdff]' : 'border-gray-100 bg-[#fcfcfc]', opt.disabled ? 'opacity-40 cursor-not-allowed' : '']">
            <div class="flex justify-between items-center"><span class="font-medium text-sm">{{ opt.name }} <span class="ml-4 font-normal">₫{{ opt.price.toLocaleString() }}</span></span><svg v-if="selectedShippingOption === opt.id" class="w-6 h-6 text-[#ee4d2d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
          </div>
        </div>
        <div class="p-6 border-t flex justify-end gap-3"><button @click="closeShippingModal" class="px-10 py-2 border rounded-sm">Trở Lại</button><button @click="confirmShipping" class="px-10 py-2 bg-[#ee4d2d] text-white rounded-sm">Xác Nhận</button></div>
      </div>
    </div>

    <div v-if="isShowShopVoucherModal" class="fixed inset-0 z-[300] flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" @click="isShowShopVoucherModal = false"></div>
      <div class="bg-white rounded-sm shadow-2xl w-full max-w-[480px] z-10 flex flex-col h-[550px] overflow-hidden">
        <div class="p-4 border-b flex justify-between items-center"><h3 class="text-xl font-medium">Mã Voucher Shop</h3><button @click="isShowShopVoucherModal = false" class="text-3xl text-gray-400">&times;</button></div>
        <div class="flex-grow overflow-y-auto p-4 space-y-4">
          <div v-for="v in shopVouchers" :key="v.id" @click="selectedShopVoucherId = v.id" class="flex border rounded-sm relative cursor-pointer" :class="selectedShopVoucherId === v.id ? 'border-[#ee4d2d]' : 'border-gray-200'">
            <div class="w-24 bg-white flex flex-col items-center justify-center border-r border-dashed relative"><div class="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">🖱️</div><div class="absolute top-0 right-[-4px] bottom-0 w-2 flex flex-col justify-around"><div v-for="i in 6" :key="i" class="w-2 h-2 rounded-full bg-white -mr-1 border"></div></div></div>
            <div class="flex-grow p-3 flex flex-col justify-between"><div><div class="font-medium text-sm">Giảm ₫{{ v.discount.toLocaleString() }}</div><div class="text-[11px] text-gray-400">Đơn Tối Thiểu ₫{{ v.minOrder.toLocaleString() }}</div></div><div class="flex justify-end"><input type="radio" :value="v.id" v-model="selectedShopVoucherId" class="accent-[#ee4d2d] w-4 h-4"></div></div>
          </div>
        </div>
        <div class="p-4 border-t flex gap-2"><button @click="isShowShopVoucherModal = false" class="flex-1 py-2 border rounded-sm text-sm uppercase">Hủy</button><button @click="isShowShopVoucherModal = false" class="flex-1 bg-[#ee4d2d] text-white py-2.5 rounded-sm text-sm uppercase">Đồng Ý</button></div>
      </div>
    </div>

    <div v-if="isShowShopeeVoucherModal" class="fixed inset-0 z-[300] flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-black/40 backdrop-blur-sm" @click="isShowShopeeVoucherModal = false"></div>
      <div class="bg-white rounded-sm shadow-2xl w-full max-w-[480px] z-10 flex flex-col h-[550px] overflow-hidden">
        <div class="p-4 border-b flex justify-between items-center"><h3 class="text-xl font-medium">Chọn Shopee Voucher</h3><button @click="isShowShopeeVoucherModal = false" class="text-3xl text-gray-400">&times;</button></div>
        <div class="flex-grow overflow-y-auto p-4 space-y-4">
          <div v-for="v in shopeeVouchers" :key="v.id" @click="selectedShopeeVoucherId = v.id" class="flex border rounded-sm cursor-pointer" :class="selectedShopeeVoucherId === v.id ? 'border-[#ee4d2d]' : 'border-gray-200'">
            <div class="w-24 bg-[#46b1a5] flex flex-col items-center justify-center text-white relative">📺<div class="text-[9px] uppercase font-bold">{{ v.iconText }}</div></div>
            <div class="flex-grow p-3 flex flex-col justify-between"><div><div class="font-medium text-sm">{{ v.title }}</div><div class="text-[11px] text-gray-400">{{ v.subtitle }}</div></div><div class="flex justify-end"><input type="radio" :value="v.id" v-model="selectedShopeeVoucherId" class="accent-[#ee4d2d] w-4 h-4"></div></div>
          </div>
        </div>
        <div class="p-4 border-t flex gap-2"><button @click="isShowShopeeVoucherModal = false" class="flex-1 py-2 border rounded-sm text-sm uppercase">Hủy</button><button @click="isShowShopeeVoucherModal = false" class="flex-1 bg-[#ee4d2d] text-white py-2.5 rounded-sm text-sm uppercase">Đồng Ý</button></div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.address-border-top { background-position: 0 0; background-size: 116px 3px; background-image: repeating-linear-gradient(45deg, #6fa6d6, #6fa6d6 33px, transparent 0, transparent 41px, #f18d9b 0, #f18d9b 74px, transparent 0, transparent 82px); width: 100%; }
</style>