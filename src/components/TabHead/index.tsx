import style from './style.module.css'
export default function () {
    return (
        <div className={style.tabHead}>
            <div>
                <span>Settings</span>
            </div>
            <div className={style.action}>
                <span>Posts</span>
                <span className={style.subscript}>4</span>
            </div>
        </div>
    )
}
