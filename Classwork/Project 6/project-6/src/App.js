import './App.css';
import {useSelector} from "react-redux";
import CounterPage from "./pages/CounterPage";
import HomePage from "./pages/HomePage";
import Header from "./Common/Header/Header";
import {Routes, Route} from "react-router-dom";

function App() {

    const counter =  useSelector(state => state.counter);

    console.log('Global counter', counter);

    return (
        <>
            <Routes>
                <Route path={'/'} element={<Header/>}>
                    <Route index element={<CounterPage/>}/>
                    <Route path={'homePage'} element={<HomePage/>}/>

                </Route>
            </Routes>
        </>
    );
}

export default App;
