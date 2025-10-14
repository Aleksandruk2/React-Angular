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
                <div className={'mx-auto border col-5 mt-4 shadow fw-bold rounded bg-secondary p-2'}>
                    <div className={'d-flex justify-content-center'}>
                        <div className={'mini-box bg-dark rounded'}/>
                    </div>
                    <div>
                        <h2 className={'text-end border bg-white rounded px-2'}>1 + 2</h2>
                    </div>
                    <div className={'p-2'}>
                        <div className={'row mb-1'}>
                            <button className={'col-5 bg-danger p-0 m-auto rounded'}>C</button>
                            <button className={'col-6 bg-warning p-0 m-auto rounded'}>x</button>
                        </div>
                        <div className={'row mb-1'}>
                            <button className={'col-3 my-btn-size p-0 m-auto rounded'}>1</button>
                            <button className={'col-3 my-btn-size p-0 m-auto rounded'}>2</button>
                            <button className={'col-3 my-btn-size p-0 m-auto rounded'}>3</button>
                            <button className={'col-3 my-btn-size p-0 m-auto rounded bg-info'}>+</button>
                        </div>
                        <div className={'row mb-1'}>
                            <button className={'col-3 my-btn-size p-0 m-auto rounded'}>4</button>
                            <button className={'col-3 my-btn-size p-0 m-auto rounded'}>5</button>
                            <button className={'col-3 my-btn-size p-0 m-auto rounded'}>6</button>
                            <button className={'col-3 my-btn-size p-0 m-auto rounded bg-info'}>-</button>
                        </div>
                        <div className={'row mb-1'}>
                            <button className={'col-3 my-btn-size p-0 m-auto rounded'}>7</button>
                            <button className={'col-3 my-btn-size p-0 m-auto rounded'}>8</button>
                            <button className={'col-3 my-btn-size p-0 m-auto rounded'}>9</button>
                            <button className={'col-3 my-btn-size p-0 m-auto rounded bg-info'}>*</button>
                        </div>
                        <div className={'row mb-1'}>
                            <button className={'col-3 my-btn-size p-0 m-auto rounded'}>0</button>
                            <button className={'col-3 my-btn-size p-0 m-auto rounded bg-primary'}>.</button>
                            <button className={'col-3 my-btn-size p-0 m-auto rounded bg-primary'}>=</button>
                            <button className={'col-3 my-btn-size p-0 m-auto rounded bg-info'}>/</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default App;
