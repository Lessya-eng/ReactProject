import * as React from "react";
import { memo } from "react";
import { movie, trailer } from "../../../mock";
import { TrailerDescription } from "../../atoms/TrailerDescription";
import { TrailerTitle } from "../../atoms/TrailerTitle";
import { TrailerVideo } from "../../atoms/TrailerVideo";
import "./index.css";
import { IMovie, ITrailer } from "../../../types";

interface ITrailerCard {
    movie: IMovie
    trailer: ITrailer
}

export const TrailerCard = memo(({ movie, trailer }: ITrailerCard) => {
    return (
        <div className="trailer-card-wrapper">
            <TrailerTitle {...movie} />
            <TrailerVideo {...trailer} />
            <TrailerDescription {...trailer} />
        </div>
    )
});