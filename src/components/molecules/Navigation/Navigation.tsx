import * as React from "react";
import { memo } from "react";
import "./index.css";
import home from "../../../Image/nav/home.svg"
import list from "../../../Image/nav/list.svg"
import users from "../../../Image/nav/users.svg"
import message from "../../../Image/nav/message.svg"
import play from "../../../Image/nav/play.svg"
import diagram from "../../../Image/nav/diagram.svg"
import setting from "../../../Image/nav/setting.svg"
import darktheme from "../../../Image/nav/darktheme.svg"


export const Navigation = memo(() => {
    return (
        <div className="nav">
            <a><img src={home} /></a>
            <a><img src={list} /></a>
            <a><img src={users} /></a>
            <a><img src={message} /></a>
            <a><img src={play} /></a>
            <a><img src={diagram} /></a>
            <a><img src={setting} /></a>
            {/* <img src={darktheme} className="darktheme" /> */}
        </div>
    )
})