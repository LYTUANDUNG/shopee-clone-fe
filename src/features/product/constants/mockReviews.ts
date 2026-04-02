import type { ReviewComment, ReviewStats } from '../types/review';

export const MOCK_STATS: ReviewStats = {
    averageScore: 4.3,
    total: 5,
    starCounts: { 5: 5, 4: 0, 3: 0, 2: 0, 1: 1 },
    withComment: 3,
    withMedia: 3
};

export const MOCK_REVIEWS: ReviewComment[] = [
    {
        id: 'cmt-001',
        username: 'ilvsyq7',
        avatar: 'https://down-vn.img.susercontent.com/file/vn-11134004-7ras8-m4fi998m1s5rde_tn',
        rating: 5,
        createdAt: '2025-10-19 15:47',
        variant: 'Đen',
        content: 'Đây là lần thứ hai tôi mua chuột chơi game G402 Hyperion Fury...',
        images: ['https://down-vn.img.susercontent.com/file/vn-11134103-820l4-mg0mb9h9cu15b2'],
        video: {
            thumbnail: 'https://down-bs-vn.img.susercontent.com/vn-11110103-6v8go-mg0mbm9ed2j0fa_cover',
            url: 'https://down-tx-vn.vod.susercontent.com/api/v4/11110103/mms/vn-11110103-6v8go-mg0mbm9ed2j0fa.default.mp4',
            duration: '0:15'
        },
        likedCount: 12
    },
    {
        id: 'cmt-002',
        username: 't*****t',
        rating: 1,
        createdAt: '2026-02-24 18:09',
        variant: 'Đen',
        content: 'Hàng fake mà nói là hàng real',
        images: ['https://down-vn.img.susercontent.com/file/vn-11134103-81ztc-ml3gb27eku873e'],
        reply: 'Chào bạn, Shop rất tiếc về trải nghiệm này. Shop cam kết hàng chính hãng 100%, bạn vui lòng nhắn tin để shop hỗ trợ đổi trả nhé.',
        likedCount: 0
    }
];