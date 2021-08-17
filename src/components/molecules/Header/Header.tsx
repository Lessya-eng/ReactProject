import * as React from "react";
import { memo } from "react";
import "./index.css";
import { Title } from "../../atoms/Title";
import { Search } from "../../atoms/Search";
import { Filter } from "../../atoms/Filter";
import { Login } from "../../atoms/Login";


export const Header = memo(() => {
    return (
        <div className="header">
            <div className="left-header">
                <Title title={"Movie"} />
                <Search />
                <Filter />
            </div>
            <Login />
        </div>
    )
});