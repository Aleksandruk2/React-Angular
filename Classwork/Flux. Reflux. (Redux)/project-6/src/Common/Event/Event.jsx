const Event = (title, imgPath, date, artists, info) => {
  return (
      <>
          <div>
              <h2>title</h2>
              <div className={'d-flex'}>
                  <div className={'card'}>
                      <img src={imgPath} width={'30rem'} alt="..."/>
                  </div>
                  <div>
                      <p>Дата проведження: {date}</p>
                      <p>У проведжені <b>{title}</b> приймуть участь: {artists}</p>
                      <p>Про <b>{title}</b>: {info}</p>
                  </div>
              </div>
          </div>
      </>
  );
}
export default Event;