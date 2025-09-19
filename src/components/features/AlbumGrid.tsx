import AlbumCard from "./AlbumCard"
import { type AlbumGridProps } from "@/types/album.types"

const AlbumGrid = ({ albums }: AlbumGridProps) => {
    return(
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 p-10 mt-6 w-full'>
            {albums?.map((a) => (
                <AlbumCard 
                    key={a.slug}
                    album={a}
                />
            ))}
        </div>
    )
}

export default AlbumGrid