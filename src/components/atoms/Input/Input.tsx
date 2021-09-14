import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IInput {
    searchValue: string;
    onChangeHandler: (text: string) => void;
    isValid: boolean;
    title: string

}

export const Input = memo(({ searchValue, onChangeHandler, isValid, title }: IInput) => {
    return (
        <div>
            <div><label className="title-for-login">{title}</label></div>
            <input style={{ border: !isValid ? "2px solid red" : "2px solid gray" }} className="input-for-login" value={searchValue} onChange={(e) => onChangeHandler(e.target.value)} />
        </div>
    )
});