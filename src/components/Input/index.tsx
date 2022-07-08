import style from './style.module.css'
import React from "react";

interface Props {
    placeholder?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement>,
    value?: string
}

export default function (props: Props) {
    return (
        <input
            value={props.value}
            onChange={props.onChange}
            className={style.cInput}
            type="text"
            placeholder={props.placeholder}/>
    )
}
