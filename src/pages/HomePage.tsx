import { useQuery } from '@apollo/client/react'
import { GET_ALBUMS_PAGINATED } from '@/graphql/albums/queries'
import { type AlbumsPaginatedQuery } from '@/types/album.types'
import AlbumGrid from '@/components/features/AlbumGrid'
import LoadingAlbumGrid from '@/components/features/LoadingAlbumCard'
import { Button } from '@/components/ui/button'

const HomePage = () => {

    const { data, loading, error, fetchMore } = useQuery<AlbumsPaginatedQuery>(GET_ALBUMS_PAGINATED, {
        variables: { limit: 12},
        notifyOnNetworkStatusChange: true,
    })
    
    const hasNextPage = data?.getAlbumsPaginated.hasNextPage
    const nextCursor = data?.getAlbumsPaginated.nextCursor

    const handleLoadMore = () => {
        if(!hasNextPage) return

        fetchMore({
            variables: { limit: 12, cursor: nextCursor },
            updateQuery: (prevResult, { fetchMoreResult }) => {
                if(!fetchMoreResult) return prevResult

                 
                return {
                getAlbumsPaginated: {
                    __typename: 'AlbumPaginated',
                    items: [
                        ...prevResult.getAlbumsPaginated.items,
                        ...fetchMoreResult.getAlbumsPaginated.items
                    ],
                    nextCursor: fetchMoreResult.getAlbumsPaginated.nextCursor,
                    hasNextPage: fetchMoreResult.getAlbumsPaginated.hasNextPage
                }
            }
            }

        })
    }

    if(error) return <p>Error fetching data...</p>

    if (data?.getAlbumsPaginated.items.length === 0) {
    return <p className="text-sm text-muted-foreground">No topics found</p>
    }

    return(
        <div className='flex flex-col items-center'>
            <AlbumGrid 
                albums={data?.getAlbumsPaginated.items}
            />
            {hasNextPage && (
                <Button 
                    onClick={handleLoadMore} 
                    disabled={loading}
                    className='self-center mb-10'
                >
                    {loading ? 'Loading...' : 'Load more'}
                </Button>
            )}
            {!data && loading && <LoadingAlbumGrid />}
        </div>
    )
    
}

export default HomePage