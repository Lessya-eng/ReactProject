import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IFilter {
    clickFilterState: () => void;
}

export const Filter = memo(({ clickFilterState }: IFilter) => {
    return (
        <button className={"btn-filter"} onClick={clickFilterState} >
        </button >
    )
});