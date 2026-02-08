import type { SortOption } from "../types";

export const SORT_OPTIONS: { label: string; value: SortOption }[] = [
  { label: "Liên Quan", value: "relevance" },
  { label: "Mới Nhất", value: "newest" },
  { label: "Bán Chạy", value: "sales" },
  { label: "Giá: Thấp đến Cao", value: "price-asc" },
  { label: "Giá: Cao đến Thấp", value: "price-desc" },
];
