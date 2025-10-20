import axios from "axios";
import {API_KEY} from "../../api/apiOMDbKey";
import {useEffect, useState} from "react";
import ModalMovie from "../ModalMovie/ModalMovie";

const MovieCard = ({data}) => {

    const [plot, setPlot] = useState('');
    const [ratings, setRatings] = useState([])
    const [modalMovie, setModalMovie] = useState(false);

    const getPlot = async () => {
        try {
            const response = await axios.get("http://www.omdbapi.com/", {
                params: {
                    apikey: API_KEY,
                    i: data
                },
            });
            setPlot(response.data)
            setRatings(response.data.Ratings);
        }
        catch (error) {
            console.error("Помилка запиту на сервер", error)
        }
    }

    useEffect(() => {
        getPlot();
    }, [data]);

    const handleClick = (e) => {
        // console.log(`${modalMovie} => ${!modalMovie}`);
        setModalMovie(!modalMovie);
    }

    const closeClock = (e) => {
        if (e.target === e.currentTarget) {
            setModalMovie(!modalMovie);
        }
    }

  return (
      <>
          {modalMovie && <ModalMovie handleClose={closeClock} data={plot}/> }

          <div className={'col-4 col-lg-3  p-1'}>
              <div onClick={() => handleClick()} className={'shadow my-card bg-dark rounded mx-1 p-1'}>
                  <div className={'img-zone d-flex justify-content-center rounded overflow-hidden bg-black border border-2 border-secondary'}>
                      <img className={'img-hover'} src={plot.Poster} alt="..."/>
                  </div>

                  <div className={'text-zone my-1 p-1 rounded border border-2 border-secondary text-white'}>
                      <h5 className={'m-0'}>{plot.Title}</h5>
                  </div>

                  <div className={' my-1 rounded border border-2 border-secondary text-secondary'}>
                      <div className={'p-1 border-bottom border-secondary border-2'}>
                          <p className={'m-0'}>Дата виходу: <span className={'text-white'}>{plot.Released}</span></p>
                      </div>
                      <div className={'p-1 border-bottom border-secondary border-2'}>
                          <p className={'m-0'}>Рейтиг фільму: <span className={'text-white'}>{plot.Rated}</span></p>
                      </div>
                      <div className={'p-1 border-bottom border-secondary border-2'}>
                          <p className={'m-0'}>Тривалість фільму: <span className={'text-white'}>{plot.Runtime}</span></p>
                      </div>

                      <div className={'overflow-hidden'}>
                          <div className={'d-flex justify-content-center'}>
                              {ratings?.[0] && <div className={`p-1 ${ratings.length === 3 ? "border-secondary border-2 border-end col-4" : "col-6"}`}>
                                  <div className={'d-flex justify-content-center'}>
                                      <img className={'mx-auto my-1 rounded overflow-hidden'} width={'25px'}
                                           src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/IMDb_Logo_Square.svg/1024px-IMDb_Logo_Square.svg.png" alt="IMDb"/>
                                  </div>
                                  <p className={'mx-auto m-0 text-white text-center'}>{ratings[0].Value}</p>
                              </div>}

                              {ratings?.[1] && <div  className={`p-1 ${ratings.length === 2 ? "border-secondary border-2 border-start col-6" : "col-4"}`}>
                                  <div className={'d-flex justify-content-center'}>
                                      <img className={'mx-auto my-1 rounded overflow-hidden'} width={'25px'}
                                           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcNSvtGHhGcQ0unpYgbF6ZENRTT0XvXa_tCQ&s" alt="Rotten Tomatoes"/>
                                  </div>
                                    <p className={'mx-auto m-0 text-white text-center'}>{ratings[1].Value}</p>
                              </div>}

                              {ratings?.[2] && <div  className={`p-1 ${ratings.length === 3 ? "border-secondary border-2 border-start col-4" : ""}`}>
                                  <div className={'d-flex justify-content-center'}>
                                      <img className={'mx-auto my-1 rounded-circle overflow-hidden'} width={'25px'}
                                           src="https://e7.pngegg.com/pngimages/41/567/png-clipart-metacritic-video-game-review-aggregator-app-miscellaneous-game.png" alt="Metacritic"/>
                                  </div>

                                  <p className={'mx-auto m-0 text-white text-center'}>{ratings[2].Value}</p>
                              </div> }

                          </div>
                      </div>

                  </div>
              </div>
          </div>


      </>
  );
}

export default MovieCard;