import * as React from "react";
import { memo } from "react";
import "./index.css";


interface IFoldedTitle {
    title: string;
}

export const FoldedTitle = memo(({ title }: IFoldedTitle) => (
    <h2 className="folded-title">{title}</h2>
));
