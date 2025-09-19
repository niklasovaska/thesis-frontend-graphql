import { gql } from '@apollo/client'
import { REVIEW_STATS_FRAGMENT } from '../fragments/fragment.queries'

export const GET_ALBUMS = gql`
  query {
    getAllAlbums {
      id
      title
      slug
      year
      artist {
        name
      }
      genre {
        name
      }
    }
  }
`

export const GET_ALBUMS_PAGINATED = gql`
  query GetAlbumsPaginated($cursor: String, $limit: Int!){
    getAlbumsPaginated(cursor: $cursor, limit: $limit) {
      items {
        title
        slug
        year
        artist {
          name
        }
        genre {
          name
        }
      }
      nextCursor
      hasNextPage
    }

  }

`

export const GET_ALBUM_BY_ID = gql`
  query GetAlbumById($id: String!) {
    getAlbumById(id: $id) {
      title
      year
      imageUrl
      artist {
        name
      }
      genre {
        name
      }
      tracks {
        trackNumber
        title
      }
    }
  }
`

export const GET_ALBUM_BY_SLUG = gql`
  query GetAlbumsBySlug($slug: String!) {
    getAlbumBySlug(slug: $slug) {
      title
      slug
      year
      imageUrl
      artist {
        name
      }
      genre {
        name
      }
      tracks {
        trackNumber
        title
      }
    }
  }
`

export const GET_ALBUM_INFO_PAGE = gql`
  query getAlbumInfo($slug: String!) {
    getAlbumBySlug(slug: $slug) {
      title
      slug
      year
      imageUrl
      artist {
        name
      }
      genre {
        name
      }
      tracks {
        trackNumber
        title
      }
      getReviewsWithContent {
        content
        createdAt
        rating
        user {
          name
        }
      }
      ...ReviewStats
    }
  }

  ${REVIEW_STATS_FRAGMENT}
`