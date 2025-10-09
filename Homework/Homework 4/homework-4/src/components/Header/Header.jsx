import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <>
            <header data-bs-theme="dark">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    

                    <div className="navbar-nav flex-row mx-auto fw-bold mb-2 mb-md-0">
                        <li className="nav-item "><NavLink className="nav-link" aria-current="page"
                                                               to="/">Завдання 1</NavLink></li>
                        <li className="nav-item "><NavLink className="nav-link"
                                                               to="/task2">Завдання 2</NavLink></li>
                        <li className="nav-item "><NavLink className="nav-link"
                                                               to="/task3">Завдання 3</NavLink></li>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;