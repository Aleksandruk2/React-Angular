const LocalTime = ({time}) => {
    return (
        <>
            <div className={'container text-white text-center fw-bold'}>
                <h1 className={'timeSize border-top border-bottom border-white'}>{time}</h1>
            </div>
        </>
    );
}

export default LocalTime;