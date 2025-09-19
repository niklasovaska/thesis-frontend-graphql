import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card"
import { Skeleton } from "../ui/skeleton"

const LoadingAlbumCard = () => {
    return(
       <Card>
        <CardHeader>
            <CardTitle>
                <Skeleton className="h-4 w-[250px] bg-background" />
            </CardTitle>
        </CardHeader>
        <CardContent>
            <Skeleton className="h-4 w-[200px] bg-background" />
        </CardContent>
        <CardFooter>
            <Skeleton className="h-4 w-[50px] bg-background" /> <Skeleton className="h-4 w-[100px] bg-background" />
        </CardFooter>
    </Card> 
    )
}

const LoadingAlbumGrid = () => {
    return(
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 p-10 mt-6 w-full'>
            {Array.from({ length: 6 }).map((_, i) => (
                <LoadingAlbumCard key={i} />
            ))
            }
        </div>
    )
}

export default LoadingAlbumGrid