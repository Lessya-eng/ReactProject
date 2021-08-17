import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IRating {
    imdbVotes: number;
    imdbRating: number;
}

export const Rating = memo(({ imdbRating, imdbVotes }: IRating) => {
    return (
        <div className="rating-wrapper">
            <div className="rating">
                <span className="rating-title">Rating</span>
                <span className="rating-imdb">{imdbRating}</span>
            </div>
            <div className="rating-voted">
                <span className="voted-imdb">{imdbVotes} voted</span>
            </div>
        </div>
    )
})