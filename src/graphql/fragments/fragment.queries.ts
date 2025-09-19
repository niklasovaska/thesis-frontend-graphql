import { gql } from '@apollo/client'

export const REVIEW_STATS_FRAGMENT = gql`
    fragment ReviewStats on Album {
        getRatingStats {
        oneCount
        twoCount
        threeCount
        fourCount
        fiveCount
        totalCount
        averageRating
      }
    }
`

export const REVIEWS_WITH_CONTENT_FRAGMENT = gql`
  fragment ReviewsWithContent on Album {
    getReviewsWithContent {
    rating
    content
    createdAt
    user {
      name
    }
  }
}
`