import * as React from "react";
import { memo } from "react";
import "./index.css";

export const RatingBtn = memo(() => {
    return (
        <div className="rating-btn">
            <button type="submit">Add rating</button>
        </div>
    )
});