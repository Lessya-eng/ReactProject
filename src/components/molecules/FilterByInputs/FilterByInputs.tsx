import * as React from "react";
import { memo } from "react";
import "./index.css";
import { IMovie } from "../../../types";
import { FilmTitle } from "../../atoms/FilmTitle";
import { FilterTitle } from "../../atoms/FilterTitle";
import { FilterByCountries } from "../../atoms/FilterByCountries";
import { FilterBySearchInTitle } from "../../atoms/FilterBySearchInTitle";

interface IFilterBySearchInTitle {
    searchValue: string;
    onChangeHandler: (text: string) => void;
}

export const FilterByInputs = memo(({ searchValue, onChangeHandler }: IFilterBySearchInTitle) => (
    <div className="filter-by-inputs-wrapper">
        <div className="filter-by-inputs-main-block">
            <div className="filter-by-inputs-first-block">
                <FilterTitle filterTitle={"Search in title and plot"} />
                <FilterBySearchInTitle
                    searchValue={searchValue}
                    onChangeHandler={onChangeHandler} />
                <FilterTitle filterTitle={"Countries"} />
                <FilterByCountries />
            </div>
            <div>
                <FilterTitle filterTitle={"Years"} />
                <div className="filter-by-inputs-year-block">
                    <p>From</p>
                    <input></input>
                    <p>To</p>
                    <input></input>
                </div>
                <FilterTitle filterTitle={"Rating"} />
                <div className="filter-by-inputs-rating-block">
                    <p>From</p>
                    <input></input>
                    <p>To</p>
                    <input></input>
                </div>
                <div className="filter-by-inputs-genres-block">
                    <FilterTitle filterTitle={"Genres"} />
                    <div className="input-by-genres">
                        <button>add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
));