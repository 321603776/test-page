import style from './style.module.css';
import type { PostInterFace } from '../../App'
import React from "react";

export default function (props: { post: PostInterFace, onRemove: () => void, onEdit: () => void }) {
    return (
        <div className={style.post}>
            <div className={'postHead'}>
                <div className={'title'}>{props.post.title}</div>
                <div className={'rightBox'}>
                    <div onClick={props.onEdit} className={'btn edit'}>
                        <i className={style.editIcon}></i>
                        <span>Eidt</span>
                    </div>
                    <div onClick={props.onRemove} className={'btn delete'}>
                        <i className={style.deleteIcon}></i>
                    </div>
                </div>
            </div>
            <div className={'mainBody'}>
                <div dangerouslySetInnerHTML={{__html: props.post.body}}/>
            </div>
            <div className={'time'}>{props.post.time.toString().split(' ').splice(1, 4).join(' ')}</div>
        </div>
    )
}
