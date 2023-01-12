import React from 'react';
import '../../Components/Items/Item.css';
import './../pages.css';
import './../profile-nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from '../../Components/Shared/SideNav';
import QuestionAndPoll from '../../Components/Questions/QuestionAndPoll';



function Main() {
  
  return (
    <div className="App profile container">
        <SideNav name="Luciana Bruscino" />
        <div className="container-fluid p-0">
            <section className="resume-section" >
                <div className="resume-section-content">                 
                <div id="question-form">
                <QuestionAndPoll  />
             </div>
                </div>
            </section>
            <hr className="m-0"></hr>                   
        </div>
    </div>
  );
}

export default Main;
