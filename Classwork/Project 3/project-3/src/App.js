import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import AboutPage from './pages/About/AboutPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import HomePage from './pages/Home/HomePage';
import NoMatchPage from './pages/NoMatch/NoMatchPage';
import Task1 from './pages/Task 1/Task1';

function App() {
    return (
        <>
            <Routes>
                //Загальні сторінки для користувача
                <Route path={"/"} element={<Layout/>}>
                    //index - почантковий маршрут, який іде зверху
                    <Route index element={<HomePage/>}></Route>
                    <Route path={"about"} element={<AboutPage/>}></Route>
                    <Route path={"dashboard"} element={<DashboardPage/>}></Route>
                    <Route path={"task1"} element={<Task1/>}></Route>
                    <Route path="*" element={<NoMatchPage/>}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
