import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IFilmTitle {
    title: string;
}

export const FilmTitle = memo(({ title }: IFilmTitle) => {
    return (
        <div className="film-title">
            <h1>{title}</h1>
        </div>
    )
});