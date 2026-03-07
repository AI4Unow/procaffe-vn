import posts from "./posts.json";

export interface BlogCategory {
    slug: string;
    name: string;
    categoryIds: number[];
}

export const BLOG_CATEGORIES: BlogCategory[] = [
    { slug: "kinh-doanh-quan-ca-phe", name: "Kinh doanh quán cà phê", categoryIds: [1450] },
    { slug: "cach-pha-ca-phe", name: "Cách pha cà phê", categoryIds: [1602] },
    { slug: "tin-tuc", name: "Tin tức", categoryIds: [106] },
    { slug: "cau-hoi-thuong-gap", name: "Câu hỏi thường gặp", categoryIds: [88] },
    { slug: "danh-gia-san-pham", name: "Đánh giá sản phẩm", categoryIds: [85] },
    { slug: "videos", name: "Videos", categoryIds: [373] },
];

export function getPostsByCategory(slug: string) {
    const cat = BLOG_CATEGORIES.find((c) => c.slug === slug);
    if (!cat) return [];
    return posts
        .filter((p) => p.categories?.some((c: number) => cat.categoryIds.includes(c)))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getRelatedPosts(postId: number, categoryIds: number[], count = 5) {
    return posts
        .filter(
            (p) =>
                p.id !== postId &&
                p.categories?.some((c: number) => categoryIds.includes(c))
        )
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, count);
}

export function getCategoryBySlug(slug: string) {
    return BLOG_CATEGORIES.find((c) => c.slug === slug);
}

export { posts };
