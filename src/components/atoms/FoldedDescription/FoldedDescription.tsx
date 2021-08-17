import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IFoldedDescription {
    plot: string;
}

export const FoldedDescription = memo(({ plot }: IFoldedDescription) => {
    return (
        <div className="folded-description">
            <span>{plot}</span>
        </div>
    )
});
