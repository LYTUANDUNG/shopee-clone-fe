export const FOOTER_CATEGORIES = [
export interface FooterItem {
    name: string;
    link: string;
    icon?: string;
}

export interface FooterCategory {
    title: string;
    link: string;
    items: FooterItem[];
}

export interface FooterImageLink {
    src: string;
    alt: string;
    link?: string;
}

export const FOOTER_CATEGORIES: FooterCategory[] = [
    {
        title: 'THỜI TRANG NAM',
        link: '/Thời-Trang-Nam-cat.11035567',
        items: [
            { name: 'Áo Khoác', link: '/Áo-Khoác-cat.11035567.11035568' },
            { name: 'Áo Vest và Blazer', link: '/Áo-Vest-và-Blazer-cat.11035567.11035572' },
            { name: 'Áo Hoodie, Áo Len & Áo Nỉ', link: '/Áo-Hoodie-Áo-Len-Áo-Nỉ-cat.11035567.11035578' },
            { name: 'Quần Jeans', link: '/Quần-Jeans-cat.11035567.11035583' },
            // ... Hùng thêm tiếp các mục khác từ HTML vào đây nhé
            { name: 'Quần Dài/Quần Âu', link: '/Quần-Dài-Quần-Âu-cat.11035567.11035584' },
            { name: 'Quần Short', link: '/Quần-Short-cat.11035567.11035590' },
            { name: 'Áo', link: '/Áo-cat.11035567.11035592' },
            { name: 'Áo Ba Lỗ', link: '/Áo-Ba-Lỗ-cat.11035567.11035597' },
            { name: 'Đồ Lót', link: '/Đồ-Lót-cat.11035567.11035598' },
            { name: 'Đồ Ngủ', link: '/Đồ-Ngủ-cat.11035567.11035603' },
            { name: 'Đồ Bộ', link: '/Đồ-Bộ-cat.11035567.11035604' },
            { name: 'Vớ/Tất', link: '/Vớ-Tất-cat.11035567.11035605' },
            { name: 'Trang Phục Truyền Thống', link: '/Trang-Phục-Truyền-Thống-cat.11035567.11035606' },
            { name: 'Đồ Hóa Trang', link: '/Đồ-Hóa-Trang-cat.11035567.11035611' },
            { name: 'Trang Phục Ngành Nghề', link: '/Trang-Phục-Ngành-Nghề-cat.11035567.11035612' },
            { name: 'Khác', link: '/Khác-cat.11035567.11035613' },
            { name: 'Trang Sức Nam', link: '/Trang-Sức-Nam-cat.11035567.11035614' },
            { name: 'Kính Mắt Nam', link: '/Kính-Mắt-Nam-cat.11035567.11035620' },
            { name: 'Thắt Lưng Nam', link: '/Thắt-Lưng-Nam-cat.11035567.11035625' },
            { name: 'Cà vạt & Nơ cổ', link: '/Cà-vạt-Nơ-cổ-cat.11035567.11035626' },
            { name: 'Phụ Kiện Nam', link: '/Phụ-Kiện-Nam-cat.11035567.11035627' }
        ]
    },
    {
        title: 'NHÀ CỬA & ĐỜI SỐNG',
        link: '/Nhà-Cửa-Đời-Sống-cat.11036670',
        items: [
            { name: 'Chăn, Ga, Gối & Nệm', link: '/Chăn-Ga-Gối-Nệm-cat.11036670.11036683' },
            { name: 'Đồ nội thất', link: '/Đồ-nội-thất-cat.11036670.11036695' },
        ]
    },
    // Thêm đủ 25+ danh mục như trong hình image_cf906a.png
            { name: 'Trang trí nhà cửa', link: '/Trang-trí-nhà-cửa-cat.11036670.11036717' },
            { name: 'Dụng cụ & Thiết bị tiện ích', link: '/Dụng-cụ-Thiết-bị-tiện-ích-cat.11036670.11036732' },
            { name: 'Nhà bếp & Hộp đựng thực phẩm', link: '/Đồ-dùng-nhà-bếp-và-hộp-đựng-thực-phẩm-cat.11036670.11036748' },
            { name: 'Đèn', link: '/Đèn-cat.11036670.11036760' },
            { name: 'Ngoài trời & Sân vườn', link: '/Ngoài-trời-Sân-vườn-cat.11036670.11036776' },
            { name: 'Đồ dùng phòng tắm', link: '/Đồ-dùng-phòng-tắm-cat.11036670.11036671' },
            { name: 'Vật phẩm thờ cúng', link: '/Vật-phẩm-thờ-cúng-cat.11036670.11111670' },
            { name: 'Đồ trang trí tiệc', link: '/Đồ-trang-trí-tiệc-cat.11036670.11111669' },
            { name: 'Chăm sóc nhà cửa và giặt ủi', link: '/Chăm-sóc-nhà-cửa-và-giặt-ủi-cat.11036670.11111665' },
            { name: 'Sắp xếp nhà cửa', link: '/Sắp-xếp-nhà-cửa-cat.11036670.11111668' },
            { name: 'Dụng cụ pha chế', link: '/Dụng-cụ-pha-chế-cat.11036670.11111666' },
            { name: 'Tinh dầu thơm phòng', link: '/Tinh-dầu-thơm-phòng-cat.11036670.11111664' },
            { name: 'Đồ dùng phòng ăn', link: '/Đồ-dùng-phòng-ăn-cat.11036670.11111667' }
        ]
    },
    {
        title: 'ĐỒNG HỒ',
        link: '/Đồng-Hồ-cat.11035788',
        items: [
            { name: 'Đồng Hồ Nam', link: '/Đồng-Hồ-Nam-cat.11035788.11035789' },
            { name: 'Đồng Hồ Nữ', link: '/Đồng-Hồ-Nữ-cat.11035788.11035790' },
            { name: 'Bộ Đồng Hồ & Đồng Hồ Cặp', link: '/Bộ-Đồng-Hồ-Đồng-Hồ-Cặp-cat.11035788.11035791' },
            { name: 'Đồng Hồ Trẻ Em', link: '/Đồng-Hồ-Trẻ-Em-cat.11035788.11035792' },
            { name: 'Phụ Kiện Đồng Hồ', link: '/Phụ-Kiện-Đồng-Hồ-cat.11035788.11035793' },
            { name: 'Khác', link: '/Khác-cat.11035788.11035800' }
        ]
    },
    {
        title: 'PHỤ KIỆN & TRANG SỨC NỮ',
        link: '/Phụ-Kiện-Trang-Sức-Nữ-cat.11035853',
        items: [
            { name: 'Nhẫn', link: '/Nhẫn-cat.11035853.11035854' },
            { name: 'Bông tai', link: '/Bông-tai-cat.11035853.11035855' },
            { name: 'Khăn choàng', link: '/Khăn-choàng-cat.11035853.11035856' },
            { name: 'Găng tay', link: '/Găng-tay-cat.11035853.11035857' },
            { name: 'Phụ kiện tóc', link: '/Phụ-kiện-tóc-cat.11035853.11035858' },
            { name: 'Vòng tay & Lắc tay', link: '/Vòng-tay-Lắc-tay-cat.11035853.11035865' },
            { name: 'Lắc chân', link: '/Lắc-chân-cat.11035853.11035866' },
            { name: 'Mũ', link: '/Mũ-cat.11035853.11035867' },
            { name: 'Dây chuyền', link: '/Dây-chuyền-cat.11035853.11035868' },
            { name: 'Kính mắt', link: '/Kính-mắt-cat.11035853.11035869' },
            { name: 'Vớ/ Tất', link: '/Vớ-Tất-cat.11035853.11035893' },
            { name: 'Ô/Dù', link: '/Ô-Dù-cat.11035853.11035897' }
        ]
    },
    {
        title: 'BALO & TÚI VÍ NAM',
        link: '/Balo-Túi-Ví-Nam-cat.11035741',
        items: [
            { name: 'Ba Lô Nam', link: '/Ba-Lô-Nam-cat.11035741.11035742' },
            { name: 'Ba Lô Laptop Nam', link: '/Ba-Lô-Laptop-Nam-cat.11035741.11035743' },
            { name: 'Túi & Cặp Đựng Laptop', link: '/Túi-Cặp-Đựng-Laptop-cat.11035741.11035744' },
            { name: 'Ví Cầm Tay Nam', link: '/Ví-Cầm-Tay-Nam-cat.11035741.11035750' },
            { name: 'Túi Đeo Chéo Nam', link: '/Túi-Đeo-Chéo-Nam-cat.11035741.11035752' },
            { name: 'Bóp/Ví Nam', link: '/Bóp-Ví-Nam-cat.11035741.11035753' }
        ]
    },
    {
        title: 'VOUCHER & DỊCH VỤ',
        link: '/Voucher-Dịch-Vụ-cat.11035898',
        items: [
            { name: 'Nhà hàng & Ăn uống', link: '/Nhà-hàng-Ăn-uống-cat.11035898.11035905' },
            { name: 'Sự kiện & Giải trí', link: '/Sự-kiện-Giải-trí-cat.11035898.11035899' },
            { name: 'Nạp tiền tài khoản', link: '/Nạp-tiền-tài-khoản-cat.11035898.11035931' },
            { name: 'Sức khỏe & Làm đẹp', link: '/Sức-khỏe-Làm-đẹp-cat.11035898.11035922' },
            { name: 'Thanh toán hóa đơn', link: '/Thanh-toán-hóa-đơn-cat.11035898.11035913' },
            { name: 'Dịch vụ khác', link: '/Dịch-vụ-khác-cat.11035898.11035914' }
        ]
    },
    {
        title: 'THỜI TRANG NỮ',
        link: '/Thời-Trang-Nữ-cat.11035639',
        items: [
            { name: 'Quần', link: '/Quần-cat.11035639.11035648' },
            { name: 'Chân váy', link: '/Chân-váy-cat.11035639.11035656' },
            { name: 'Quần jeans', link: '/Quần-jeans-cat.11035639.11035657' },
            { name: 'Đầm/Váy', link: '/Đầm-Váy-cat.11035639.11035658' },
            { name: 'Áo khoác & Vest', link: '/Áo-khoác-Áo-choàng-Vest-cat.11035639.11035665' },
            { name: 'Áo len & Cardigan', link: '/Áo-len-Cardigan-cat.11035639.11035672' },
            { name: 'Hoodie và Áo nỉ', link: '/Hoodie-và-Áo-nỉ-cat.11035639.11035673' },
            { name: 'Đồ lót', link: '/Đồ-lót-cat.11035639.11035682' },
            { name: 'Đồ ngủ', link: '/Đồ-ngủ-cat.11035639.11035692' },
            { name: 'Áo', link: '/Áo-cat.11035639.11035640' },
            { name: 'Đồ Bầu', link: '/Đồ-Bầu-cat.11035639.11035697' },
            { name: 'Vớ/ Tất', link: '/Vớ-Tất-cat.11035639.11035726' }
        ]
    },
    {
        title: 'MÁY TÍNH & LAPTOP',
        link: '/Máy-Tính-Laptop-cat.11035954',
        items: [
            { name: 'Máy Tính Bàn', link: '/Máy-Tính-Bàn-cat.11035954.11035955' },
            { name: 'Màn Hình', link: '/Màn-Hình-cat.11035954.11035961' },
            { name: 'Linh Kiện Máy Tính', link: '/Linh-Kiện-Máy-Tính-cat.11035954.11035962' },
            { name: 'Thiết Bị Lưu Trữ', link: '/Thiết-Bị-Lưu-Trữ-cat.11035954.11035975' },
            { name: 'Thiết Bị Mạng', link: '/Thiết-Bị-Mạng-cat.11035954.11035983' },
            { name: 'Máy In & Scan', link: '/Máy-In-Máy-Scan-Máy-Chiếu-cat.11035954.11035993' },
            { name: 'Phụ Kiện Máy Tính', link: '/Phụ-Kiện-Máy-Tính-cat.11035954.11036000' },
            { name: 'Laptop', link: '/Laptop-cat.11035954.11036015' },
            { name: 'Gaming', link: '/Gaming-cat.11035954.11036023' }
        ]
    },
    {
        title: 'GIÀY DÉP NỮ',
        link: '/Giày-Dép-Nữ-cat.11035825',
        items: [
            { name: 'Bốt', link: '/Bốt-cat.11035825.11035826' },
            { name: 'Giày Thể Thao', link: '/Giày-Thể-Thao-Sneaker-cat.11035825.11035830' },
            { name: 'Giày Đế Bằng', link: '/Giày-Đế-Bằng-cat.11035825.11035831' },
            { name: 'Giày Cao Gót', link: '/Giày-Cao-Gót-cat.11035825.11035837' },
            { name: 'Xăng-đan Và Dép', link: '/Xăng-đan-Và-Dép-cat.11035825.11035839' },
            { name: 'Phụ Kiện Giày', link: '/Phụ-Kiện-Giày-cat.11035825.11035845' }
        ]
    },
    {
        title: 'THỂ THAO & DU LỊCH',
        link: '/Thể-Thao-Du-Lịch-cat.11035478',
        items: [
            { name: 'Vali', link: '/Vali-cat.11035478.11035479' },
            { name: 'Túi du lịch', link: '/Túi-du-lịch-cat.11035478.11035487' },
            { name: 'Phụ kiện du lịch', link: '/Phụ-kiện-du-lịch-cat.11035478.11035492' },
            { name: 'Dụng Cụ Thể Thao', link: '/Dụng-Cụ-Thể-Thao-Dã-Ngoại-cat.11035478.11035503' },
            { name: 'Giày Thể Thao', link: '/Giày-Thể-Thao-cat.11035478.11035531' },
            { name: 'Thời Trang Thể Thao', link: '/Thời-Trang-Thể-Thao-Dã-Ngoại-cat.11035478.11035543' }
        ]
    },
    {
        title: 'THỜI TRANG TRẺ EM',
        link: '/Thời-Trang-Trẻ-Em-cat.11036382',
        items: [
            { name: 'Trang phục bé trai', link: '/Trang-phục-bé-trai-cat.11036382.11036418' },
            { name: 'Trang phục bé gái', link: '/Trang-phục-bé-gái-cat.11036382.11036438' },
            { name: 'Giày dép bé trai', link: '/Giày-dép-bé-trai-cat.11036382.11036461' },
            { name: 'Giày dép bé gái', link: '/Giày-dép-bé-gái-cat.11036382.11036469' },
            { name: 'Quần áo em bé', link: '/Quần-áo-em-bé-cat.11036382.11036383' },
            { name: 'Phụ kiện trẻ em', link: '/Phụ-kiện-trẻ-em-cat.11036382.11036397' }
        ]
    },
    {
        title: 'DỤNG CỤ TIỆN ÍCH',
        link: '/Dụng-cụ-và-thiết-bị-tiện-ích-cat.11116484',
        items: [
            { name: 'Dụng cụ cầm tay', link: '/Dụng-cụ-cầm-tay-cat.11116484.11116487' },
            { name: 'Thiết bị mạch điện', link: '/Thiết-bị-mạch-điện-cat.11116484.11116489' },
            { name: 'Vật liệu xây dựng', link: '/Vật-liệu-xây-dựng-cat.11116484.11116488' },
            { name: 'Thiết bị xây dựng', link: '/Thiết-bị-và-phụ-kiện-xây-dựng-cat.11116484.11116486' }
        ]
    },
    {
        title: 'ĐIỆN THOẠI & PHỤ KIỆN',
        link: '/Điện-Thoại-Phụ-Kiện-cat.11036030',
        items: [
            { name: 'Điện thoại', link: '/Điện-thoại-cat.11036030.11036031' },
            { name: 'Máy tính bảng', link: '/Máy-tính-bảng-cat.11036030.11036041' },
            { name: 'Pin Dự Phòng', link: '/Pin-Dự-Phòng-cat.11036030.11036048' },
            { name: 'Cáp và Bộ Sạc', link: '/Pin-Gắn-Trong-Cáp-và-Bộ-Sạc-cat.11036030.11036054' },
            { name: 'Ốp lưng & Bao da', link: '/Ốp-lưng-bao-da-Miếng-dán-điện-thoại-cat.11036030.11036060' },
            { name: 'Bảo vệ màn hình', link: '/Bảo-vệ-màn-hình-cat.11036030.11036064' },
            { name: 'Thẻ nhớ', link: '/Thẻ-nhớ-cat.11036030.11036083' },
            { name: 'Sim', link: '/Sim-cat.11036030.11036084' }
        ]
    },
    {
        title: 'SẮC ĐẸP',
        link: '/Sắc-Đẹp-cat.11036279',
        items: [
            { name: 'Chăm sóc da mặt', link: '/Chăm-sóc-da-mặt-cat.11036279.11036328' },
            { name: 'Tắm & Chăm sóc cơ thể', link: '/Tắm-chăm-sóc-cơ-thể-cat.11036279.11036280' },
            { name: 'Trang điểm', link: '/Trang-điểm-cat.11036279.11036314' },
            { name: 'Chăm sóc tóc', link: '/Chăm-sóc-tóc-cat.11036279.11036297' },
            { name: 'Nước hoa', link: '/Nước-hoa-cat.11036279.11036310' },
            { name: 'Vệ sinh răng miệng', link: '/Vệ-sinh-răng-miệng-cat.11111646' },
            { name: 'Chăm sóc phụ nữ', link: '/Chăm-sóc-phụ-nữ-cat.11111647' }
        ]
    },
    {
        title: 'GIÀY DÉP NAM',
        link: '/Giày-Dép-Nam-cat.11035801',
        items: [
            { name: 'Bốt', link: '/Bốt-cat.11035801.11035802' },
            { name: 'Giày Thể Thao/ Sneakers', link: '/Giày-Thể-Thao-Sneakers-cat.11035801.11035807' },
            { name: 'Giày Tây Lười', link: '/Giày-Tây-Lười-cat.11035801.11035809' },
            { name: 'Giày Oxfords', link: '/Giày-Oxfords-Giày-Buộc-Dây-cat.11035801.11035810' },
            { name: 'Xăng-đan và Dép', link: '/Xăng-đan-và-Dép-cat.11035801.11035811' },
            { name: 'Phụ kiện giày dép', link: '/Phụ-kiện-giày-dép-cat.11035801.11035817' }
        ]
    },
    {
        title: 'BÁCH HÓA ONLINE',
        link: '/Bách-Hóa-Online-cat.11036525',
        items: [
            { name: 'Đồ ăn vặt', link: '/Đồ-ăn-vặt-cat.11036525.11036532' },
            { name: 'Nhu yếu phẩm', link: '/Nhu-yếu-phẩm-cat.11036525.11036544' },
            { name: 'Nguyên liệu nấu ăn', link: '/Nguyên-liệu-nấu-ăn-cat.11036525.11036552' },
            { name: 'Sữa - trứng', link: '/Sữa-trứng-cat.11036525.11036591' },
            { name: 'Đồ uống', link: '/Đồ-uống-cat.11036525.11036576' },
            { name: 'Đồ uống có cồn', link: '/Đồ-uống-có-cồn-cat.11036525.11036616' }
        ]
    },
    {
        title: 'ĐỒ CHƠI',
        link: '/Đồ-Chơi-cat.11036932',
        items: [
            { name: 'Sở thích & Sưu tầm', link: '/Sở-thích-Sưu-tầm-cat.11036932.11036933' },
            { name: 'Đồ chơi giải trí', link: '/Đồ-chơi-giải-trí-cat.11036932.11036939' },
            { name: 'Đồ chơi giáo dục', link: '/Đồ-chơi-giáo-dục-cat.11036932.11036946' },
            { name: 'Đồ chơi vận động', link: '/Đồ-chơi-vận-động-ngoài-trời-cat.11036932.11036960' },
            { name: 'Búp bê & Thú bông', link: '/Búp-bê-Đồ-chơi-nhồi-bông-cat.11036932.11036966' }
        ]
    },
    {
        title: 'MẸ & BÉ',
        link: '/Mẹ-Bé-cat.11036194',
        items: [
            { name: 'Đồ dùng du lịch', link: '/Đồ-dùng-du-lịch-cho-bé-cat.11036194.11036195' },
            { name: 'Đồ dùng ăn dặm', link: '/Đồ-dùng-ăn-dặm-cho-bé-cat.11036194.11036204' },
            { name: 'Chăm sóc cơ thể bé', link: '/Đồ-dùng-phòng-tắm-Chăm-sóc-cơ-thể-bé-cat.11036194.11036222' },
            { name: 'Chăm sóc sức khỏe bé', link: '/Chăm-sóc-sức-khỏe-bé-cat.11036194.11036253' },
            { name: 'Tã & bô em bé', link: '/Tã-bô-em-bé-cat.11036194.11036260' },
            { name: 'Sữa công thức', link: '/Sữa-công-thức-0-24-tháng-tuổi-cat.11036194.11059300' }
        ]
    },
    {
        title: 'MÁY ẢNH & QUAY PHIM',
        link: '/Máy-Ảnh-Máy-Quay-Phim-cat.11036101',
        items: [
            { name: 'Máy ảnh', link: '/Máy-ảnh-Máy-quay-phim-cat.11036101.11036102' },
            { name: 'Camera giám sát', link: '/Camera-giám-sát-Camera-hệ-thống-cat.11036101.11036109' },
            { name: 'Thẻ nhớ', link: '/Thẻ-nhớ-cat.11036101.11036114' },
            { name: 'Ống kính', link: '/Ống-kính-cat.11036101.11036115' },
            { name: 'Phụ kiện máy ảnh', link: '/Phụ-kiện-máy-ảnh-cat.11036101.11036119' }
        ]
    },
    {
        title: 'TÚI VÍ NỮ',
        link: '/Túi-Ví-Nữ-cat.11035761',
        items: [
            { name: 'Ba Lô Nữ', link: '/Ba-Lô-Nữ-cat.11035761.11035762' },
            { name: 'Ví Dự Tiệc & Cầm Tay', link: '/Ví-Dự-Tiệc-Ví-Cầm-Tay-cat.11035761.11035768' },
            { name: 'Túi Tote', link: '/Túi-Tote-cat.11035761.11035770' },
            { name: 'Túi Đeo Vai & Chéo', link: '/Túi-Đeo-Chéo-Túi-Đeo-Vai-cat.11035761.11035772' },
            { name: 'Ví/Bóp Nữ', link: '/Ví-Bóp-Nữ-cat.11035761.11035773' },
            { name: 'Phụ Kiện Túi', link: '/Phụ-Kiện-Túi-cat.11035761.11035780' }
        ]
    },
    {
        title: 'Ô TÔ & XE MÁY & XE ĐẠP',
        link: '/Ô-Tô-Xe-Máy-Xe-Đạp-cat.11036793',
        items: [
            { name: 'Xe đạp, xe điện', link: '/Xe-đạp-xe-điện-cat.11036793.11036794' },
            { name: 'Mô tô, xe máy', link: '/Mô-tô-xe-máy-cat.11036793.11036804' },
            { name: 'Mũ bảo hiểm', link: '/Mũ-bảo-hiểm-cat.11036793.11036817' },
            { name: 'Phụ kiện bên trong ô tô', link: '/Phụ-kiện-bên-trong-ô-tô-cat.11036793.11108984' },
            { name: 'Phụ tùng xe máy', link: '/Phụ-tùng-xe-máy-cat.11036793.11108953' },
            { name: 'Chăm sóc ô tô', link: '/Chăm-sóc-ô-tô-cat.11036793.11108974' }
        ]
    },
    {
        title: 'GIẶT GIŨ & NHÀ CỬA',
        link: '/Giặt-Giũ-Chăm-Sóc-Nhà-Cửa-cat.11036624',
        items: [
            { name: 'Giấy vệ sinh, khăn giấy', link: '/Giấy-vệ-sinh-khăn-giấy-cat.11036624.11036634' },
            { name: 'Vệ sinh nhà cửa', link: '/Vệ-sinh-nhà-cửa-cat.11036624.11036639' },
            { name: 'Vệ sinh bát đĩa', link: '/Vệ-sinh-bát-đĩa-cat.11036624.11036647' },
            { name: 'Dụng cụ vệ sinh', link: '/Dụng-cụ-vệ-sinh-cat.11036624.11036649' },
            { name: 'Thuốc diệt côn trùng', link: '/Thuốc-diệt-côn-trùng-cat.11036624.11036660' },
            { name: 'Túi đựng rác', link: '/Bao-bì-túi-đựng-rác-cat.11036624.11036668' }
        ]
    },
    {
        title: 'THIẾT BỊ ĐIỆN TỬ',
        link: '/Thiết-Bị-Điện-Tử-cat.11036132',
        items: [
            { name: 'Phụ kiện tivi', link: '/Phụ-kiện-tivi-cat.11036132.11036167' },
            { name: 'Máy Game Console', link: '/Máy-Game-Console-cat.11036132.11036172' },
            { name: 'Tai nghe nhét tai', link: '/Tai-nghe-nhét-tai-cat.11036132.11036143' },
            { name: 'Loa', link: '/Loa-cat.11036132.11036135' },
            { name: 'Tivi', link: '/Tivi-cat.11036132.11036151' },
            { name: 'Headphones', link: '/Headphones-cat.11036132.11109141' }
        ]
    },
    {
        title: 'SỨC KHỎE',
        link: '/Sức-Khỏe-cat.11036345',
        items: [
            { name: 'Vật tư y tế', link: '/Vật-tư-y-tế-cat.11036345.11036352' },
            { name: 'Thực phẩm chức năng', link: '/Thực-phẩm-chức-năng-cat.11036345.11036346' },
            { name: 'Tã người lớn', link: '/Tã-người-lớn-cat.11036345.11036370' },
            { name: 'Hỗ trợ tình dục', link: '/Hỗ-trợ-tình-dục-cat.11036345.11036375' },
            { name: 'Dụng cụ massage', link: '/Dụng-cụ-massage-và-trị-liệu-cat.11036345.11036372' }
        ]
    },
    {
        title: 'THIẾT BỊ GIA DỤNG',
        link: '/Thiết-Bị-Điện-Gia-Dụng-cat.11036971',
        items: [
            { name: 'Gia dụng nhà bếp', link: '/Đồ-gia-dụng-nhà-bếp-cat.11036971.11036972' },
            { name: 'Máy hút bụi', link: '/Máy-hút-bụi-Thiết-bị-làm-sạch-cat.11036971.11037000' },
            { name: 'Quạt & Máy nóng lạnh', link: '/Quạt-Máy-nóng-lạnh-cat.11036971.11037007' },
            { name: 'Máy xay & ép', link: '/Máy-xay-ép-máy-đánh-trứng-trộn-bột-máy-xay-thực-phẩm-cat.11111623' },
            { name: 'Bếp điện', link: '/Bếp-điện-cat.11036971.11111620' }
        ]
    },
    {
        title: 'NHÀ SÁCH ONLINE',
        link: '/Nhà-Sách-Online-cat.11036863',
        items: [
            { name: 'Sách Tiếng Việt', link: '/Sách-Tiếng-Việt-cat.11036863.11108503' },
            { name: 'Sách ngoại văn', link: '/Sách-ngoại-văn-cat.11036863.11108540' },
            { name: 'Dụng cụ học sinh', link: '/Dụng-cụ-học-sinh-văn-phòng-cat.11036863.11108591' },
            { name: 'Sổ và Giấy', link: '/Sổ-và-Giấy-Các-Loại-cat.11036863.11108610' },
            { name: 'Quà Lưu Niệm', link: '/Quà-Lưu-Niệm-cat.11036863.11036914' },
            { name: 'Nhạc cụ', link: '/Nhạc-cụ-và-phụ-kiện-âm-nhạc-cat.11036863.11108624' }
        ]
    },
    {
        title: 'CHĂM SÓC THÚ CƯNG',
        link: '/Chăm-Sóc-Thú-Cưng-cat.11036478',
        items: [
            { name: 'Thức ăn cho thú cưng', link: '/Thức-ăn-cho-thú-cưng-cat.11036478.11036479' },
            { name: 'Phụ kiện cho thú cưng', link: '/Phụ-kiện-for-thú-cưng-cat.11036478.11036490' },
            { name: 'Vệ sinh thú cưng', link: '/Vệ-sinh-cho-thú-cưng-cat.11036478.11036498' },
            { name: 'Chăm sóc sức khỏe', link: '/Chăm-sóc-sức-khỏe-cat.11036478.11036519' },
            { name: 'Làm đẹp thú cưng', link: '/Làm-đẹp-cho-thú-cưng-cat.11116223' }
        ]
    }
];

export const CUSTOMER_SERVICE: FooterItem[] = [
    { name: 'Trung Tâm Trợ Giúp Shopee', link: 'https://help.shopee.vn/portal' },
    { name: 'Shopee Blog', link: 'https://shopee.vn/blog/' },
    { name: 'Shopee Mall', link: 'https://help.shopee.vn/portal/article/79090' },
    { name: 'Hướng Dẫn Mua Hàng', link: 'https://help.shopee.vn/portal/article/79180' },
    { name: 'Thanh Toán', link: 'https://help.shopee.vn/portal/category/59-Thanh-To%C3%A1n' },
    { name: 'Shopee Xu', link: 'https://help.shopee.vn/portal/article/79144' },
    { name: 'Vận Chuyển', link: 'https://help.shopee.vn/portal/category/60-%C4%90%C6%A1n-H%C3%A0ng-V%E1%BA%ADn-Chuy%E1%BB%83n' },
    { name: 'Trả Hàng & Hoàn Tiền', link: 'https://help.shopee.vn/portal/article/79258' },
    { name: 'Chăm Sóc Khách Hàng', link: 'https://help.shopee.vn/portal/article/79191' },
    { name: 'Chính Sách Bảo Hành', link: 'https://help.shopee.vn/portal/article/79046' }
];

export const ABOUT_SHOPEE: FooterItem[] = [
    { name: 'Về Shopee Việt Nam', link: 'https://careers.shopee.vn/about' },
    { name: 'Tuyển Dụng', link: 'https://careers.shopee.vn/jobs' },
    { name: 'Điều Khoản Shopee', link: 'https://help.shopee.vn/portal/article/77242' },
    { name: 'Chính Sách Bảo Mật', link: 'https://help.shopee.vn/portal/article/77244' },
    { name: 'Chính Hãng', link: 'https://shopee.vn/mall/' },
    { name: 'Kênh Người Bán', link: 'https://banhang.shopee.vn/' },
    { name: 'Flash Sale', link: 'https://shopee.vn/flash_sale/' },
    { name: 'Tiếp Thị Liên Kết', link: 'https://shopee.vn/affiliate/' },
    { name: 'Liên Hệ Với Truyền Thông', link: 'mailto:media.vn@shopee.com' }
];

export const PAYMENT_LOGOS: FooterImageLink[] = [
    { src: 'https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8', alt: 'visa' },
    { src: 'https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16', alt: 'mastercard' },
    { src: 'https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08', alt: 'jcb' },
    { src: 'https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c', alt: 'amex' },
    { src: 'https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281', alt: 'shopeepay' },
    { src: 'https://down-vn.img.susercontent.com/file/5e3f0bee86058637ff23cfdf2e14ca09', alt: 'tra-gop' },
    { src: 'https://down-vn.img.susercontent.com/file/9263fa8c83628f5deff55e2a90758b06', alt: 'spaylater' }
];

export const SHIPPING_LOGOS: FooterImageLink[] = [
    { src: 'https://down-vn.img.susercontent.com/file/vn-11134258-7ras8-m20rc1wk8926cf', alt: 'spx' },
    { src: 'https://down-vn.img.susercontent.com/file/vn-50009109-64f0b242486a67a3d29fd4bcf024a8c6', alt: 'ghn' },
    { src: 'https://down-vn.img.susercontent.com/file/59270fb2f3fbb7cbc92fca3877edde3f', alt: 'viettelpost' },
    { src: 'https://down-vn.img.susercontent.com/file/957f4eec32b963115f952835c779cd2c', alt: 'jt' },
    { src: 'https://down-vn.img.susercontent.com/file/0d349e22ca8d4337d11c9b134cf9fe63', alt: 'grab' },
    { src: 'https://down-vn.img.susercontent.com/file/3900aefbf52b1c180ba66e5ec91190e5', alt: 'ninja-van' }
];

export const SOCIAL_LINKS = [
    { name: 'Facebook', link: 'https://www.facebook.com/ShopeeVN', icon: 'https://down-vn.img.susercontent.com/file/2277b37437aa470fd1c71127c6ff8eb5' },
    { name: 'Instagram', link: 'https://instagram.com/Shopee_VN', icon: 'https://down-vn.img.susercontent.com/file/5973ebbc642ceee80a504a81203bfb91' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/company/shopee', icon: 'https://down-vn.img.susercontent.com/file/f4f86f1119712b553992a75493065d9a' }
];

export const REGIONS = [
    { name: 'Singapore', link: 'https://shopee.sg' },
    { name: 'Indonesia', link: 'https://shopee.co.id' },
    { name: 'Thái Lan', link: 'https://shopee.co.th' },
    { name: 'Malaysia', link: 'https://shopee.com.my' },
    { name: 'Việt Nam', link: 'https://shopee.vn' },
    { name: 'Philippines', link: 'https://shopee.ph' },
    { name: 'Brazil', link: 'https://shopee.com.br' },
    { name: 'México', link: 'https://shopee.com.mx' },
    { name: 'Đài Loan', link: 'https://shopee.tw' },
    { name: 'Argentina', link: 'https://shopee.com.ar' }
];

export const POLICIES: FooterItem[] = [
    { name: 'CHÍNH SÁCH BẢO MẬT', link: 'https://help.shopee.vn/portal/article/77244' },
    { name: 'QUY CHẾ HOẠT ĐỘNG', link: 'https://help.shopee.vn/portal/article/77245' },
    { name: 'CHÍNH SÁCH VẬN CHUYỂN', link: 'https://help.shopee.vn/portal/article/77250' },
    { name: 'CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN', link: 'https://help.shopee.vn/portal/article/77251' }
];