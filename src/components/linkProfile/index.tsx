import style from './style.module.css'
export default function () {
    return (
        <div className={style.linBox}>
            <div className={style.status}>
                <i className={style.checkIcon}></i>
                <img src="./img/checked_icon.png" alt=""/>
            </div>
            <div className={style.desc}>
                <div className={style.subtext}>link to your profile</div>
                <div className={style.text}>
                    <span>https://twitter.com/p/12345</span>
                    <i className={style.copyIcon}></i>
                </div>
            </div>
        </div>
    )
}
