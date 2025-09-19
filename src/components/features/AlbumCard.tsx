import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../ui/card"
import { type AlbumCardProps } from "@/types/album.types"
import { Link } from "react-router"

const AlbumCard = ({ album }: AlbumCardProps) => {
    return(
        <Link to={`/album/${album.slug}`}>
          <Card>
            <CardHeader>
              <CardTitle>{album.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {album.artist.name}
            </CardContent>
            <CardFooter>
              {album.year} | {album.genre.name}
            </CardFooter>
          </Card>
        
        </Link>
    )
}

export default AlbumCard