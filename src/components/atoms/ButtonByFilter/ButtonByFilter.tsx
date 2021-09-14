import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IButtonByFilter {
    title: string;
    isActive: boolean;
    onClick: (field: string) => void;
    field: string;
}

export const ButtonByFilter = memo(({ title, isActive, onClick, field }: IButtonByFilter) => {
    return (
        <button className="button-by-filter"
            style={{ background: isActive ? " #7F7FD5" : "#EBEBEB" }}
            onClick={() => onClick(field)}>
            {title}
        </button>
    )
});