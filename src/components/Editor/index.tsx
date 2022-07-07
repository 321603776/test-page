import { useRef, useReducer } from 'react'
import style from './style.module.css'
import EditorHead from "./EditorHead";
export default function () {
    const editor = useRef(null)
    return (
        <div ref={editor} className={style.editor}>
            <EditorHead editorDom={editor} />
            <div className={style.editorBody} contentEditable></div>
        </div>
    )
}
