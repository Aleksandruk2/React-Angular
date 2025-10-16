import EventMini from "../../common/EventMini/EventMini";
import {useSelector} from "react-redux";
import { HeartPlus } from "lucide-react";
import {NavLink} from "react-router-dom";

const CounterPage = () => {

    const eventList = useSelector(state => state.eventList.value);

    return (
        <>
            <div className={'bg-warning text-white pt-2 border-bottom border-dark border-2'}>
                <h2 className={'text-center'}>Твої фаворити</h2>
            </div>

            {eventList.length === 0 &&
                <div className={'container mt-3 d-flex align-content-center'}>
                    <HeartPlus size={70} className={'me-2 mx-auto'}/>
                    <h4 className={'mt-2'}>У тебе немає фаворитів. Щоб додати фаворитів перейди на сторінку <span><NavLink to="/events">Події</NavLink></span>.</h4>
                </div>
            }

            <div className={'container'}>
                <div className={'d-flex flex-wrap'}>
                    {eventList.map((event, index) => (
                        <div key={index} className={'m-auto'}>
                            <EventMini
                                id={event.id}
                                title={event.title}
                                date={event.date}
                                location={event.location}
                                imgPath={event.imgPath}
                            />
                        </div>
                    ))}
                </div>
            </div>



        </>
    )
}

export default CounterPage;