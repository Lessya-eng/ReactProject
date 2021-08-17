import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IFoldedPoster {
    poster: string;
}

export const FoldedPoster = memo(({ poster }: IFoldedPoster) => {
    return (
        <div className="folded-poster">
            <img src={poster} />
        </div>
    )
});