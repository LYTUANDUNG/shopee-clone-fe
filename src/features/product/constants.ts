import type { Product } from './types';

export const MOCK_PRODUCT: Product = {
    id: 1,
    name: 'Áo thun unisex ILUMINATION INSPIRATION phông tay lỡ nam nữ form rộng Local Brand',
    price: 144036,
    originalPrice: 320000,
    rating: 4.9,
    sold: 330,
    images: [
        'https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mipuh16cvd350a.webp',
        'https://down-vn.img.susercontent.com/file/vn-11134207-820l4-midywhy6emm986.webp',
        'https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mie02jtciiva75.webp',
        'https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mipuh16g85xeed.webp',
        'https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mjpdub6xzgnbbd.webp',
    ],
    vouchers: ['Giảm 5k₫', 'Giảm 10k₫', 'Giảm 15k₫'],
    variants: [
        {
            type: 'Màu Sắc',
            options: ['Đen', 'Trắng', 'Xanh dương', 'Xanh Navy', 'Đỏ'],
        },
        {
            type: 'Size',
            options: ['S', 'M', 'L', 'XL', '2XL'],
        },
    ],
    description: `Chất liệu: Cotton 100% 2 chiều định lượng 250gsm
Form áo: Oversize
Công nghệ in: In lụa thủ công cao cấp
Bảo hành: 6 tháng`,
};
