import style from './style.module.css'
import fullScreenIcon from './img/full-screen_icon.png'
import codeIcon from './img/code_icon.png'
import boldIcon from './img/bold_icon.png'
import italicIcon from './img/italic_icon.png'
import underscoreIcon from './img/underscore_icon.png'
import notIcon from './img/not_icon.png'
import alignLeftIcon from './img/align-left_icon.png'
import centerIcon from './img/center_icon.png'
import orderlyIcon from './img/orderly_icon.png'
import disorderIcon from './img/disorder_icon.png'
import annexIcon from './img/annex_icon.png'
import imageIcon from './img/image_icon.png'

export default function ({editorDom}: {editorDom: any}) {

    function handleFullScreenClick() {
        handleFullScreen(editorDom.current)
    }

    return (
        <div className={style.header}>
            <div className={style.group}>
                <button onClick={handleFullScreenClick}>
                    <img src={fullScreenIcon} alt=''/>
                </button>
                <button>
                    <img src={codeIcon} alt=''/>
                </button>
            </div>
            <div className={style.group}>
                <button onClick={() => document.execCommand('bold')}>
                    <img src={boldIcon} alt=''/>
                </button>
                <button onClick={() => document.execCommand('italic')}>
                    <img src={italicIcon} alt=''/>
                </button>
                <button onClick={() => document.execCommand('underline')}>
                    <img src={underscoreIcon} alt=''/>
                </button>
                <button>
                    <img src={notIcon} alt=''/>
                </button>
            </div>
            <div className={style.group}>
                <button onClick={() => document.execCommand('justifyLeft')}>
                    <img src={alignLeftIcon} alt=''/>
                </button>
                <button onClick={() => document.execCommand('justifyCenter')}>
                    <img src={centerIcon} alt=''/>
                </button>
                <button onClick={() => document.execCommand('insertOrderedList')}>
                    <img src={orderlyIcon} alt=''/>
                </button>
                <button onClick={() => document.execCommand('insertUnorderedList')}>
                    <img src={disorderIcon} alt=''/>
                </button>
            </div>
            <div className={style.group}>
                <button>
                    <img src={annexIcon} alt=''/>
                </button>
                <button>
                    <img src={imageIcon} alt=''/>
                </button>
            </div>
        </div>
    )
}


function handleFullScreen(dom: any) {
    if (isFUllScreenEnabled()) {
        if (hasFullScreenElement()) {
            exitFullScreen();
        } else {
            setFullScreen(dom);
        }
    } else {
        console.log('此浏览器不支持全屏');
    }
}

function isFUllScreenEnabled() {
    // @ts-ignore
    return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
}
function hasFullScreenElement() {
    // @ts-ignore
    return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
}
function setFullScreen(target: any) {
    if (target.requestFullscreen) {
        target.requestFullscreen();
    }
    if (target.webkitRequestFullscreen) {
        target.webkitRequestFullscreen();
    }
    if (target.mozRequestFullScreen) {
        target.mozRequestFullScreen();
    }
    if (target.msRequestFullscreen) {
        target.msRequestFullscreen();
    }
}
function exitFullScreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
    // @ts-ignore
    if (document.webkitExitFullscreen) {
        // @ts-ignore
        document.webkitExitFullscreen();
    }
    // @ts-ignore
    if (document.mozCancelFullScreen) {
        // @ts-ignore
        document.mozCancelFullScreen();
    }
    // @ts-ignore
    if (document.msExitFullscreen) {
        // @ts-ignore
        document.msExitFullscreen();
    }
}
