import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IFoldedYear {
    year: number;
}
export const FoldedYear = memo(({ year }: IFoldedYear) => {
    return (
        <div className="folded-year">
            {year}
        </div>
    )
});