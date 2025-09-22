import TrackList from "./TrackList"
import StatChart from "./StatChart"
import CommentSection from "./CommentSection"
import type { AlbumContainerProps } from "@/types/album.types"

const AlbumContainer = ({ album }: AlbumContainerProps) => {

    return(
        <section className="bg-background py-10">
            <div className="container">
                <div className="grid gap-2 md:grid-cols-2">
                    <div className="flex flex-col items-center bg-muted rounded-lg p-6">
                        <h1 className="mb-3 mt-2 text-balance text-3xl font-semibold md:text-4xl">
                            {album?.title}
                        </h1>
                        <p className="mb-3 text-muted-foreground max-w-xl text-lg">
                            {album?.artist.name}
                        </p>
                        <p className="text-muted-foreground max-w-xl text-sm mb-6">
                            {album?.year} | {album?.genre.name}
                        </p>
                        <img 
                            src='/album_img_1.png' 
                            width='380' 
                            height='380'
                            className='rounded-full object-scale-down' 
                            alt='An image of vinyl disc' 
                        />
                    </div>
                    <div className="flex flex-col items-center bg-muted rounded-lg p-6">
                        <h1 className="mb-6 mt-2 text-balance text-2xl font-semibold md:text-3xl">Track listing</h1>
                        <TrackList tracks={album?.tracks} />
                    </div>
                    <div className="flex flex-col items-center bg-muted rounded-lg p-6">
                        <h1 className="mb-10 mt-2 text-balance text-2xl font-semibold md:text-3xl">Ratings</h1>
                        <div className="flex gap-20 mb-10">
                            <div className="flex flex-col items-center">
                                <h3>Total count</h3>
                                <p className="font-bold text-xl"
                                >{album?.getRatingStats.totalCount}</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <h3>Average rating</h3>
                                <p className="font-bold text-xl"
                                >{album?.getRatingStats.averageRating.toFixed(1)}</p>
                            </div>
                        </div>
                        {(!album && <p>Error getting ratings</p>)}

                        {album?.getRatingStats.totalCount === 0 && <p>No ratings added yet</p>}
                       
                        <StatChart stats={album?.getRatingStats} />
                    </div>
                <div className="flex flex-col items-center bg-muted rounded-lg p-6">
                    <h1 className="mt-2 text-balance text-2xl font-semibold md:text-3xl">Comments</h1>
                    <CommentSection reviews={album?.getReviewsWithContent}/>
                </div>
                </div>
            </div>
        </section>
    )
}

export default AlbumContainer