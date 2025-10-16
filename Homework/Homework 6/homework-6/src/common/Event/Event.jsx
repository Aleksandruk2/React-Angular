import {useDispatch, useSelector} from "react-redux";
import {add, removeById} from "../../features/eventList/eventListSlice";
import {Heart} from 'lucide-react';

const Event = ({
                   id,
                   title = "",
                   imgPath = "",
                   date = "",
                   artists = [],
                   info = "",
                   location = ""
               }) => {

    const eventList = useSelector(state => state.eventList.value);

    const isFavorite = eventList.some(item => item.id === id);

    const dispatch = useDispatch();


    const handleClick = () => {
        if (isFavorite) {
            for (let i = 0; i < eventList.length; i+=1){
                if(eventList[i].id === id){
                    dispatch(removeById(i));
                }
            }
        } else {
            dispatch(add({
                id,
                title,
                imgPath,
                date,
                location,
                artists,
                info
            }));
        }
    }

    return (
        <>
            <div className={'bg-dark text-white col-md-5 col-lg-3 mb-3 pt-1 p-2 container-md shadow position-relative'}>
                <h3>{title}</h3>
                <div className={'d-md-block mb-5 justify-content-md-center d-flex border rounded'}>
                    <div className={'border overflow-hidden rounded bg-black shadow d-flex justify-content-md-center align-items-center m-1 '}>

                        <a href={imgPath} data-lightbox={'gallery'} data-title={title}>
                            <img className={"rounded img-hover"} src={imgPath} width={'250px'} alt="..."/>
                        </a>
                    </div>
                    <div className={'p-1 '}>
                        <p className={'border-bottom border-dark border-opacity-50'}>Дата проведження: {date}</p>
                        <p className={'border-bottom border-dark border-opacity-50'}>Місце проведання: {location}</p>
                        <p className={'border-bottom border-dark border-opacity-50'}>Учасники <b>{title}</b>: <i>{artists}</i>
                        </p>
                        <p className={'border-bottom border-dark border-opacity-50'}>Про <b>{title}</b>: {info}</p>
                    </div>
                </div>
                <div className={'d-flex justify-content-end mb-1 position-absolute me-2 bottom-0 end-0'}>
                    <button onClick={() => handleClick()}
                            className={`fw-bold p-0 content-center ${isFavorite ? "active" : ""}`}>
                        <Heart size={25}/>
                    </button>
                </div>

            </div>
        </>
    );
}
export default Event;