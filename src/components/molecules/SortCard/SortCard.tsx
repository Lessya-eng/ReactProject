import * as React from "react";
import { memo } from "react";
import "./index.css";
import { movie } from "../../../mock";
import { Poster } from "../../atoms/Poster";
import { FilmTitle } from "../../atoms/FilmTitle";
import { Rating } from "../../atoms/Rating";
import { Description } from "../../atoms/Description";
import { FilmInfo } from "../../atoms/FilmInfo";
import { Interface } from "readline";
import { IMovie } from "../../../types"
import { SortByRatingYear } from "../../atoms/SortByRatingYear";
import { SortCardBtn } from "../../atoms/SortCardBtn";
import { FilterByInputs } from "../../atoms/FilterByInputs";



export const SortCard = memo((/* movie: IMovie */) => {
    return (
        <div className="sort-card-wrapper">
            <SortByRatingYear />
            <FilterByInputs />
            <SortCardBtn />
        </div>
    )
});