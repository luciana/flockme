import React from 'react';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({userId=null}) => {
  

const tabs = [{
  route: "/Main",
  icon: faHome,
  label: "Home"
},{
  route: "/New",
  icon: faPlus,
  label: "Question"
},{
  route: "/Profile",
  icon: faUserCircle,
  label: "Account"
}]

const isLoggedIn = () =>{
  return userId !== null;
}

	return (
    <div>
       {/* Top Bar*/}
       <div className={isLoggedIn ? 'd-none' : 'd-block'}>
      <nav className="navbar navbar-expand-md navbar-light d-none d-lg-block sticky-top top-tab-nav" 	role="link">
        <div className="container-fluid">
            <a className="navbar-brand" href="/home">Flock App</a>
            <Nav className="ml-auto">
              <NavItem>
                <NavLink to="/main" className="nav-link">
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/stats" className="nav-link">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/#" className="nav-link">
                  Login
                </NavLink>
              </NavItem>
            </Nav>
        </div>
      </nav>
      </div>
       {/* Bottom Tab Navigator*/}
       <nav className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav" role="navigation">
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {
              tabs.map((tab, index) =>(
                <NavItem key={`tab-${index}`}>
               
                  <NavLink to={tab.route} className={(navData) => (navData.isActive ? "nav-link bottom-nav-link active-style" : 'nav-link bottom-nav-link none')}>
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                      <FontAwesomeIcon size="lg" icon={tab.icon}/>
                      <div className="bottom-tab-label">{tab.label}</div>
                    </div>
                  </NavLink>
                </NavItem>
              ))
            }
          </div>
        </Nav>
      </nav>
      </div>
  )
};

export default Navigation;