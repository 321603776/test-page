import style from './style.module.css'

interface Props {
    placeholder?: string
}

export default function (props: Props) {
    return (
        <input
            className={style.cInput}
            type="text"
            placeholder={props.placeholder}/>
    )
}
