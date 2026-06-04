import api from '@/lib/axios';
import type { CategorySummaryDto, ProductDetailResponseDto, SearchProductQuery, SearchProductResponse } from './types';

export const catalogApi = {
  getRootCategories: async (): Promise<CategorySummaryDto[]> => {
    const response = await api.get('/categories/root');
    return response.data;
  },

  getCategoryDetail: async (categoryId: string): Promise<any> => {
    const response = await api.get(`/categories/${categoryId}`);
    return response.data;
  },

  getProductDetail: async (productId: string): Promise<ProductDetailResponseDto> => {
    const response = await api.get(`/products/${productId}`);
    return response.data;
  },

  searchProducts: async (query: SearchProductQuery): Promise<SearchProductResponse> => {
    const response = await api.get('/products', { params: query });
    return response.data;
  }
};
