import './modern-normalize.css'
import './App.css'
import Bavigationbar from "./components/navigationbar";
import PageTitle from "./components/pageTitle";
import LinkProfile from "./components/linkProfile";
import Input from "./components/Input";
import TabHead from "./components/TabHead";
import Editor from "./components/Editor";
import Button from "./components/Button";
import EditPop from './components/EditPop';
import Post from "./components/Post";
import React, {useState} from "react";

export interface PostInterFace {
    title: string;
    body: string;
    time: Date
}

function App() {
    const [postData, setPostData]  = useState<PostInterFace[]>([])
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [editPostIndex, setEditPostIndex] = useState<number>()
    const [showEditPop, setShowEditPop] = useState(false)

    const posts = postData.map((post, index) => <Post post={post} onRemove={() => handleRemoveClick(index)} key={index} onEdit={() => handleEditClick(index)} />)

    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)
    }
    function onEditorChange(html: string) {
        setBody(html)
    }
    function verification(post: PostInterFace) {
        if (!post.title) {
            alert('post title is required')
            return false
        }
        if (!post.body) {
            alert('post content is required')
            return false
        }
        return true
    }
    function handleRemoveClick(index: number) {
        let newPostData = [...postData]
        newPostData.splice(index, 1)
        setPostData(newPostData)
    }
    function handleEditClick(index: number) {
        setEditPostIndex(index)
        setShowEditPop(true)
    }
    function handleSave(post: PostInterFace) {
        if (verification(post)) {
            let newPostData = [...postData]
            newPostData[editPostIndex!] = post
            setPostData(newPostData)
            setShowEditPop(false)
        }
    }
    function handlePostClick() {
        let post = {
            title,
            body,
            time: new Date()
        }
        if (verification(post)) {
            setPostData([...postData, post])
            setTitle('')
            setBody('')
        }
    }
    return (
        <div className="App">
            <Bavigationbar/>
            <PageTitle/>
            <LinkProfile />
            <TabHead count={postData.length} />
            <div style={{marginTop: '47px'}}>
                <Input value={title} placeholder='Input post title' onChange={onChange} />
            </div>
            <div style={{marginTop: '24px'}}>
                <Editor value={body} onChange={onEditorChange} />
            </div>
            <div style={{marginTop: '24px'}}>
                <Button onClick={handlePostClick}>Post</Button>
            </div>
            {showEditPop ? <EditPop post={postData[editPostIndex!]} onCancel={() => setShowEditPop(false)} onSave={handleSave} /> : ''}
            { posts }
        </div>
    )
}

export default App
