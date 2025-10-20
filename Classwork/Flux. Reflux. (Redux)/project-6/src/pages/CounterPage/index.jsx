import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../../features/counter/counterSlice";

const CounterPage = () => {

    const counter = useSelector(state => state.counter);

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
        </>
    )
}

export default CounterPage;