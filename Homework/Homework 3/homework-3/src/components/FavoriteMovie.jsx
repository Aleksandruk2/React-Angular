const FavoriteMovie = ({
                           title,
                           posterPath,
                           yearOfRelease,
                           produser,
                           studio
                       }) => {
    return (
        <>
            <div className={'card bg-dark m-1 text-white text-start col-5 col-md-4 col-lg-3 p-2'}>
                <div className={'border-bottom border-white mb-2'}>
                    <h5 className={'fw-bold '}>{title}</h5>
                </div>
                <div className="mb-2">
                    <img src={posterPath} alt="poster" width={"100%"}/>
                </div>
                <div className="border-top border-white pt-2">
                    <p className={'m-0'}>
                        <span className={'text-secondary'}>Дата релізу:</span> {yearOfRelease}
                    </p>
                    <p className={'m-0'}>
                        <span className={'text-secondary'}>Режисер:</span> {produser}
                    </p>
                    <p className={'m-0'}>
                        <span className={'text-secondary'}>Кіностудія:</span> {studio}
                    </p>
                </div>
            </div>
        </>
    );
}

export default FavoriteMovie;