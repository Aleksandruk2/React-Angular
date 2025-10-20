import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {incrementByValue} from "../../features/counter/counterSlice";

const HomePage = () => {

    const {value: counter} = useSelector(state => state.counter);

    const [formInput, setFormInput] = useState("");

    const dispatch = useDispatch();
  return (
      <>
        <h1>Головна сторінка</h1>
          {counter === 20 && <h2>Це трапилося</h2>}

          <h2>Лічильник: {counter}</h2>
          <input type={'number'} onChange={(e)=> setFormInput(e.target.value)}></input>
          <button onClick={() => dispatch(incrementByValue(Number(formInput)))}>
              Врубай
          </button>
      </>
  );
}
export default HomePage;