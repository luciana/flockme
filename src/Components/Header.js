import React from 'react';

function Header() {
    // useEffect(() => {
    //     const script = document.createElement('script');
    //     script.src = "./nav-script.js";
    //     script.async = true;
    //     document.body.appendChild(script);
    //   return () => {
    //       document.body.removeChild(script);
    //     }
    //   }, []);
    window.addEventListener('DOMContentLoaded', event => {
        const sidebarWrapper = document.getElementById('sidebar-wrapper');
        let scrollToTopVisible = false;
        // Closes the sidebar menu
        const menuToggle = document.body.querySelector('.menu-toggle');
        menuToggle.addEventListener('click', event => {
            event.preventDefault();
            sidebarWrapper.classList.toggle('active');
            _toggleMenuIcon();
            menuToggle.classList.toggle('active');
        })
    
        // Closes responsive menu when a scroll trigger link is clicked
        var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
        scrollTriggerList.map(scrollTrigger => {
            scrollTrigger.addEventListener('click', () => {
                sidebarWrapper.classList.remove('active');
                menuToggle.classList.remove('active');
                _toggleMenuIcon();
            })
        });
    
        function _toggleMenuIcon() {
            const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
            const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
            if (menuToggleBars) {
                menuToggleBars.classList.remove('fa-bars');
                menuToggleBars.classList.add('fa-xmark');
            }
            if (menuToggleTimes) {
                menuToggleTimes.classList.remove('fa-xmark');
                menuToggleTimes.classList.add('fa-bars');
            }
        }
    
        // Scroll to top button appear
        document.addEventListener('scroll', () => {
            const scrollToTop = document.body.querySelector('.scroll-to-top');
            if (document.documentElement.scrollTop > 100) {
                if (!scrollToTopVisible) {
                    fadeIn(scrollToTop);
                    scrollToTopVisible = true;
                }
            } else {
                if (scrollToTopVisible) {
                    fadeOut(scrollToTop);
                    scrollToTopVisible = false;
                }
            }
        })
    })
    
    function fadeOut(el) {
        el.style.opacity = 1;
        (function fade() {
            if ((el.style.opacity -= .1) < 0) {
                el.style.display = "none";
            } else {
                requestAnimationFrame(fade);
            }
        })();
    };
    
    function fadeIn(el, display) {
        el.style.opacity = 0;
        el.style.display = display || "block";
        (function fade() {
            var val = parseFloat(el.style.opacity);
            if (!((val += .1) > 1)) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    };
    
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
                <h1 className="mb-1">FlockMe App</h1>
                <h3 className="mb-5"><em>We Help with Simple decisions in life. </em></h3>
                <a className="btn btn-light mx-2 btn-lg" href="/Main">Sign Up</a>
                <a className="btn btn-dark mx-2 btn-lg" href="/#services">Learn More</a>
            </div>
        </header>
        </div>
    );
}

export default Header;