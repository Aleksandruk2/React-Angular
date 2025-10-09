import {Routes, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Layout from "./components/Layout/Layout";
import Task1Page from "./pages/Task1Page";
import Task2Page from "./pages/Task2Page";
import Task3Page from "./pages/Task3Page";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<Task1Page/>}></Route>
                    <Route path={"task2"} element={<Task2Page/>}></Route>
                    <Route path={"task3"} element={<Task3Page/>}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
