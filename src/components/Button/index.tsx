import style from './style.module.css'
import React from "react";
export default function (props: { children: any, onClick?: React.MouseEventHandler<HTMLButtonElement> }) {
    return (
        <button onClick={props.onClick} className={style.button}>
            <i className={style.icon}></i>
            <span>{ props.children }</span>
        </button>
    )
}
