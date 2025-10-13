import {NavLink, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {
    const counter = useSelector(state => state.counter);

    return (
        <>
            <header data-bs-theme="dark">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">


                    <div className="navbar-nav flex-row mx-auto fw-bold mb-2 mb-md-0">
                        <li className="nav-item "><NavLink className="nav-link mx-2" aria-current="page"
                                                           to="/">Головна сторінка ({counter.value})</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link mx-2"
                                                           to="/events">Події</NavLink></li>
                    </div>
                </nav>
            </header>

            <Outlet/>
        </>
    );
}

export default Header;