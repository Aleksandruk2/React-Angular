import {NavLink, Outlet} from "react-router-dom";

const Header = () => {
    return (
        <>
            <header data-bs-theme="dark">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">


                    <div className="navbar-nav flex-row mx-auto fw-bold mb-2 mb-md-0">
                        <li className="nav-item mx-2"><NavLink className="nav-link" aria-current="page"
                                                           to="/">Біографія</NavLink></li>
                        <li className="nav-item mx-2"><NavLink className="nav-link"
                                                           to="/mostPopularPicture">Найпопулярніші картини</NavLink></li>
                        <li className="nav-item mx-2"><NavLink className="nav-link"
                                                           to="/galleryPicture">Уся колекція картин</NavLink></li>
                        <li className="nav-item mx-2"><NavLink className="nav-link"
                                                           to="/form">Форма регістрації</NavLink></li>
                    </div>
                </nav>
            </header>

            <Outlet/>
        </>
    );
}

export default Header;