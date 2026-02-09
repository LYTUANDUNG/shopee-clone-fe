export interface Voucher {
    type: 'discount' | 'promotion';
    text: string;
}

export interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    originalPrice?: number;
    discountDetails?: string;
    discountPercentage?: number;
    newPrice?: number;
    rating: number;
    sold: number;
    location: string;
    isAd?: boolean;
    isMall?: boolean;
    isLiked?: boolean;
    vouchers?: Voucher[];
}

export interface FilterState {
    locations: string[];
    categories: string[];
    priceRange: {
        min: number | null;
        max: number | null;
    };
    shipping: string[];
    brands: string[];
    shopTypes: string[];
    conditions: string[];
    paymentOptions: string[];
    rating: number | null;
    services: string[];
}

export type SortOption = 'relevance' | 'newest' | 'sales' | 'price-asc' | 'price-desc';
