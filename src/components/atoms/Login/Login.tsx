import * as React from "react";
import { memo } from "react";
import "./index.css";
import user from "../../../Image/user.svg"

export const Login = memo(() => {
    return (
        <div className="right-header">
            <span>Anya</span>
            <img src={user} />
            <button className="btn-login"></button>
        </div>
    )
});