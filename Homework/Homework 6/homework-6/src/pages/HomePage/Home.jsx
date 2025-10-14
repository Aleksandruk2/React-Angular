import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, incrementByValue} from "../../features/counter/counterSlice";
import {useState} from "react";
import {add} from "../../features/eventList/eventListSlice";

const CounterPage = () => {

    const counter = useSelector(state => state.counter);

    const envetList = useSelector(state => state.eventList);


    const [formInput, setFormInput] = useState("");

    //Використовується для виклику actions - зміна state - глобально
    const dispatch = useDispatch();

    const [data, setData] = useState(2);

    const handleClick = () => {
        console.log("e list",data, envetList);
        dispatch(add(data));
    }

    return (
        <>
            <h1>Counter Hello {counter.value}</h1>

            <button onClick={() => {dispatch(increment())}} >
                Збільшення
            </button>

            <button onClick={() => {dispatch(decrement())}} >
                Зменьшення
            </button>

            {counter === 20 && <h2>Це трапилося</h2>}

            <input type={'number'} onChange={(e)=> setFormInput(e.target.value)}></input>
            <button onClick={() => dispatch(incrementByValue(Number(formInput)))}>
                Врубай
            </button>

            <div className={'container'}>
                <h4>Event List: {envetList}</h4>
                <button className={'btn btn-info'} onClick={() => handleClick()}>Add</button>
            </div>
        </>
    )
}

export default CounterPage;