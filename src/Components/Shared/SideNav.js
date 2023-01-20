import React from 'react';
import Avatar from 'react-avatar';
import logo from'../../Assets/Images/logos/Flock-App-logos_white-small.png';

function SideNav({ name, signOut }) {
  return(
      <>       
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="sideNav">
       
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Flock App</span>
                <span className="d-none d-lg-block">    
                    <p><img src={logo} className="img-fluid" alt="Flock App" /> </p>
                    <Avatar name={name} className=" img-profile rounded-circle mx-auto mb-2" alt={name} />
                    <div className="text-white my-3 profile-name">{name}</div>   
                </span>          
            </a>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">                                                                     
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/Main">Questions</a></li>     
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/New">New Question</a></li>  
                    <hr />
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/#" onClick={signOut}>Logout</a></li>                
                </ul>
            </div>
        </nav>
      </>
  );
}

export default SideNav;