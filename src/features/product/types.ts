export interface Product {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    rating: number;
    sold: number;
    description?: string;
    vouchers?: string[];
    images: string[];
    variants?: ProductVariant[];
}

export interface ProductVariant {
    type: string; // e.g., "Màu Sắc", "Size"
    options: string[];
}
