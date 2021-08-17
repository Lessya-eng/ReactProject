import * as React from "react";
import { memo } from "react";
import "./index.css";
import { Movies } from "../../../mock"
import { Poster } from "../../atoms/Poster";
import { FilmTitle } from "../../atoms/FilmTitle";
import { Rating } from "../../atoms/Rating";
import { Description } from "../../atoms/Description";
import { FilmInfo } from "../../atoms/FilmInfo";


export const MainCard = memo(() => {
    const arrayFilm = Movies[1];
    return (
        <div className="main-card-wrapper">
            <div className="main-card">
                <div className="main-content">
                    <div className="left-content">
                        <Poster poster={arrayFilm.poster} />
                        <Rating imdbRating={arrayFilm.imdbRating} imdbVotes={arrayFilm.imdbVotes} />
                    </div>
                    <div className="right-content">
                        <FilmTitle title={arrayFilm.title} />
                        <FilmInfo year={arrayFilm.year} released={arrayFilm.released} runtime={arrayFilm.runtime}
                            boxOffice={arrayFilm.boxOffice} genre={arrayFilm.genre} country={arrayFilm.country}
                            production={arrayFilm.production} writer={arrayFilm.writer} director={arrayFilm.director}
                            actors={arrayFilm.actors} />
                    </div>
                </div>
                <div className="main-description">
                    <Description plot={arrayFilm.plot} />
                </div>
            </div>
        </div>
    )
});