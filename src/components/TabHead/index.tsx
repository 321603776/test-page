import style from './style.module.css'
export default function (props: { count: number }) {
    return (
        <div className={style.tabHead}>
            <div>
                <span>Settings</span>
            </div>
            <div className={style.action}>
                <span>Posts</span>
                <span className={style.subscript}>{props.count}</span>
            </div>
        </div>
    )
}
