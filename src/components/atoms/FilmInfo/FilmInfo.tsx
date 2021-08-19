import * as React from "react";
import { memo } from "react";
import { IMovie } from "../../../types";
import "./index.css";

export const FilmInfo = memo(({ year, released, runtime, boxOffice, genre, country, production, writer, director, actors }: IMovie) => {
    return (
        <dl className="film-info">
            <dt>Year</dt>
            <dd>{year}</dd>
            <dt>Released</dt>
            <dd>{released}</dd>
            <dt>Runtime</dt>
            <dd>{runtime}</dd>
            <dt>BoxOffice</dt>
            <dd>{boxOffice}</dd>
            <dt>Genre</dt>
            <dd>{genre.join(', ')}</dd>
            <dt>Country</dt>
            <dd>{country}</dd>
            <dt>Production</dt>
            <dd>{production}</dd>
            <dt>Writer</dt>
            <dd>{writer}</dd>
            <dt>Director</dt>
            <dd>{director}</dd>
            <dt>Actors</dt>
            <dd>{actors.toString()}</dd>
        </dl>
    )
});