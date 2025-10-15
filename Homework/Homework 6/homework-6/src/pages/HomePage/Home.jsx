import EventMini from "../../common/EventMini/EventMini";
import {useSelector} from "react-redux";

const CounterPage = () => {

    const eventList = useSelector(state => state.eventList.value);

    return (
        <>
            <div className={'container'}>
                <div className={'d-flex flex-wrap'}>
                    <EventMini title={eventList[0].title}
                                date={eventList[0].date}
                                location={eventList[0].location}
                                imgPath={eventList[0].imgPath}
                    />
                </div>
            </div>
        </>
    )
}

export default CounterPage;