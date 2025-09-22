import { useParams } from "react-router"
import { useQuery } from "@apollo/client/react"
import type { AlbumInfoPageQuery } from "@/types/album.types"
import { GET_ALBUM_INFO_PAGE } from "@/graphql/albums/queries"
import Loader from "@/components/ui/spinloader"
import AlbumContainer from "@/components/features/AlbumContainer"


const AlbumPage = () => {
    const params = useParams<{ slug: string }>()
    
    const { data, loading, error } = useQuery<{ getAlbumBySlug: AlbumInfoPageQuery }>(
        GET_ALBUM_INFO_PAGE,
        { variables: { slug: params.slug }}
    )

    return(
        <div className='flex flex-col items-center w-full p-6'>
            {!data && loading && <Loader size='lg'/>}
            {error && <p>Error: {error.message}</p>}
            <AlbumContainer album={data?.getAlbumBySlug}/>
        </div>
    )
}

export default AlbumPage