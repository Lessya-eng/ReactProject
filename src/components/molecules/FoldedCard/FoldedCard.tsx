import * as React from "react";
import { memo } from "react";
import "./index.css";
import { IMovie } from "../../../types"
import { FoldedPoster } from "../../atoms/FoldedPoster";
import { FoldedTitle } from "../../atoms/FoldedTitle";
import { FoldedYear } from "../../atoms/FoldedYear";
import { FoldedDescription } from "../../atoms/FoldedDescription";
interface IFoldedCard {
    movie: IMovie[]
}

export const FoldedCard = memo(({ movie }: IFoldedCard) => {
    return (
        <div className="folded-card-wrapper">
            {movie?.map((movie) => (
                <div className="folded-film-card" >
                    <FoldedPoster poster={movie.poster} />
                    <FoldedTitle title={movie.title} />
                    <FoldedYear year={movie.year} />
                    <FoldedDescription plot={movie.plot} />
                </div>
            ))}
        </div>
    )
});

