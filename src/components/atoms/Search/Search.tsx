import * as React from "react";
import { memo } from "react";
import "./index.css";

export const Search = memo(() => {
    return (
        <input className="input" type="search" placeholder="Search" />
    )
});