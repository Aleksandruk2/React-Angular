import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <>
            <header data-bs-theme="dark">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container-fluid"><NavLink className="navbar-brand text-info"
                                                              to="/">Карусель</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                                aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item"><NavLink className="nav-link" aria-current="page"
                                                                  to="/">Головна</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" aria-current="page"
                                                                  to="/about">Про нас</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link"
                                                                  to="/dashboard">Панель</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link"
                                                                  to="/task1">Завдання 1</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link"
                                                                  to={"/nothing-here"}
                                                                  aria-disabled="true">Ні куди</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;