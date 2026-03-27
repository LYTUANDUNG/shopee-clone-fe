export interface ReviewComment {
    id: string | number;
    username: string;
    avatar?: string;
    rating: number;
    createdAt: string;
    variant: string;
    content: string;
    images: string[];
    video?: {
        thumbnail: string;
        url: string;
        duration: string;
    };
    reply?: string;
    likedCount: number;
}
export interface ReviewStats {
    averageScore: number;
    total: number;
    starCounts: Record<number, number>;
    withComment: number;
    withMedia: number;
}