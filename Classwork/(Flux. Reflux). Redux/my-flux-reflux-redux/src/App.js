import './App.css';
import TodoStore from "./TodoStore";
import {useEffect, useState} from "react";
import TodoActions from "./TodoActions";

//Наш store і наші дані
const getTodoState = () => {
    return {
        todos: TodoStore.getAll()
    }
}

const App = () => {

    //Ті дані, що у Store, вони зназодяться у list.
    const [list, setList] = useState(getTodoState().todos);
    //Збарігаємо нове значення.
    const [newName, setNewName] = useState("");

    const handleAddName = () => {
        if (newName.trim()) { //.trim() - забирaє пусті символи у рядку
            TodoActions.addTodo(newName);
            setNewName(""); //для очищення інпута.
        }
    }

    const handleRemoveName = (id) => {
        TodoActions.removeTodo(id);
    }

    useEffect(() => {
        const onChange = () => setList(getTodoState().todos);
        TodoStore.addChangeListener(onChange);
        return () => TodoStore.removeChangeListener(onChange);
    }, []);

    return (
        <>
            {/*<h1>Hello Flux</h1>*/}
            {/*<input*/}
            {/*    type="text"*/}
            {/*    value={newName}*/}
            {/*    onChange={(e) => setNewName(e.target.value)}*/}
            {/*    placeholder={"Вкажіть ім'я"}*/}
            {/*/>*/}

            {/*<button onClick={handleAddName}>Додати ім'я</button>*/}

            {/*<ul>*/}
            {/*    {list.map((item) => (*/}
            {/*        <li key={item.id}>*/}
            {/*            {item.text}*/}
            {/*            <button onClick={() => handleRemoveName(item.id)}>Remove</button>*/}
            {/*        </li>*/}
            {/*            ))}*/}
            {/*</ul>*/}

            <div className={'container'}>
                <div className={'cal mx-auto shadow border-2 border-secondary border mt-4 shadow fw-bold rounded p-2'}>
                    <div className={'d-flex justify-content-center'}>
                        <div className={'mini-box bg-dark rounded'}/>
                    </div>
                    <div>
                        <h2 className={'text-end bg-white rounded on-shadow px-2 p-1 fs-1'}>1 + 2</h2>
                    </div>
                    <div className={'p-2'}>
                        <div className={'row mb-1'}>
                            <button className={'col bg-danger p-2 m-1 rounded fw-bold fs-2 text-white'}>C</button>
                            <button className={'col bg-primary p-2 m-1 rounded fw-bold fs-2 text-white'}>x</button>
                        </div>
                        <div className={'row mb-1'}>
                            <button className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-dark'}>1</button>
                            <button className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-dark'}>2</button>
                            <button className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-dark'}>3</button>
                            <button className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-info'}>+</button>
                        </div>
                        <div className={'row mb-1'}>
                            <button className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-dark'}>4</button>
                            <button className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-dark'}>5</button>
                            <button className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-dark'}>6</button>
                            <button className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-info'}>-</button>
                        </div>
                        <div className={'row mb-1'}>
                            <button className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-dark'}>7</button>
                            <button className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-dark'}>8</button>
                            <button className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-dark'}>9</button>
                            <button className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-info'}>*</button>
                        </div>
                        <div className={'row mb-1'}>
                            <button className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-dark'}>0</button>
                            <button className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-secondary'}>.</button>
                            <button className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-success'}>=</button>
                            <button className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-info'}>/</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default App;
