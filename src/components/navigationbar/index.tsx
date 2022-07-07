import style from './style.module.css'
export default function() {
    return (
        <button className={style.backBox}>
            <i className={style.icon}></i>
            <span className={style.backText}>Back</span>
        </button>
    )
}
