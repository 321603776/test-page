import style from './style.module.css'
import Input from "../Input";
import Editor from "../Editor";
import Button from "../Button";

export default function () {
    return (
        <div className={ style.editPop }>
            <div className='title'>Eidt Post</div>
            <div className='input'>
                <Input placeholder='Nunc eu quam sit amet justo elementum mollis' />
            </div>
            <div className='edit'>
                <Editor />
            </div>
            <div className='buttons'>
                <Button>Save</Button>
            </div>
        </div>
    )
}
