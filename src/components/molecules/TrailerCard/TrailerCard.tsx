import * as React from "react";
import { memo } from "react";
import { Movies, Trailer } from "../../../mock";
import { TrailerDescription } from "../../atoms/TrailerDescription";
import { TrailerTitle } from "../../atoms/TrailerTitle";
import { TrailerVideo } from "../../atoms/TrailerVideo";
import "./index.css";


export const TrailerCard = memo(() => {
    const trailerMovie = Movies[1];
    const trailerVideo = Trailer;
    return (
        <div className="trailer-card-wrapper">
            <TrailerTitle title={trailerMovie.title} />
            <TrailerVideo trailer={trailerVideo.trailer} />
            <TrailerDescription description={trailerVideo.description} />
        </div>
    )
});