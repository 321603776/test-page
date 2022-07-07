import style from './style.module.css'
export default function (props: { children: any }) {
    return (
        <button className={style.button}>{ props.children }</button>
    )
}
