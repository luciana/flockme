import React from "react";

function Header() {  
    return (
        <div>
        <a className="menu-toggle rounded" href="/#"><i className="fas fa-bars"></i></a>
        <nav id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand"><a href="#page-top">FlockMe</a></li>
                <li className="sidebar-nav-item"><a href="/Home">Home</a></li>
                <li className="sidebar-nav-item"><a href="/Main">Questions</a></li>
                <li className="sidebar-nav-item"><a href="/Profile">Profile</a></li>                
            </ul>
        </nav>
        <header className="masthead d-flex align-items-center">
            <div className="container px-4 px-lg-5 text-center">
                <h1 className="mb-1">Flock App</h1>
                <h3 className="mb-5"><em>We Help with Simple decisions in life. </em></h3>
                <a className="btn btn-light mx-2 btn-lg" href="/Main">Sign Up</a>
                <a className="btn btn-dark mx-2 btn-lg" href="/#services">Learn More</a>
            </div>
        </header>
        </div>
    );
}

export default Header;