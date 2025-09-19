import React from "react"
import type { TrackListProps } from "@/types/album.types"
import { Separator } from "../ui/separator"

const TrackList = ({ tracks }: TrackListProps) => {
    return(
        <section className="py-6">
            <div className="container">
                <div className="flex flex-col">
                {tracks?.map((track, index) => (
                    <React.Fragment key={index}>
                        <div className="grid items-center gap-2 px-2 py-2 md:grid-cols-4">
                            <div className="flex items-center gap-2">
                                <span className="flex h-6 w-6 shrink-0 text-sm items-center justify-center rounded-md bg-muted">
                                    {track.trackNumber}
                                </span>
                            </div>
                            <p className="text-sm md:col-span-2">
                            {track.title}
                            </p>
                                
                        </div>
                        <Separator />
                    </React.Fragment>
                ))}
                </div>
            </div>
        </section>
    )
}

export default TrackList