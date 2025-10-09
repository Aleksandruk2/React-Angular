import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import MyInfo from "./Components/MyInfo";

function App() {
    const [counter, setCounter] = useState(0);

    const addCounter = () => {
        setCounter(counter + 1);
    }

    const removeCounter = () => {
        setCounter(counter - 1);
    }

    const [search, setSearch] = useState({
        firstName: "",
        lastName: "",
        email: ""
    }); //вказує параметри пошуку


    //У Effect вказуєсться параметр deps -  від чого заллежить наш useEffect
    //Якщо в deps - пустий, це відслідкувати 1 рендер
    useEffect(() => {
        console.log("UseEffect working request Server DATA", counter);
    }, []);

    //Слідкує за counter - змнною і буде спрацьовувати при будь-якому зміненні
    useEffect(() => {
        console.log("UseEffect working counter", counter);
        if(counter === 10)
            alert("BOOM!");
    }, [counter]);

    //Цей useEffect - працює якщо змінюємо search
    useEffect(() => {
            console.log("Search data server", search);
    }, [{search}]);

    console.log("Render app", counter);

    const handleChangeSearch = (e) => {
        setSearch({...search, [e.target.name]: e.target.value});
    }

  return (
    <>
        {/*<h1>{counter}</h1>*/}

        {/*<div>*/}
        {/*    <label for="firstName">Ім'я</label>*/}
        {/*    <input type="text" name={'firstName'} onChange={handleChangeSearch}/>*/}
        {/*    <label for="lastName">Прізвище</label>*/}
        {/*    <input type="text" name={'lastName'} onChange={handleChangeSearch}/>*/}
        {/*</div>*/}

        {/*<button onClick={addCounter}>*/}
        {/*    +1*/}
        {/*</button>*/}

        {/*<button onClick={removeCounter}>*/}
        {/*    -1*/}
        {/*</button>*/}

        <MyInfo
            email={"myEmail@gmail.com"}
            city={"Lutsk"}
            skill={"React, C#, HTML"}
            phone={"+38097843534"}
            fullName={"Ivan Petrovych"}
            workExperience={"Working in company Cisco"}
            photoPath={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhh6-W7hHU8x3nqVKbYuOX2xGz64m3p5jUWA&s"}
        />
    </>
  );
}

export default App;
