import {useState} from "react";

const Task2 = () => {
    const [num, setNum] = useState(0);
    const handleClick = () => {
        setNum(num + 1);
    }
    return (
        <>
            <button className={"btn btn-info"} onClick={handleClick}>Збільшити: {num}</button>
        </>
    )
}

export default Task2;