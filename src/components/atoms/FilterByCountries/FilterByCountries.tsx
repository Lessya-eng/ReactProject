import * as React from "react";
import { memo } from "react";
import { movie } from "../../../mock";
import "./index.css";



export const FilterByCountries = memo(() => {
    return (
        <select>
            <option></option>
            {movie
                .map((movie) => movie.country.split(",").reduce((item) => item))
                .filter((item, index, arr) => arr.indexOf(item) == index)
                .map((country) => (
                    <option>{country}</option>
                ))}
        </select>
    )
});