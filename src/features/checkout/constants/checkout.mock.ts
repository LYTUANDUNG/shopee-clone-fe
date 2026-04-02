// src/features/checkout/constants/checkout.mock.ts
import type { Address, ShippingOption, Voucher, PaymentMethod, CardPromotion, CheckoutItem } from '../types/checkout.types';

export const MOCK_ADDRESSES: Address[] = [
    { id: 1, name: 'Lý Tuấn Dũng', phone: '(+84) 364 482 804', detail: 'Kiến Túc Xá Đh Nông Lâm Tp Hcm, Đường Số 6, Khu Phố 6, Phường Linh Trung, Thành Phố Thủ Đức, TP. Hồ Chí Minh', isDefault: true },
    { id: 2, name: 'Lê Vũ Hùng (Cơ quan)', phone: '(+84) 123 456 789', detail: 'Khu Công Nghệ Cao, Quận 9, TP. Hồ Chí Minh', isDefault: false }
];

export const MOCK_SHIPPING_OPTIONS: ShippingOption[] = [
    { id: 'nhanh', name: 'Nhanh', price: 37700, estimate: '12 Th03 - 16 Th03', note: 'Nhận Voucher trị giá 15.000đ nếu đơn hàng giao trễ.' },
    { id: 'bulk', name: 'Hàng Cồng Kềnh', price: 0, estimate: '', note: 'Dưới giới hạn kích thước tối thiểu', disabled: true }
];

export const MOCK_PAYMENT_METHODS: PaymentMethod[] = [
    { id: 'shopeepay', name: 'Ví ShopeePay' },
    { id: 'card', name: 'Thẻ Tín dụng/Ghi nợ' },
    { id: 'googlepay', name: 'Google Pay' },
    { id: 'napas', name: 'Thẻ nội địa NAPAS' },
    { id: 'cod', name: 'Thanh toán khi nhận hàng' }
];

export const MOCK_SHOP_VOUCHERS: Voucher[] = [
    { id: 1, discount: 5000, minOrder: 50000, tag: 'Voucher Shop', expiry: '30.04.2026' }
];

export const MOCK_SHOPEE_VOUCHERS: Voucher[] = [
    { id: 101, title: 'Miễn phí vận chuyển', subtitle: 'Đơn tối thiểu 0đ', discount: 15000, minOrder: 0, tag: 'Freeship', expiry: '31.03.2026', iconText: 'FreeShip' }
];

export const MOCK_CARD_PROMOTIONS: CardPromotion[] = [
    { bank: 'BIDV', discount: '50.000₫', desc: 'Giảm cho chủ thẻ BIDV', active: true, color: 'bg-[#005aab]' },
    { bank: 'AGRIBANK', discount: '100.000₫', desc: 'Giảm cho chủ thẻ Agribank', active: true, color: 'bg-[#b31f31]' }
];

export const MOCK_CHECKOUT_ITEMS: CheckoutItem[] = [
    {
        id: "1",
        name: "Áo thun nữ tay lỡ chất cotton su ÁO KÍNH NHỚ...",
        variation: "XANH 45-68KG",
        price: 42000,
        originalPrice: 60000,
        quantity: 1,
        image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-m1lqlysuobbh36"
    }
];