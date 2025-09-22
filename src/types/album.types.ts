export type AlbumsPaginatedQuery = {
  getAlbumsPaginated: {
    items: AlbumItem[]
    nextCursor: string
    hasNextPage: boolean 
  }
}

export type AlbumGridProps = {
  albums: AlbumItem[] | undefined

}

export type AlbumCardProps = {
  album: AlbumItem
}
  
type AlbumItem = {
  title: string
  slug: string
  year: number
  artist: {
    name: string
  }
  genre: {
    name: string
  }
}

export type AlbumContainerProps = {
  album: AlbumInfoPageQuery | undefined
}

export type AlbumInfoPageQuery = {
  title: string
  slug: string
  year: number
  imageUrl: string
  artist: {
    name: string
  }
  genre: {
    name: string
  }
  tracks: Track[]
  getRatingStats: Stats
  getReviewsWithContent: ReviewWithContent[]
}

type ReviewWithContent = {
  content: string
  createdAt: string
  rating: number
  user: {
    name: string
  }
}

export type CommentSectionProps = {
  reviews: ReviewWithContent[] | undefined
}

export type Stats = {
  oneCount: number
  twoCount: number
  threeCount: number
  fourCount: number
  fiveCount: number
  totalCount: number
  averageRating: number
}

export type StatChartProps = {
  stats: Stats | undefined
}

type Track = {
  trackNumber: number
  title: string
}

export type TrackListProps = {
  tracks: Track[] | undefined
}