import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IButtonShowFilm {
    title: string;
    isActive: boolean;
    onClickNextFilm?: () => void;

}

export const ButtonShowFilm = memo(
    ({ title, isActive, onClickNextFilm }: IButtonShowFilm) => (
        <button className={isActive ? "button-show-film active" : "button-show-film"} onClick={onClickNextFilm}>
            {title}
        </button >
    ));