import {CalendarCheck, HeartCrack, LocationEdit,} from 'lucide-react';
import {useDispatch, useSelector} from "react-redux";
import {removeById} from "../../features/eventList/eventListSlice";

const EventMini = ({
    id,
    title="",
    imgPath="",
    date="",
    location=""
                   }) => {

    const eventList = useSelector(state => state.eventList.value);

    const isFavorite = eventList.some(item => item.id === id);

    const dispatch = useDispatch();

    const handleClick = () => {
        for (let i = 0; i < eventList.length; i+=1){
            if(eventList[i].id === id){
                dispatch(removeById(i));
            }
        }
    }

    return (
        <>
            <div className={'rounded shadow border box bg-dark text-white p-1 mb-2 mt-2'}>
                <div className={'d-flex position-relative overflow-hidden rounded border border-2 border-secondary mb-2 image justify-content-center align-content-center'}>
                    <div className={'img-hover px-5'}>
                        <a href={imgPath} data-lightbox={'gallery'} data-title={title}>
                            <img src={imgPath} alt={title}/>
                        </a>
                    </div>
                </div>
                <div>
                    <div>
                        <div className={'p-1 rounded border border-2 border-secondary mb-2'}>
                            <h5 className={'ms-1 m-0 titleH overflow-hidden'}>{title}</h5>
                        </div>
                    </div>


                    <div className={' mb-2 rounded border border-2 border-secondary'}>
                        <div className={'p-1 border-bottom border-2 border-secondary'}>
                            <div className={'d-flex'}>
                                <CalendarCheck className={'text-secondary me-1'} size={20}/>
                                <p className={'m-0'}>{date}</p>
                            </div>
                        </div>

                        <div className={'p-1'}>
                            <div className={'d-flex'}>
                                <LocationEdit className={'text-secondary me-1'} size={20}/>
                                <p className={'m-0'}>{location}</p>
                            </div>
                        </div>

                    </div>

                    <div className={'d-flex justify-content-end'}>
                        <button onClick={() => handleClick()} className={`w-100 fw-bold p-0 btn-danger border-2 border-secondary btn p-1`}>
                            <HeartCrack size={20}/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventMini;