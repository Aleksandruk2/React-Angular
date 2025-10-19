const MovieCard = ({imgPath,
                   title,
                   year}) => {
  return (
      <>
          <div className={'col-4 col-lg-3 col-xl-2 p-1'}>
              <div className={'bg-dark rounded mx-1 p-1'}>
                  <div className={'img-zone d-flex justify-content-center rounded overflow-hidden bg-black border border-2 border-secondary'}>
                      <img src={imgPath} alt="..."/>
                  </div>

                  <div className={'text-zone my-1 p-1 rounded border border-2 border-secondary text-white'}>
                      <h5 className={'m-0'}>{title}</h5>
                  </div>

                  <div className={' my-1 p-1 rounded border border-2 border-secondary text-secondary'}>
                      <p className={'m-0'}>Дата виходу: <span className={'text-white'}>{year}</span></p>
                  </div>
              </div>
          </div>


      </>
  );
}

export default MovieCard;