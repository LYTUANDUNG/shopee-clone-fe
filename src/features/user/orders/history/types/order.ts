export type OrderStatus =
  | 'all'
  | 'pending_payment'
  | 'shipping'
  | 'delivering'
  | 'received'
  | 'completed'
  | 'cancelled'
  | 'return_refund';

export interface OrderTab {
  key: OrderStatus;
  label: string;
  count?: number;
}

export interface OrderProduct {
  id: string | number;
  name: string;
  image: string;
  variant: string;   // e.g. "Phân loại hàng: 1 vỉ"
  quantity: number;
  price: number;
  originalPrice?: number;
  isGift?: boolean;  // Quà Tặng - free gift item
}

export interface Order {
  id: string | number;
  shopName: string;
  shopAvatar?: string;
  isMall?: boolean;
  isFavoriteShop?: boolean;
  products: OrderProduct[];
  totalPrice: number;
  status: Exclude<OrderStatus, 'all'>;
  deliveryStatus?: string;        // e.g. "Giao hàng thành công"
  cancelledBy?: string;           // e.g. "bạn" | "người bán" | "hệ thống"
  reviewDeadline?: string;        // ISO date string, e.g. "2026-04-28"
  reviewBonus?: number;           // e.g. 200 (Xu)
  isReviewed?: boolean;           // true = đã đánh giá tất cả sản phẩm
  refundAmount?: number;          // tổng tiền hoàn (dùng cho return_refund)
  createdAt?: string;
}
