export const HOME_BANNERS = [
  'https://cf.shopee.vn/file/vn-11134258-7r98o-lx34u4416zoh70_xxhdpi',
  'https://cf.shopee.vn/file/vn-11134258-7r98o-lyj9t6p86ofqaf_xxhdpi',
  'https://cf.shopee.vn/file/vn-11134258-7r98o-lyo53pnbj4qsc3_xxhdpi'
];

export const RIGHT_ADS = [
  { link: '#', image: 'https://cf.shopee.vn/file/vn-11134258-7r98o-lyj9tqnv8vty5d_xhdpi', alt: 'Ad 1' },
  { link: '#', image: 'https://cf.shopee.vn/file/vn-11134258-7r98o-lyj9u5g0i4nqa2_xhdpi', alt: 'Ad 2' }
];

export interface HomeCategory {
  id: number;
  name: string;
  icon: string;
}

export const HOME_CATEGORIES: HomeCategory[] = [
  { id: 1, name: 'Voucher Giảm Đến 500K', icon: 'https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xhdpi' },
  { id: 2, name: 'Shopee Xu', icon: 'https://cf.shopee.vn/file/a08ab28962514a626195ef0415411585_xhdpi' },
  { id: 3, name: 'Freeship Xtra', icon: 'https://cf.shopee.vn/file/vn-50009109-c7a2e1ae72c0d6886dde863c9b7431eeb1_xhdpi' },
  { id: 4, name: 'Hàng Quốc Tế', icon: 'https://cf.shopee.vn/file/vn-50009109-8a387d78a7ad954ec489d3ef9abd60b4_xhdpi' },
  { id: 5, name: 'Nạp Thẻ, Dịch Vụ & Flash', icon: 'https://cf.shopee.vn/file/9df57ba80ca225e67c08a8a0d8cc7b85_xhdpi' },
  { id: 6, name: 'Bắt Trend - Giá Sốc', icon: 'https://cf.shopee.vn/file/b3535d7e56c58c4ebe9a87672d38cc5e_xhdpi' },
  { id: 7, name: 'Mã Giảm Giá', icon: 'https://cf.shopee.vn/file/vn-50009109-f6c34d719c3e4d33857371458e7a7059_xhdpi' },
  { id: 8, name: 'Voucher Xtra', icon: 'https://cf.shopee.vn/file/vn-50009109-852300c407c5e79bf5dc1854aa0cfeef_xhdpi' },
  { id: 9, name: 'Shopee Choice', icon: 'https://cf.shopee.vn/file/vn-50009109-1e35d25e0e02addf9b0edff09503add5_xhdpi' },
  { id: 10, name: 'Hàng Hiệu Deal Hời', icon: 'https://cf.shopee.vn/file/vn-50009109-b7bc6c9cedbe3dfb3a0e695d71a17937_xhdpi' }
];
