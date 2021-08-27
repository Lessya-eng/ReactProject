import * as React from "react";
import { memo } from "react";
import "./index.css";
import { SortByRatingYear } from "../../atoms/SortByRatingYear";
import { SortCardBtn } from "../../atoms/SortCardBtn";
import { FilterByInputs } from "../../atoms/FilterByInputs";



export const SortCard = memo(() => {
    return (
        <div className={"sort-card-wrapper"}>
            <SortByRatingYear />
            <FilterByInputs />
            <SortCardBtn />
        </div>
    )
});