import style from './style.module.css'
import Input from "../Input";
import Editor from "../Editor";
import Button from "../Button";
import CancelButton from "../CancelButton";
import {PostInterFace} from "../../App";
import React, {useState} from "react";

export default function (props: { post: PostInterFace, onSave: (post: PostInterFace) => void, onCancel: () => void }) {
    const [title, setTitle] = useState(props.post.title)
    const [body, setBody] = useState(props.post.body)

    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)
    }
    function onEditorChange(html: string) {
        setBody(html)
    }

    function handleSaveClick() {
        props.onSave({
            title,
            body,
            time: new Date()
        })
    }

    return (
        <div className={style.pop}>
            <div className={style.mask}></div>
            <div className={ style.editPop }>
                <div className='title'>Eidt Post</div>
                <div className='input'>
                    <Input value={title} onChange={onChange} placeholder='Nunc eu quam sit amet justo elementum mollis' />
                </div>
                <div className='edit'>
                    <Editor value={body} onChange={onEditorChange} />
                </div>
                <div className='buttons'>
                    <Button onClick={handleSaveClick}>Save</Button>
                    <CancelButton onClick={props.onCancel}>Cancel</CancelButton>
                </div>
            </div>
        </div>
    )
}
