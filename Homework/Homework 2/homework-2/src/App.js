import React, { useState } from "react";
import "./App.css";

export default function App() {
    const [rotations, setRotations] = useState(0);
    const [answer, setAnswer] = useState("🎱");
    const answers = [
        "Так ✅",
        "Ні ❌",
        "Можливо 🤔",
        "Пізніше спитай 🕒",
        "Без сумніву ✔️",
        "Не дуже ймовірно ❌",
        "Так, але з умовами ⚠️",
        "Немає відповіді 😶",
        "Зараз невідомо 🔮",
        "Сконцентруйся і спитай знову 🧠",
        "Впевнено так 👍",
        "Сумніви присутні 😕",
        "Майбутнє туманне 🌫️",
        "Так, якщо постараєшся 💪",
        "Ні, спробуй пізніше ❌",
        "Все в твоїх руках 🤲",
        "Можливо, але не зараз ⏳",
        "Знаки вказують на так ✨",
        "Не залежить від тебе ❗",
        "Відповідь поки що секрет 🤫"
    ];


    const handleClick = () => {
        setRotations(Math.floor(Math.random() * (10 - 3 + 1) + 1));

        setTimeout(() => setAnswer(answers[Math.floor(Math.random() * answers.length)]), 2800);
        // Після завершення анімації обнулити (щоб можна було повторно крутити)
        setTimeout(() => setRotations(0), 4000);

    };

    return (
        <div className={"container text-center p-5 "}>
            <h1 className={"text-white"} >8-Ball</h1>
            <button className={"circleBtn border-3 border-white p-0 m-0 mx-auto"} onClick={() => handleClick()}>
                <div className={`${rotations > 0 ? "rotate" : ""} p-2 my-auto mx-auto circle align-content-center  fw-bold`}
                     style={{ "--rotations": rotations }}>
                    <p className={`${rotations > 0 ? "hideAnimation" : ""}`}>{answer}</p>
                </div>
            </button>



        </div>
    );
}
