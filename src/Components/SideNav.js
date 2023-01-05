import React from 'react';
import { FaKiss } from "react-icons/fa";

function SideNav({ name }) {
  return(
      <>       
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">{name} @ FlockMe</span>
                <span className="d-none d-lg-block">
                     {name} &nbsp;<FaKiss /> 
                </span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/">Home</a></li>                    
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/Profile">New Question</a></li>                  
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/Main">All Questions</a></li>                   
                </ul>
            </div>
        </nav>
      </>
  );
}

export default SideNav;