import {NavLink, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {Heart} from "lucide-react";

const Header = () => {
    const eventList = useSelector(state => state.eventList);

    const handleClick = () => {
        console.log('entvents list:', eventList.value);
    }

    return (
        <>
            <header data-bs-theme="dark">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">

                    <div className="navbar-nav flex-row mx-auto fw-bold mb-2 mb-md-0">
                        <li className="nav-item "><NavLink className="nav-link mx-2" aria-current="page"
                                                           to="/">Головна сторінка</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link mx-2"
                                                           to="/events">Події</NavLink></li>
                    </div>

                    <div className={'position-absolute d-flex'}>
                        <div className={''}>
                            <div className={' d-flex justify-content-end'}>
                                <div className={'bg-danger text-white fw-bold mx-2'}>
                                    <Heart size={20}/>
                                    <h6>{eventList.value.lenght}</h6>
                                </div>
                            </div>
                        </div>
                        <div className={''}>
                            <div className={' d-flex justify-content-end'}>
                                <button onClick={() => handleClick()} className={'btn btn-warning text-secondary fw-bold mx-2'}>console//</button>
                            </div>
                        </div>
                    </div>


                </nav>
            </header>

            <Outlet/>
        </>
    );
}

export default Header;