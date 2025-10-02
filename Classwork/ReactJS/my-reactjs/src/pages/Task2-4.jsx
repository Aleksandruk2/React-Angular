import {useState} from "react";
import TextFieldBase from "../Components/TextFieldBase";


const Task24 = () => {
    var [num, setNum] = useState(0);

    const handleClick = (n) => {
        setNum(Number(num) + n);
    }

    const handleClick2 = (n) => {
        setNum(Number(num) - n);
    }

    const onChangeHandler = (e) => {
        setNum(num = e.target.value);
    }

    return (
        <>
            <div className="container border p-2">
                <div className={"d-flex justify-content-center"}>
                    <button className={"btn btn-success col-1 me-2"} onClick={() => handleClick(1)}>+1</button>
                    <button className={"btn btn-success col-1 me-2"} onClick={() => handleClick(10)}>+10</button>
                    <button className={"btn btn-success col-1 me-2"} onClick={() => handleClick(25)}>+25</button>
                    <button className={"btn btn-success col-1 me-2"} onClick={() => handleClick(50)}>+50</button>
                    <button className={"btn btn-success col-1 me-2"} onClick={() => handleClick(100)}>+100</button>
                    <button className={"btn btn-danger col-1 me-2"} onClick={() => handleClick2(1)}>-1</button>
                    <button className={"btn btn-danger col-1 me-2"} onClick={() => handleClick2(10)}>-10</button>
                    <button className={"btn btn-danger col-1 me-2"} onClick={() => handleClick2(25)}>-25</button>
                    <button className={"btn btn-danger col-1 me-2"} onClick={() => handleClick2(50)}>-50</button>
                    <button className={"btn btn-danger col-1 me-2"} onClick={() => handleClick2(100)}>-100</button>
                </div>

                <TextFieldBase
                    field={"num"}
                    label={""}
                    type={"number"}
                    onChange={onChangeHandler}
                    value={num}
                />
            </div>

        </>
    )
}

export default Task24;