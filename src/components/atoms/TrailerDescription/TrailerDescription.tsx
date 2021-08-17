import * as React from "react";
import { memo } from "react";
import "./index.css";

interface ITrailerDescription {
    description: string;
}

export const TrailerDescription = memo(({ description }: ITrailerDescription) => {
    return (
        <div className="trailer-description">
            <span>{description}</span>
        </div>
    )
});
