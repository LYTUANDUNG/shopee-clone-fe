// src/features/checkout/types/checkout.types.ts

export interface Address {
    id: number;
    name: string;
    phone: string;
    detail: string;
    isDefault: boolean;
}

export interface CheckoutItem {
    id: string;
    name: string;
    variation: string;
    price: number;
    originalPrice: number;
    quantity: number;
    image: string;
}

export interface Voucher {
    id: number;
    discount: number;
    minOrder: number;
    tag: string;
    expiry: string;
    title?: string;
    subtitle?: string;
    iconText?: string;
}

export interface ShippingOption {
    id: string;
    name: string;
    price: number;
    estimate: string;
    note: string;
    disabled?: boolean;
}

export interface PaymentMethod {
    id: string;
    name: string;
    description?: string;
}

export interface CardPromotion {
    bank: string;
    discount: string;
    desc: string;
    active: boolean;
    color: string;
}