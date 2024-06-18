export interface MediaObject {
    title: string,
    thumbnail: ThumbnailUrls,
    year: number,
    category: string,
    rating: string,
    isBookmarked: boolean,
    isTrending: boolean
}

export interface ThumbnailUrls {
    regular: RegularThumbnailUrls,
    trending: TrendingThumbnailUrls
}

export interface RegularThumbnailUrls {
    small: string,
    medium: string,
    large: string
}

export interface TrendingThumbnailUrls {
    small: string,
    large: string
}