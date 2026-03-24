import type { ProductDescriptionProps } from "./types/index";
import type { Product } from "./types";

export const MOCK_PRODUCT: Product = {
  id: 1,
  name: "Áo thun unisex ILUMINATION INSPIRATION phông tay lỡ nam nữ form rộng Local Brand",
  price: 144036,
  originalPrice: 320000,
  rating: 4.9,
  sold: 330,
  images: [
    "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mipuh16cvd350a.webp",
    "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-midywhy6emm986.webp",
    "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mie02jtciiva75.webp",
    "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mipuh16g85xeed.webp",
    "https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mjpdub6xzgnbbd.webp",
  ],
  vouchers: ["Giảm 5k₫", "Giảm 10k₫", "Giảm 15k₫"],
  variants: [
    {
      type: "Màu Sắc",
      options: ["Đen", "Trắng", "Xanh dương", "Xanh Navy", "Đỏ"],
    },
    {
      type: "Size",
      options: ["S", "M", "L", "XL", "2XL"],
    },
  ],
  description: `Chất liệu: Cotton 100% 2 chiều định lượng 250gsm
Form áo: Oversize
Công nghệ in: In lụa thủ công cao cấp
Bảo hành: 6 tháng`,
};
export const MOCK_PRODUCT_DESCRIPTION: ProductDescriptionProps = {
  description:
    MOCK_PRODUCT.description ||
    "SẢN PHẨM\nMô tả sản phẩm: PIJAMA GẤU XANH TRẮNG 🐻 Bộ Mặc Nhà/ Bộ Ngủ Nam Nữ Hot\n- Chất liệu: (kate)\n- Thiết kế: Set pijama hoạ tiết gấu xinh xắn, áo dáng cổ pijama có cúc đóng/ mở xinh xắn áo có 1 túi ngực, tay ngắn và áo form rộng. Quần short đùi cạp chun co giãn thoải mái, ống loe rộng rãi. Set pijama mặc nhà bao xinh, mua ngay mấy set về mặc cho mát nè các nàng\n- Ứng dụng: mặc đi ngủ, mặc hàng ngày\n⚡ Màu sắc: trắng\n⚡ Size : Freesize dưới 40-60kg đổ lại mặc xinh",
  categories: [
    { label: "Shopee", to: "/" },
    { label: "Thời Trang Nữ", to: "/thoi-trang-nu" },
    { label: "Đồ ngủ", to: "/do-ngu" },
    { label: "Pyjama", to: "/pyjama" },
  ],
  attributes: [
    { label: "Chiều dài tay áo", value: "Tay ngắn" },
    { label: "Gửi từ", value: "Hà Nội" },
  ],
  showSizeInput: true,
  sizeGuide: {
    columns: [
      { label: "Size (Quốc Tế)" },
      { label: "Chiều dài áo", subLabel: "(cm)" },
      { label: "Chiều dài ống quần", subLabel: "(cm)" },
    ],
    rows: [{ size: "Quốc Tế: Free Size", measurements: ["50", "37"] }],
  },
};
