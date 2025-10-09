import './App.css';
import {useState} from "react";
import Home from "./pages/Home";

//Код який використовує класи, компоненти і їх події - застарівший код.
//Функції та Функцональні компоненти
const App = () => {

    //Може зберігати інформацію - Він зберігає у собі інформацію
    //State - стан самого компонента
    //Для того, щоб відобразити інформацію, яка є в компоненті,
    //потрібно виконати Render - відмалювати.
    //При змінні динах у State - виконується RENDER
    //Для створення State - хук useState
    //myInt - це число, яке зберігоється у State
    //setMyInt - цу функція яка змінює число myInt - виконуємо RENDER
    //useState - хук, який зберігає на початку myInt

    const [myInt, setMyInt] = useState(0);

    console.log("RENDER COMPONENT") //Викдикає коли компонент робить рендер
    const handleClickBtn = () => {
        setMyInt(myInt + 1); //Збільшив значення на 1.
    }

    return (
        <>
            <div className={"container"}>
                <h1 className={"text-center"}>Привіт команда</h1>
                <h2>Hello my friends {myInt}</h2>

                <button
                    className={"btn btn-danger"}
                    onClick={handleClickBtn}
                >Нажми мене</button>

                <Home></Home>
            </div>
        </>
    );
}

export default App;
