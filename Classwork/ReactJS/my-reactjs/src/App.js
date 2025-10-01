import './App.css';
import {useState} from "react";
import HomePage from "./pages/HemoPage";
import BiographiaPage from "./pages/BiographiaPage";
import Task2 from "./pages/Task2";

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
            <h1>Привіт React {counter}</h1>
            { counter >= 10 &&
                <>
                    <h2 style={{color: "red"}}>Бомба пішла в роботу</h2>
                </>
            }
            <button onClick={handleClick}>Нажми мене {counter}</button>

            <HomePage/>

            <BiographiaPage/>

            <Task2/>
        </>
    );
}

export default App;
