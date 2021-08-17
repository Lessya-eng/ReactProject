import * as React from "react";
import { memo } from "react";
import "./index.css";
import { Movies } from "../../../mock"
import { FoldedPoster } from "../../atoms/FoldedPoster";
import { FoldedTitle } from "../../atoms/FoldedTitle";
import { FoldedYear } from "../../atoms/FoldedYear";
import { FoldedDescription } from "../../atoms/FoldedDescription";

export const FoldedCard = memo(() => {
    return (
        <div className="folded-card-wrapper">
            {Movies?.map((movie) => (
                <div className="folded-film-card">
                    <FoldedPoster poster={movie.poster} />
                    <FoldedTitle title={movie.title} />
                    <FoldedYear year={movie.year} />
                    <FoldedDescription plot={movie.plot} />
                </div>
            ))}
        </div>
    )
});