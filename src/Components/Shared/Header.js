import React from "react";

function Header() {  
  
    return (
        <div>       
        <header className="masthead d-flex align-items-center">
            <div className="container px-4 px-lg-5 text-center">
                <h1 className="mb-1">Flock App</h1>
                <h3 className="mb-5"><em>We Help with Simple decisions in life. </em></h3>
                <a className="btn btn-light mx-2 btn-lg" href="/main">Join in</a>
                <a className="btn btn-dark mx-2 btn-lg" href="/#services">Learn More</a>
            </div>
        </header>
        </div>
    );
}

export default Header;