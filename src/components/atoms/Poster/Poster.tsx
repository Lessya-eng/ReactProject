import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IPoster {
    poster: string;
}

export const Poster = memo(({ poster }: IPoster) => {
    return (
        <div className="poster">
            <img src={poster} />
        </div>
    )
});