import './App.css';
import {useSelector} from "react-redux";
import Home from "./pages/HomePage/Home";
import {Routes, Route} from "react-router-dom";
import Header from "./common/Header/Header";
import Events from "./pages/EventsPage/Events";

function App() {

    const counter =  useSelector(state => state.counter);

    console.log('Global counter', counter);

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Header/>}>
                    <Route index element={<Home/>}/>
                    <Route path={"events"} element={<Events/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;