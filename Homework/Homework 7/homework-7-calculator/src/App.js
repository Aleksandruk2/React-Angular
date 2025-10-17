
import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [calViev, setCalViev] = useState("1 + 2")

    const handleClick = (e) => {
        if (!isNaN(e.target.textContent) || e.target.textContent === "."){
            // console.log("num");
            setCalViev(`${calViev}${e.target.textContent}`);
        }
        else {
            // console.log("sym");
            setCalViev(`${calViev} ${e.target.textContent} `);
        }

        // console.log("btn:",e.target.textContent);
    }

    const handleClearClick = () => {
        setCalViev("");
        // console.log("Текст було очищенно.");
    }

    const handleClearLastClick = () => {
        if(!isNaN(Number(calViev.charAt(calViev.length-1))) && calViev.charAt(calViev.length-1) !== " ") {
            setCalViev(calViev.slice(0, calViev.length-1));
        }
        else {
            setCalViev(calViev.slice(0, calViev.length-3));
        }
        // if(calViev.charAt(calViev.length-1) === " "){
        //     console.log('" " =', true);
        // }
        // else {
        //     console.log('" " =', false);
        // }

        // console.log(`${calViev} | len:`, calViev.length);
        // console.log(`${calViev} | len: "${calViev.charAt(calViev.length-1)}"`);
    }

    const handleResultClick = () => {
        // console.log("splited:", calViev.split(" "));
        let splited = calViev.split(" ");
        // console.log("sp len:", splited.length, "sp:", splited);
        if(splited.length % 2 !== 0 && splited.length > 1 && splited[2] !== "") {
            let result = splited[0];
            for (let i = 1; i < splited.length; i += 2) {
                result = calculate(result, splited[i + 1], splited[i]);
                // console.log("res:", result);
            }
            // console.log("final res:", result.toFixed(3));

            let factionDigit = 3;
            let splitedRes = String(result.toFixed(factionDigit)).split("");
            // console.log("spRes:", splitedRes.length);

            for (let i = splitedRes.length - 1; i > 1; i -= 1) {
                // console.log("split i:", splitedRes[i]);
                if (splitedRes[i] === "0") {
                    factionDigit -= 1;
                }
            }
            // console.log('res:',result.toFixed(factionDigit));
            setCalViev(result.toFixed(factionDigit));
        } else {
            setCalViev("0");
        }
    }

    const calculate = (num1, num2, sym) => {
        switch (sym) {
            case "+" :
                // console.log(`${num1} + ${num2} = ${Number(num1 + num2)}`);
                return Number(num1) +  Number(num2);
            case "-" :
                return Number(num1) -  Number(num2);
            case "/" :
                return Number(num1) /  Number(num2);
            case "*" :
                return Number(num1) *  Number(num2);

            default :
        }

    }

    useEffect(() => {
        if (calViev === "")
            setCalViev("0");

        if(calViev.length > 1 && calViev.charAt(0) === "0" && calViev.charAt(1) !== "."){
            if(calViev !== "0 * " && calViev !== '0 / '){
                setCalViev(calViev.slice(1,calViev.length));
            } else {
                setCalViev("0");
            }

        }

    }, [calViev]);


  return (
    <>
        <div className={'container'}>
            <div className={'col-8 col-md-6 col-lg-4 bg-warning mx-auto  shadow border-2 border-secondary border mt-4 shadow fw-bold rounded p-2'}>
                <div className={'d-flex justify-content-center'}>
                    <div className={'mini-box bg-dark rounded'}/>
                </div>
                <div>
                    <input className={'input-Hei text-end bg-white rounded shadow w-100 px-2 p-1 fs-1'} type="text" readOnly={true} value={calViev}/>
                </div>
                <div className={'p-2'}>
                    <div className={'row mb-1'}>
                        <button onClick={handleClearClick} className={'col bg-danger p-2 m-1 rounded fw-bold fs-2 text-white'}>C</button>
                        <button onClick={handleClearLastClick} className={'col bg-primary p-2 m-1 rounded fw-bold fs-2 text-white'}>←</button>
                    </div>
                    <div className={'row mb-1'}>
                        <button onClick={handleClick} className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-dark'}>1</button>
                        <button onClick={handleClick} className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-dark'}>2</button>
                        <button onClick={handleClick} className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-dark'}>3</button>
                        <button onClick={handleClick} className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-info'}>+</button>
                    </div>
                    <div className={'row mb-1'}>
                        <button onClick={handleClick} className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-dark'}>4</button>
                        <button onClick={handleClick} className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-dark'}>5</button>
                        <button onClick={handleClick} className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-dark'}>6</button>
                        <button onClick={handleClick} className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-info'}>-</button>
                    </div>
                    <div className={'row mb-1'}>
                        <button onClick={handleClick} className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-dark'}>7</button>
                        <button onClick={handleClick} className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-dark'}>8</button>
                        <button onClick={handleClick} className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-dark'}>9</button>
                        <button onClick={handleClick} className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-info'}>*</button>
                    </div>
                    <div className={'row mb-1'}>
                        <button onClick={handleClick} className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-dark'}>0</button>
                        <button onClick={handleClick} className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-secondary'}>.</button>
                        <button onClick={handleResultClick} className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-success'}>=</button>
                        <button onClick={handleClick} className={'col p-2 m-1 rounded fw-bold fs-2 text-white bg-info'}>/</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default App;
