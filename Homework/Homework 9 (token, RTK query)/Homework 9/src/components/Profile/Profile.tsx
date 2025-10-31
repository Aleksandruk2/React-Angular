import {useState} from "react";
import {useGetAccountProfileQuery} from "../../services/apiAccountProfile"
import {User2, LucideMail, Phone} from 'lucide-react'

const Profile = () => {
    const [show, setShow] = useState(false)

    const {data} = useGetAccountProfileQuery();

    return (
        <>
            <div className={'container mt-3'}>
                <div className={'d-flex justify-content-center'}>
                    <button className={"btn btn-info mx-auto text-secondary"} onClick={() => {setShow(!show)}}>Показати Профіль</button>
                </div>

                <div className={'d-flex justify-content-center'}>
                    {show && data && (
                        <div className={'container my-card border rounded d-flex mt-3 p-2 text-secondary'}>
                            <div className={'d-flex me-2 imgBox overflow-hidden rounded justify-content-center align-items-center'}>
                                <img src={'https://lohika.itstep.click/images/800_' + data.photo} height={"100%"} alt={data.photo}/>
                            </div>
                            <div className={'overflow-hidden'}>
                                <div className={'text-white mb-2 d-flex'}>
                                    <span className={'me-1 d-flex align-items-center justify-content-center'}>
                                        <User2 size={23}></User2>
                                    </span>
                                    <h3 className={'m-0'}>{data.firstName} {data.secondName}</h3>
                                </div>
                                <div className={'mb-2 d-flex'}>
                                    <span className={'me-1 d-flex align-items-center justify-content-center'}>
                                        <LucideMail size={18}></LucideMail>
                                    </span>
                                    <p className={'m-0'}>{data.email}</p>
                                </div>
                                <div className={'mb-2 d-flex'}>
                                    <span className={'me-1 d-flex align-items-center justify-content-center'}>
                                        <Phone size={18}></Phone>
                                    </span>
                                    <p className={'m-0'}>{data.phone}</p>
                                </div>
                            </div>
                        </div>

                    )}
                </div>

            </div>
        </>
    );
}

export default Profile;