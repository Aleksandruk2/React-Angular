
//У файлі jsx - знаходиться xml - розмітка.
//Це для програміста, щоб він знав, що там є html.

//Вхідні параметри у функції називаються Props
import {useState} from "react";

const HomePage = () => {
    const [name, setName] = useState("");
    const handleClick = () => {
        setName("Вова");
    }
  return (
      <>
          <h1>Головна сторінка</h1>
          { name &&
              <h2>Привіт козак <span style={{color: "red", fontSize: "32px"}}>{name}</span>!</h2>
          }
          <button onClick={handleClick}>Вказати name</button>
      </>
  )
}

export default HomePage;