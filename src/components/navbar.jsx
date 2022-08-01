import logo from "../assets/waysbuck_logo.png"


function Navbar(){
    return(
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-lg">
                <a className="navbar-brand me-5" href="/home">
                    <img src={logo} style={{height: 35}} alt="logo" />
                </a>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active  text-orange" aria-current="page" href="/">Register</a>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-primary" aria-current="page">Login</button>
                    </li>
                </ul>
                </div>
            </nav>

        </div>
    );
}

export default Navbar;