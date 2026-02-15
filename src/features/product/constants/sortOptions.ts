import type { SortOption } from "@/features/product/types";

export const SORT_OPTIONS: { label: string; value: SortOption }[] = [
  { label: "Liên Quan", value: "relevance" },
  { label: "Mới Nhất", value: "newest" },
  { label: "Bán Chạy", value: "sales" },
  { label: "Giá: Thấp đến Cao", value: "price-asc" },
  { label: "Giá: Cao đến Thấp", value: "price-desc" },
];

export const STATIC_FILTER_OPTIONS = {
  shipping: [
      'Hỏa Tốc',
      'Nhanh',
      'Tiết Kiệm'
  ],
  shopTypes: [
      'Shopee Mall',
      'Shop Yêu Thích',
      'Shop Yêu Thích+'
  ],
  conditions: [
      'Đã sử dụng',
      'Mới'
  ],
  services: [
      'Đang giảm giá',
      'Miễn phí vận chuyển',
      'Hàng có sẵn'
  ],
  ratings: [5, 4, 3, 2, 1]
};
