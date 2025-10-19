import Header from "./components/./Header/Header";
import './App.css';
import {API_KEY} from "./api/apiOMDbKey";
import {useEffect, useState} from "react";
import axios from "axios";
import MovieCard from "./components/MovieCard/MovieCard";

function App() {

    const [movie, setMovie] = useState("Batman")
    const [movies, setMovies] = useState([])
    
    const getMovies = async () => {
        try {
            const response = await axios.get("http://www.omdbapi.com/", {
                params: {
                    apikey: API_KEY,
                    s: movie,
                },
            });

            if(response.data.Response === "True") {
                console.log("resp:",response);
                setMovies(response.data.Search);
            } else {
                console.log("error resp:",response.data.Error);
            }
        }
        catch (error) {
            console.error("Помилка запиту на сервер", error)
        }
    }


    useEffect(() => {
        getMovies();
    }, [movie]);

    useEffect(() => {
        console.log("movie:",movie);
        console.log("movies:",movies);
    }, [movie]);

    const handleOnChange = (e) => {
        setMovie(e.target.value);
    }

  return (
    <>
        <Header onChange={handleOnChange}/>
        <div className={'px-2 mt-1 d-flex flex-wrap'}>
            {movies.map((item, index) => (
                <MovieCard key={index}
                           imgPath={item.Poster}
                           title={item.Title}
                           year={item.Year}
                />
            ))}
        </div>
    </>
  );
}

export default App;
