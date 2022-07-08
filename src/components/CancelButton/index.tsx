import style from './style.module.css'

export default function (props: { children: any, onClick: () => void }) {
    return (
        <button onClick={props.onClick} className={style.button}>
            <i className={style.icon}></i>
            <span>{props.children}</span>
        </button>
    )
}
