import React, {useState} from "react";

const Task1 = () => {

    const [bgColor, setBgColor] = useState("warning");
    const [btnGreenColor, setBtnGreenColor] = useState("success");
    const [btnBlueColor, setBtnBlueColor] = useState("info");
    const [btnRedColor, setBtnRedColor] = useState("danger");

    const btnGreen = () => {
        setBtnGreenColor("white fw-bold");
        setBtnBlueColor("info fw-bold");
        setBtnRedColor("danger fw-bold");
        setBgColor("success");
    }
    const btnBlue = () => {
        setBtnBlueColor("white fw-bold");
        setBtnGreenColor("success fw-bold");
        setBtnRedColor("danger fw-bold");
        setBgColor("info");
    }
    const btnRed = () => {
        setBtnRedColor("white fw-bold");
        setBtnGreenColor("success fw-bold");
        setBtnBlueColor("info fw-bold");
        setBgColor("danger");
    }

    return (
        <div className={`fullBox bg-${bgColor}`}>
            <div className={`conteiner d-flex justify-content-center `}>
                <button className={`btn bg-dark m-1 text-${btnGreenColor}`} onClick={btnGreen}>Зелений</button>
                <button className={`btn bg-dark m-1 text-${btnBlueColor}`} onClick={btnBlue}>Голубий</button>
                <button className={`btn bg-dark m-1 text-${btnRedColor}`} onClick={btnRed}>Червоний</button>
            </div>
        </div>
    )
}
export default Task1;