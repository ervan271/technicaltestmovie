import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from "./components/NavigationBar";
import "./style/header.css";
import Content from "./components/Content";
import Watchlist from "./components/Watchlist";

function App() {
    return (
        <Router>
            <div className="myBg">
                <NavigationBar />
                <Content />
            </div>

            <div className="myBg">
                <Watchlist/>
            </div>

        </Router>
    );
}

export default App;
