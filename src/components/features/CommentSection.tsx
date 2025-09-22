import { Gem } from 'lucide-react'
import { Star } from 'lucide-react'
import { type CommentSectionProps } from '@/types/album.types'

type ProfileProps = { username: string }

const UserProfile = ({ username }: ProfileProps) => {
    return(
        <div className="flex items-center m-4 gap-4">
            <span className="flex flex-col bg-accent size-8 items-center justify-center rounded-full">
                <Gem />
            </span>
            <p className="font-bold font-serif text-sm">{`@${username}`}</p>
        </div>
    )
}

const CommentSection = ({ reviews }: CommentSectionProps) => {

    if(reviews?.length === 0) return(
        <div className='mt-10'>
            <p className='text-muted-foreground'>No reviews with comments added yet</p>
        </div>
    )

    return(
        <section className="p-10 w-full rounded">
            <div className="container">
                <div className="flex flex-col">
                {reviews?.map((r, index) => (
                    <div key={index} className="bg-background mb-4 rounded-2xl">
                        <UserProfile username={r.user.name}/>
                        <div className="m-4">
                            {[...Array(r.rating)].map((_, index) => (
                                <Star 
                                    key={index} 
                                    className="inline text-chart-1 w-5 h-5 fill-accent-foreground"
                                 />
                            ))}
                        </div>
                        <div className="bg-background m-4 font-serif text-sm text-muted-foreground">
                            {r.content}
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}

export default CommentSection