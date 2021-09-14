import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IFilter {
    clickFilter: () => void;
}

export const Filter = memo(({ clickFilter }: IFilter) => {
    return (
        <button className={"btn-filter"} onClick={clickFilter} >
        </button >
    )
});