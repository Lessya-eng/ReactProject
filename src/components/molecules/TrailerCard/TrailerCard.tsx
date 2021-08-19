import * as React from "react";
import { memo } from "react";
import { movie, trailer } from "../../../mock";
import { TrailerDescription } from "../../atoms/TrailerDescription";
import { TrailerTitle } from "../../atoms/TrailerTitle";
import { TrailerVideo } from "../../atoms/TrailerVideo";
import "./index.css";
import { IMovie } from "../../../types";


export const TrailerCard = memo((movie: IMovie) => {
    const trailerVideo = trailer;
    return (
        <div className="trailer-card-wrapper">
            <TrailerTitle title={movie.title} />
            <TrailerVideo trailer={trailerVideo.trailer} />
            <TrailerDescription description={trailerVideo.description} />
        </div>
    )
});