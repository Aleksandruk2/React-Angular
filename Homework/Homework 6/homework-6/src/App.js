import './App.css';
import {useSelector} from "react-redux";
import Home from "./pages/HomePage/Home";
import {Routes, Route} from "react-router-dom";
import Header from "./common/Header/Header";
import Events from "./pages/EventsPage/Events";

function App() {

    const counter =  useSelector(state => state.counter);
    const eventList =  useSelector(state => state.eventList);
    const list = [];

    // console.log('Global counter', counter);
    // console.log('Global event list', eventList);
    // console.log('Global test', list);

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