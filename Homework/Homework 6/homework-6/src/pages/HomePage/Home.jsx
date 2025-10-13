import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, incrementByValue} from "../../features/counter/counterSlice";
import {useState} from "react";

const CounterPage = () => {

    const counter = useSelector(state => state.counter);

    const [formInput, setFormInput] = useState("");

    //Використовується для виклику actions - зміна state - глобально
    const dispatch = useDispatch();

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
        </>
    )
}

export default CounterPage;