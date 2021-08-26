import * as React from "react";
import { memo } from "react";
import "./index.css";
import { IMovie } from "../../../types";


export const FilterByInputs = memo(() => (
    <div className="filter-by-inputs-wrapper">
        <h4> Filer:</h4>
        <div className="filter-by-inputs-main-block">
            <div className="filter-by-inputs-first-block">
                <h6>Search in title and plot</h6>
                <input type="search"></input>
                <h6>Countries</h6>
                <select>
                    <option></option>
                    <option></option>
                </select>
            </div>
            <div>
                <h6>Years</h6>
                <div className="filter-by-inputs-year-block">
                    <p>From</p>
                    <input></input>
                    <p>To</p>
                    <input></input>
                </div>
                <h6>Rating</h6>
                <div className="filter-by-inputs-rating-block">
                    <p>From</p>
                    <input></input>
                    <p>To</p>
                    <input></input>
                </div>
                <div className="filter-by-inputs-genres-block">
                    <h6>Genres</h6>
                    <div className="input-by-genres">
                        <button>add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
));