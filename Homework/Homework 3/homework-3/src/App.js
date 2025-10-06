import FavoriteMovie from "./components/FavoriteMovie";
import PersonalPage from "./components/PersonalPage";
import LocalTime from "./components/LocalTime";
import PetInfo from "./components/PetInfo";
import './App.css';
import {useEffect, useId, useState} from "react";

function App() {
    const movieData = [
        {
            title: "Вбивця Демонів: Замок Нескінченності",
            produser: "Харуо Сотодзакі",
            yearOfRelease: "11.09.2025",
            studio: "PREMIER CITY",
            posterPath: "https://api.vkino.com.ua/posters/46/4618e2304c47e540b5aa7ac8dabffd5292b60d2c.jpg"
        },
        {
            title: "Аватар: Шлях води",
            produser: "Джеймс Кемерон",
            yearOfRelease: "02.10.2025",
            studio: "PREMIER CITY",
            posterPath: "https://api.vkino.com.ua/posters/99/999dfb39c8dd927f03ac3bc0143ac3825e4d83fe.jpg"
        },
        {
            title: "Одна битва за іншою",
            produser: "Пол Томас Андерсон",
            yearOfRelease: "25.09.2025",
            studio: "PREMIER CITY",
            posterPath: "https://api.vkino.com.ua/posters/bc/bca6e4f0a0f8995287931437259df20cf08ad24a.jpg"
        },
    ];

    const personalPage = {
        fullName: "Іван Петренко",
        phone: "+380 (67) 123-45-67",
        email: "ivan.petrenko@example.com",
        city: "Київ",
        workExperience: "3 роки досвіду роботи у барбершопі",
        skill: "Класичні стрижки, фейд, моделювання бороди, гаряче гоління",
        photoPath: "https://muzhiki.pro/wp-content/uploads/2022/12/barber-income.png"
    };

    const now = new Date();
    const [time, setTime] = useState(now.toLocaleTimeString());

    const petInfo = {
        name: "Луна",
        kind: "Кішка",
        breed: "британська короткошерста",
        age: "5",
        gender: "самка",
        photoPath: "data:image/webp;base64,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"
    }

    return (
        <>
            <div className={'bg-warning p-2'}>
                <div className={'mt-4 text-center d-flex flex-wrap box justify-content-center'}>
                    <FavoriteMovie
                        title={movieData[0].title}
                        produser={movieData[0].produser}
                        yearOfRelease={movieData[0].yearOfRelease}
                        studio={movieData[0].studio}
                        posterPath={movieData[0].posterPath}
                    ></FavoriteMovie>
                    <FavoriteMovie
                        title={movieData[1].title}
                        produser={movieData[1].produser}
                        yearOfRelease={movieData[1].yearOfRelease}
                        studio={movieData[1].studio}
                        posterPath={movieData[1].posterPath}
                    ></FavoriteMovie>
                    <FavoriteMovie
                        title={movieData[2].title}
                        produser={movieData[2].produser}
                        yearOfRelease={movieData[2].yearOfRelease}
                        studio={movieData[2].studio}
                        posterPath={movieData[2].posterPath}
                    ></FavoriteMovie>
                </div>
            </div>
            <div className={'bg-dark p-3'}>
                <PersonalPage
                    fullName={personalPage.fullName}
                    phone={personalPage.phone}
                    email={personalPage.email}
                    city={personalPage.city}
                    workExperience={personalPage.workExperience}
                    skill={personalPage.skill}
                    photoPath={personalPage.photoPath}
                />
            </div>
            <div className={'bg-dark p-3'}>
                <LocalTime time={time} />
            </div>
            <div className={'bg-dark p-4'}>
                <PetInfo
                    name={petInfo.name}
                    kind={petInfo.kind}
                    age={petInfo.age}
                    breed={petInfo.breed}
                    gender={petInfo.gender}
                    photoPath={petInfo.photoPath}
                />
            </div>
        </>
    );
}

export default App;
