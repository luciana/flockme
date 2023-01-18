import React from 'react';
import Avatar from 'react-avatar';

function SideNav({ name }) {
  return(
      <>       
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">{name} @ FlockMe</span>
                <span className="d-none d-lg-block">
                    <Avatar name={name} className=" img-profile rounded-circle mx-auto mb-2" alt={name} />
                </span>               
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/">Home</a></li>                                                    
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/Main">Questions</a></li>     
                    <hr />
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/Profile">Profile</a></li>  
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/Profile/#stats">Stats</a></li> 
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/Profile">Sign out</a></li>                
                </ul>
            </div>
        </nav>
      </>
  );
}

export default SideNav;