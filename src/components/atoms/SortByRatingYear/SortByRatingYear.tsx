import * as React from "react";
import { memo } from "react";
import "./index.css";


export const SortByRatingYear = memo(() => (
    <div className="sort-by-rating-year">
        <h4> Sort by:</h4>
        <button>Rating</button>
        <button>Year</button>
    </div>
));