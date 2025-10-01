import {useState} from "react";

const Home = () => {
    const onClickBtn = (e) => {
        e.preventDefault();
        setHomeNumber(homeNumber + 1);
        console.log("Нажав на Home btn.");
    }
    console.log("RENDER HOME PAGE");

    const [homeNumber, setHomeNumber] = useState(0);
    return (
        <>
            <h1>Home Page {homeNumber}</h1>
            <button className="btn btn-success" onClick={onClickBtn}>Це Home BTN</button>
        </>
    );
}
export default Home;