import './modern-normalize.css'
import './App.css'
import Bavigationbar from "./components/navigationbar";
import PageTitle from "./components/pageTitle";
import LinkProfile from "./components/linkProfile";
import Input from "./components/Input";

function App() {
    return (
        <div className="App">
            <Bavigationbar/>
            <PageTitle/>
            <LinkProfile />
            <Input placeholder='Input post title' />

        </div>
    )
}

export default App
