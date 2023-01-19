import React from 'react';
function Footer() {
  return(
      <>       
          <footer className="footer text-center">
            <div className="container px-4 px-lg-5">
                <ul className="list-inline mb-5">
                    <li className="list-inline-item">
                        <a className="social-link rounded-circle text-white mr-3" href="#!"><i className="icon-social-facebook"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a className="social-link rounded-circle text-white mr-3" href="#!"><i className="icon-social-twitter"></i></a>
                    </li>
                    <li className="list-inline-item">
                        <a className="social-link rounded-circle text-white" href="#!"><i className="icon-social-github"></i></a>
                    </li>
                </ul>
                <p className="text-muted small mb-0">Copyright &copy; Flock App @ 2023</p>
            </div>
        </footer>
      </>
  );
}

export default Footer;