import { CalendarCheck, LocationEdit, } from 'lucide-react';

const EventMini = ({
    title="",
    imgPath="",
    date="",
    location=""
                   }) => {
    return (
        <>
            <div className={'rounded shadow border box bg-dark text-white p-1'}>
                <div className={'d-flex overflow-hidden rounded border border-2 border-secondary mb-2 image justify-content-center align-content-center'}>
                    <img src={imgPath}  alt="..."/>
                </div>
                <div className={''}>
                    <div className={'p-1 rounded border border-2 border-secondary mb-2'}>
                        <h4 className={'ms-1'}>{title}</h4>
                    </div>

                    <div className={'rounded border border-2 border-secondary'}>
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


                </div>
            </div>
        </>
    );
}

export default EventMini;