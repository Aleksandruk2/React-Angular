import {useEffect, useState} from "react";

const ModalMovie = ({handleClose, data}) => {

    const [ratings, setRatings] = useState(data.Ratings)

    useEffect(() => {
        console.log("data",data);
    }, []);

    return (
        <>
            <div onClick={handleClose} className="modal show d-block" tabIndex="-1" role="dialog">
                <div on className="modal-dialog" role="document">
                    <div className="modal-content bg-dark text-white">

                        <div className="modal-header border-secondary">
                            <h5 className="modal-title">{data.Title}</h5>
                            <button
                                type="button"
                                className="btn-close text-secondary"
                                onClick={handleClose}
                            ></button>
                        </div>

                        <div className="modal-body">
                            <div className={'d-flex justify-content-center pb-4 border-secondary border-bottom'}>
                                <img width={"350px"} src={data.Poster} alt={data.Title}/>
                            </div>

                            <div className={'text-secondary pt-1'}>
                                <p className={'mb-1'}>Сюжет: <span className={'text-white'}>{data.Plot}</span></p>
                                <p className={'mb-1'}>Жанри: <span className={'text-white'}>{data.Genre}</span></p>
                                <p className={'mb-1'}>Віковий рейтинг: <span className={'text-white'}>{data.Rated}</span></p>
                                <p className={'mb-1'}>Дата виходу: <span className={'text-white'}>{data.Released}</span></p>
                                <p className={'mb-1'}>Триваліть перегляду: <span className={'text-white'}>{data.Runtime}</span></p>
                                <p className={'mb-1'}>Медіа: <span className={'text-white'}>{data.Type}</span></p>
                                {data.Type === "series" &&
                                    <div>
                                        <p className={'mb-1'}>Усього сезонів: <span className={'text-white'}>{data.TotalSeasons}</span></p>
                                        <p className={'mb-1'}>Виходив у період: <span className={'text-white'}>{data.Year}</span></p>
                                    </div> }


                                <div className={'overflow-hidden my-2 border-secondary border-top border-bottom'}>
                                    <div className={'d-flex justify-content-center'}>
                                        {ratings?.[0] && <div className={`p-1 ${ratings.length === 3 ? "border-secondary border-1 border-end col-4" : "col-6"}`}>
                                            <div className={'d-flex justify-content-center'}>
                                                <img className={'mx-auto my-1 rounded overflow-hidden'} width={'25px'}
                                                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/IMDb_Logo_Square.svg/1024px-IMDb_Logo_Square.svg.png" alt="IMDb"/>
                                            </div>
                                            <p className={'mx-auto m-0 text-white text-center'}>{ratings[0].Value}</p>
                                        </div>}

                                        {ratings?.[1] && <div  className={`p-1 ${ratings.length === 2 ? "border-secondary border-1 border-start col-6" : "col-4"}`}>
                                            <div className={'d-flex justify-content-center'}>
                                                <img className={'mx-auto my-1 rounded overflow-hidden'} width={'25px'}
                                                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcNSvtGHhGcQ0unpYgbF6ZENRTT0XvXa_tCQ&s" alt="Rotten Tomatoes"/>
                                            </div>
                                            <p className={'mx-auto m-0 text-white text-center'}>{ratings[1].Value}</p>
                                        </div>}

                                        {ratings?.[2] && <div  className={`p-1 ${ratings.length === 3 ? "border-secondary border-1 border-start col-4" : ""}`}>
                                            <div className={'d-flex justify-content-center'}>
                                                <img className={'mx-auto my-1 rounded-circle overflow-hidden'} width={'25px'}
                                                     src="https://e7.pngegg.com/pngimages/41/567/png-clipart-metacritic-video-game-review-aggregator-app-miscellaneous-game.png" alt="Metacritic"/>
                                            </div>

                                            <p className={'mx-auto m-0 text-white text-center'}>{ratings[2].Value}</p>
                                        </div> }

                                    </div>
                                </div>

                                <p className={'mb-1'}>Автори творіння: <span className={'text-white'}>{data.Writer}</span></p>
                                <p className={'mb-1'}>Актори: <span className={'text-white'}>{data.Actors}</span></p>
                                <p className={'mb-1'}>Нагороди: <span className={'text-white'}>{data.Awards}</span></p>
                                <p className={'mb-1'}>Зібрано коштів: <span className={'text-white'}>{data.BoxOffice}</span></p>
                                <p className={'mb-1'}>Країна: <span className={'text-white'}>{data.Country}</span></p>
                            </div>
                        </div>

                        <div className="modal-footer border-secondary">
                            {/*<button className="btn btn-secondary" onClick={handleClose}>*/}
                            {/*    Закрити*/}
                            {/*</button>*/}
                            {/*<button className="btn btn-primary" onClick={handleClose}>*/}
                            {/*    Зберегти зміни*/}
                            {/*</button>*/}
                        </div>

                    </div>
                </div>
            </div>

            <div className="modal-backdrop fade show"></div>
        </>
    );
}
export default ModalMovie;