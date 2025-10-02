import './App.css';
import {useState} from "react";
import HomePage from "./pages/HemoPage";
import BiographiaPage from "./pages/BiographiaPage";
import Task24 from "./pages/Task2-4";
import Header from "./Components/Header";
import RegisterPage from "./pages/RegisterPage";

//Кожен компонент може мати свій стан
//По суті ще як private у C#

function App() {
    //Стан може зберігати будь - що
    //Для створення стану
    //Counter - це стан, який зберігає ціле число
    //setCounter - метод для зміни  значення counter
    //Якщо значення counter буде змінюватися, тоді RENDER
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        console.log('clicked');
        setCounter(counter + 1);
    }
    console.log("Render App Component");
    return (
        <>
            <Header/>
            <div className={"container mt-5"}>
                <RegisterPage/>
            </div>

            <div className={"container mt-3"}>
                <Task24/>
            </div>
        </>
    );
}

export default App;
