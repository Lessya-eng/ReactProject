import * as React from "react";
import { memo } from "react";
import "./index.css";
import { Poster } from "../../atoms/Poster";
import { FilmTitle } from "../../atoms/FilmTitle";
import { Rating } from "../../atoms/Rating";
import { Description } from "../../atoms/Description";
import { FilmInfo } from "../../atoms/FilmInfo";
import { Interface } from "readline";
import { IMovie } from "../../../types"

export const MainCard = memo((movie: IMovie) => {
    return (
        <div className="main-card-wrapper">
            <div className="main-card">
                <div className="main-content">
                    <div className="left-content">
                        <Poster poster={movie.poster} />
                        <Rating imdbRating={movie.imdbRating} imdbVotes={movie.imdbVotes} />
                    </div>
                    <div className="right-content">
                        <FilmTitle title={movie.title} />
                        <FilmInfo {...movie} />
                    </div>
                </div>
                <div className="main-description">
                    <Description plot={movie.plot} />
                </div>
            </div>
        </div>
    )
});