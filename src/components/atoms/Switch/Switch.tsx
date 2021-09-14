import * as React from "react";
import { memo } from "react";
import "./index.css";

interface ISwitch {
    checked: boolean;
    id: number;
    onChange: (id: number, checked: boolean) => void;
    text: string;
}

export const Switch = memo(({ checked, id, text, onChange }: ISwitch) => (
    <div className="switch-wrapper">
        <p>{text}</p>
        <label className="switch-label">
            <input checked={checked} onChange={() => onChange(id, checked)} type="checkbox" />
            <span className="switch-slider" />
        </label>
    </div>
));