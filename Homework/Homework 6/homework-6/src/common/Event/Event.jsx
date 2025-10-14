import {useDispatch} from "react-redux";
import {decrement, increment} from "../../features/counter/counterSlice";

const Event = ({title = "", imgPath = "", date = "", artists = [], info = "", location = ""}) => {

    const dispatch = useDispatch();

    return (
        <>
            <div className={'col-md-5 col-lg-3 mb-3 container-md shadow'}>
                <h3>{title}</h3>
                <div className={'d-md-block mb-1 justify-content-md-center d-flex border'}>
                    <div className={'border rounded bg-black shadow d-flex justify-content-md-center align-items-center m-1 '}>
                        <img className={"rounded "} src={imgPath} width={'250px'} alt="..."/>
                    </div>
                    <div className={'p-1 '}>
                        <p className={'border-bottom border-dark border-opacity-50'}>Дата проведження: {date}</p>
                        <p className={'border-bottom border-dark border-opacity-50'}>Місце проведання: {location}</p>
                        <p className={'border-bottom border-dark border-opacity-50'}>У проведжені <b>{title}</b> приймуть участь: <i>{artists}</i></p>
                        <p className={'border-bottom border-dark border-opacity-50'}>Про <b>{title}</b>: {info}</p>
                    </div>
                </div>
                <div className={'d-flex justify-content-end mb-1'}>
                    <button onClick={(e) => console.log(`title: ${title}, date: ${date}, location: ${location}`)} className={'btn btn-warning fw-bold me-2 content-center'}> o </button>
                    <button onClick={() => dispatch(decrement())} className={'btn btn-danger fw-bold me-2 content-center'}> - </button>
                    <button onClick={() => dispatch(increment())} className={'btn btn-success fw-bold content-center'}> + </button>
                </div>

            </div>
        </>
    );
}
export default Event;