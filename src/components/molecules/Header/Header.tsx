import * as React from "react";
import { memo } from "react";
import "./index.css";
import { Title } from "../../atoms/Title";
import { Search } from "../../atoms/Search";
import { Filter } from "../../atoms/Filter";
import { Login } from "../../atoms/Login";

interface IInput {
    searchValue: string;
    onChangeHandler: (text: string) => void;
    onClick: () => void;
}

export const Header = memo(({ searchValue, onChangeHandler, onClick }: IInput) => {
    return (
        <div className="header">
            <div className="left-header">
                <Title title={"Movie"} />
                <Search
                    searchValue={searchValue}
                    onChangeHandler={onChangeHandler}
                    onClick={onClick} />
                <Filter />
            </div>
            <Login />
        </div>
    )
});