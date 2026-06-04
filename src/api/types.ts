export interface CategorySummaryDto {
  id: string;
  name: string;
  slug: string;
  iconUrl?: string;
}

export interface ProductDetailResponseDto {
  id: string;
  shopId: string;
  categoryId: string;
  categoryName: string;
  name: string;
  description: string;
  status: string;
  weight?: number;
  length?: number;
  height?: number;
  width?: number;
  attributes?: Record<string, any>;
  
  images?: string[];
  minPrice?: number;
  maxPrice?: number;
  originalPrice?: number;
  discountPercentage?: number;
  rating?: number;
  soldCount?: number;
  vouchers?: string[];
  
  breadcrumbs?: BreadcrumbItem[];
  variantGroups?: VariantGroupDto[];
  variants?: VariantDto[];
}

export interface BreadcrumbItem {
  id: string;
  name: string;
  slug: string;
}

export interface VariantGroupDto {
  type: string;
  options: string[];
}

export interface VariantDto {
  id: string;
  sku: string;
  price: number;
  stockQuantity: number;
  image?: string;
  attributes?: Record<string, string>;
}

// === Search API Types ===

export interface SearchProductQuery {
  keyword?: string;
  categoryIds?: string[];
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  locations?: string[];
  brands?: string[];
  shopTypes?: string[];
  conditions?: string[];
  sortBy?: string;
  page?: number;
  limit?: number;
}

export interface ProductCardDto {
  id: string;
  name: string;
  thumbnailUrl?: string;
  minPrice?: number;
  maxPrice?: number;
  originalPrice?: number;
  discountPercentage?: number;
  rating?: number;
  sold?: number;
  shopLocation?: string;
  isMall?: boolean;
  isLiked?: boolean;
  isAd?: boolean;
  vouchers?: { type: string; text: string }[];
}

export interface SearchProductResponse {
  items: ProductCardDto[];
  total: number;
  page: number;
  totalPages: number;
  limit: number;
}
