import * as React from "react";
import { memo } from "react";
import { RatingBtn } from "../../atoms/RatingBtn";
import { RatingStars } from "../../atoms/RatingStars";
import { RatingTitle } from "../../atoms/RatingTitle";
import "./index.css";

export const RatingCard = memo(() => {
    return (
        <div className="rating-card">
            <RatingTitle />
            <RatingStars />
            <RatingBtn />
        </div>
    )
})