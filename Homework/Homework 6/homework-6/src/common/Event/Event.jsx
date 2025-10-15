import {useDispatch, useSelector} from "react-redux";
import {add, removeById} from "../../features/eventList/eventListSlice";
import {Heart} from 'lucide-react';
import {useState} from "react";

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
        console.log("favorite", isFavorite);
        if (isFavorite) {
            // let definitionId = 0;
            // console.log("1st definitionId:",definitionId,"id:",id,"list:",eventList);
            // eventList.forEach(item => {
            //     console.log("item.id:",item.id,"id:",id);
            //     if(Number (item.id === id)) {
            //         console.log("open in iId:", item.id);
            //         return -1;
            //     } else {
            //         definitionId += 1;
            //     }
            // });
            for (let i = 0; i < eventList.length; i+=1){
                if(eventList[i].id === id){
                    dispatch(removeById(i));
                }
            }

            // console.log("2st definitionId:",definitionId,"id:",id,"list:",eventList);
            // dispatch(removeById(definitionId));
        } else {
            console.log("Open add");
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
            <div className={'col-md-5 col-lg-3 mb-3 container-md shadow position-relative'}>
                <h3>{title}</h3>
                <div className={'d-md-block mb-5 justify-content-md-center d-flex border rounded'}>
                    <div
                        className={'border rounded bg-black shadow d-flex justify-content-md-center align-items-center m-1 '}>
                        <img className={"rounded "} src={imgPath} width={'250px'} alt="..."/>
                    </div>
                    <div className={'p-1 '}>
                        <p className={'border-bottom border-dark border-opacity-50'}>Дата проведження: {date}</p>
                        <p className={'border-bottom border-dark border-opacity-50'}>Місце проведання: {location}</p>
                        <p className={'border-bottom border-dark border-opacity-50'}>Учасники <b>{title}</b>: <i>{artists}</i>
                        </p>
                        <p className={'border-bottom border-dark border-opacity-50'}>Про <b>{title}</b>: {info}</p>
                    </div>
                </div>
                <div className={'d-flex justify-content-end mt-auto mb-1 position-absolute pe-2 me-1 bottom-0 end-0'}>
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