import { Gem } from 'lucide-react'
import { Star } from 'lucide-react'
import { type CommentSectionProps } from '@/types/album.types'

type ProfileProps = { username: string }

// const reviews = [
//     {
//         content: 'An utterly fantastic album that redefined the genre. A must-listen for everyone! The production quality is top-notch, and the lyrics are deeply moving. Five stars without a doubt! Loved every track, especially the hidden gems that showcase the artist\'s versatility.',
//         createdAt: '2025-09-19T15:42:11.988Z',
//         rating: 5,
//         user: {
//             name: 'echoStream77'
//         }
//     },
//     {
//         content: 'Brilliant!',
//         createdAt: '2025-09-19T15:42:11.988Z',
//         rating: 4,
//         user: {
//             name: 'lunarByteX'
//         }
//     },
//     {
//         content: 'Hello world',
//         createdAt: '2025-09-19T15:42:11.988Z',
//         rating: 4,
//         user: {
//             name: 'crypticOwl9'
//         }
//     },
// ]

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
    return(
        <section className="p-10 w-full rounded">
            <div className="container">
                <div className="flex flex-col">
                {reviews?.map((r, index) => (
                    <div key={index} className="bg-background mb-4 rounded-2xl">
                        <UserProfile username={r.user.name}/>
                        <div className="m-4">
                            {[...Array(r.rating)].map((_, index) => (
                                <Star key={index} className="inline text-accent w-6 h-6" />
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