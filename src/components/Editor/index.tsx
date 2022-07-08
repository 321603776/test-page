import React, {useRef, useReducer, useEffect, useMemo, memo} from 'react'
import style from './style.module.css'
import EditorHead from "./EditorHead";

interface EditorProps {
    value?: string;
    onChange?: Function
}

export default function (props: EditorProps) {
    const editor = useRef(null)
    const editorBody = useRef(null)

    useEffect(() => {
        if (editorBody.current != document.activeElement) {
            // @ts-ignore
            editorBody.current.innerHTML = props.value;
        }
    }, [props.value]);

    function handleInput(event: any) {
        props.onChange && props.onChange(event.target.innerHTML)
    }

    return (
        <div ref={editor} className={style.editor}>
            <EditorHead editorDom={editor}/>
            <div
                ref={editorBody}
                className={style.editorBody}
                contentEditable
                onInput={handleInput}>
            </div>
        </div>
    )
}
