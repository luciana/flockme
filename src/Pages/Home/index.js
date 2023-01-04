import React from 'react';
import { Header, Footer } from '../../Components/index';
import './home-nav.css';
import '../pages.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div className="App">
        <Header></Header>        
        <section className="App-header content-section  text-white text-center" id="services">
            <div className="container px-4 px-lg-5">
                <div className="content-section-heading">
                    <h3 className="text-secondary mb-0">our offer</h3>
                    <h2 className="mb-5">How does it work?</h2>
                </div>
                <div className="row gx-4 gx-lg-5">
                    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span className="service-icon rounded-circle mx-auto mb-3"><i className="icon-screen-smartphone"></i></span>
                        <h4><strong>Post a Question</strong></h4>
                        <p className="text-faded mb-0">Enter options for your question</p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span className="service-icon rounded-circle mx-auto mb-3"><i className="icon-pencil"></i></span>
                        <h4><strong>Friends will vote</strong></h4>
                        <p className="text-faded mb-0">We'll setup a poll for you</p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                        <span className="service-icon rounded-circle mx-auto mb-3"><i className="icon-like"></i></span>
                        <h4><strong>Best answer chosen</strong></h4>
                        <p className="text-faded mb-0">
                            We'll post the winner answer                            
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <span className="service-icon rounded-circle mx-auto mb-3"><i className="icon-mustache"></i></span>
                        <h4><strong>Post the outcome</strong></h4>
                        <p className="text-faded mb-0">You let us know how it turned out.</p>
                    </div>
                </div>
            </div>
        </section>
        <Footer></Footer>
        
    </div>
  );
}

export default Home;