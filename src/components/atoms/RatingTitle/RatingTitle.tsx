import * as React from "react";
import { memo } from "react";
import "./index.css";

export const RatingTitle = memo(() => {
    return (
        <div className="rating-title-wrapper">
            <h1>Add rating</h1>
        </div>
    )
});