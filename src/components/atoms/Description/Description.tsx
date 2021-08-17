import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IDescription {
    plot: string;
}

export const Description = memo(({ plot }: IDescription) => {
    return (
        <div className="description">
            <span>{plot}</span>
        </div>
    )
});