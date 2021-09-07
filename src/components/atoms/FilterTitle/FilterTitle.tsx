import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IFilterTitle {
    filterTitle: string;
}

export const FilterTitle = memo(({ filterTitle }: IFilterTitle) => (
    <h2 className="filter-title">{filterTitle}</h2>
));