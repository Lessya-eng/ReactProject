import * as React from "react";
import { memo } from "react";

// import { UserCard } from "../../atoms/UserCard";
import "./index.css";

interface IButton {
    children: string;
    isValid: boolean;
    onClick: () => void;
}

export const ButtonForInput = memo(({ children, isValid, onClick }: IButton) => {
    return (
        <div className="button-for-input">
            <button className={isValid ? "btn-common" : "btn-common _disable"} disabled={!isValid} onClick={onClick} >
                {children}
            </button>
        </div>
    );
});