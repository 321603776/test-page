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

function App() {
    return (
        <div className="App">
            <Bavigationbar/>
            <PageTitle/>
            <LinkProfile />
            <TabHead />
            <Input placeholder='Input post title' />
            <Editor />
            <Button>test</Button>
            <EditPop />
        </div>
    )
}

export default App
