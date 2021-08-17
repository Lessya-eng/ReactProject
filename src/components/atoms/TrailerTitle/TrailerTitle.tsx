import * as React from "react";
import { memo } from "react";
import "./index.css";

interface ITrailerTitle {
    title: string;
}

export const TrailerTitle = memo(({ title }: ITrailerTitle) => {
    return (
        <div className="trailer-title">
            <h1>Trailer: {title}</h1>
        </div>
    )
});