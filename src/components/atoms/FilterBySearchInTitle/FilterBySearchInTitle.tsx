import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IFilterBySearchInTitle {
    searchValue: string;
    onChangeHandler: (text: string) => void;
}

export const FilterBySearchInTitle = memo(({ searchValue, onChangeHandler }: IFilterBySearchInTitle) => (
    <input type="search" placeholder="Search" value={searchValue} onChange={(e) => onChangeHandler(e.target.value)} />
));
