import * as React from "react";
import { memo } from "react";
import "./index.css";

interface ITrailerVideo {
    trailer: string;
}

export const TrailerVideo = memo(({ trailer }: ITrailerVideo) => {
    return (
        <div className="trailer-video">
            <iframe width="516" height="282" src={trailer} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
    )
})