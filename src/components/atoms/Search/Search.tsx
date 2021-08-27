import * as React from "react";
import { memo } from "react";
import "./index.css";


interface IInput {
    searchValue: string;
    onChangeHandler: (text: string) => void;
    onClick: () => void;
}

export const Search = memo(({ searchValue, onChangeHandler, onClick }: IInput) => (
    <div className="header-input-btn-wrapper">
        <input className="input" type="search" placeholder="Search" value={searchValue} onChange={(e) => onChangeHandler(e.target.value)} />
        <button onClick={onClick}>Search</button>
    </div>
));