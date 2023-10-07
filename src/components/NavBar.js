import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsMonkey</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology">Technology</Link>
                            </li>
                            {/* <li className="nav-item dropdown"> */}
                            {/* <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="true"> */}
                            {/* Country */}
                            {/* </a> */}
                            {/* <ul className="dropdown-menu"> */}
                            {/* <li><a className="dropdown-item" href="/">ae</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">ar</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">at</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">au</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">be</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">bg</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">br</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">ca</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">ch</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">cn</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">co</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">cu</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">cz</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">de</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">eg</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">fr</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">gb</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">gr</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">hk</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">hu</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">id</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">ie</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">il</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">in</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">it</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">jp</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">kr</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">lt</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">lv</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">ma</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">mx</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">my</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">ng</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">nl</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">no</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">nz</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">ph</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">pl</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">pt</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">ro</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">rs</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">ru</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">sa</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">se</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">sg</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">si</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">sk</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">th</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">tr</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">tw</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">ua</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">us</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">ve</a></li> */}
                            {/* <li><a className="dropdown-item" href="/">za</a></li> */}
                            {/* </ul> */}
                            {/* </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
