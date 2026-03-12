export const HOME_BANNERS = [
  'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2000&auto=format&fit=crop'
];

export const RIGHT_ADS = [
  { link: '#', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500&auto=format&fit=crop', alt: 'Ad 1' },
  { link: '#', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500&auto=format&fit=crop', alt: 'Ad 2' }
];

export interface HomeCategory {
  id: number;
  name: string;
  icon: string;
}

export const HOME_CATEGORIES: HomeCategory[] = [
  { id: 1, name: 'Voucher Giảm Đến 500K', icon: 'https://down-vn.img.susercontent.com/file/e4a404283b3824c211c1549aedd28d5f_tn' },
  { id: 2, name: 'Shopee Xu', icon: 'https://down-vn.img.susercontent.com/file/a08ab28962514a626195ef0415411585_tn' },
  { id: 3, name: 'Freeship Xtra', icon: 'https://ui-avatars.com/api/?name=Free+Ship&background=EE4D2D&color=fff&rounded=true&size=100' },
  { id: 4, name: 'Hàng Quốc Tế', icon: 'https://down-vn.img.susercontent.com/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_tn' },
  { id: 5, name: 'Nạp Thẻ, Dịch Vụ & Flash', icon: 'https://down-vn.img.susercontent.com/file/9df57ba80ca225e67c08a8a0d8cc7b85_tn' },
  { id: 6, name: 'Bắt Trend - Giá Sốc', icon: 'https://down-vn.img.susercontent.com/file/b3535d7e56c58c4ebe9a87672d38cc5e_tn' },
  { id: 7, name: 'Mã Giảm Giá', icon: 'https://down-vn.img.susercontent.com/file/vn-50009109-f6c34d719c3e4d33857371458e7a7059_tn' },
  { id: 8, name: 'Voucher Xtra', icon: 'https://down-vn.img.susercontent.com/file/vn-50009109-852300c407c5e79bf5dc1854aa0cfeef_tn' },
  { id: 9, name: 'Shopee Choice', icon: 'https://ui-avatars.com/api/?name=Shopee+Choice&background=EE4D2D&color=fff&rounded=true&size=100' },
  { id: 10, name: 'Hàng Hiệu Deal Hời', icon: 'https://down-vn.img.susercontent.com/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_tn' }
];
