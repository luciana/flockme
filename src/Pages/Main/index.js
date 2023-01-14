import React from 'react';
import '../../Components/Items/Item.css';
import './../pages.css';
import './../profile-nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from '../../Components/Shared/SideNav';
import QuestionAndPoll from '../../Components/Questions/QuestionAndPoll';



function Main() {
  
  return (
    <div className="App profile container-fluid">
        <SideNav name="Luciana Bruscino" />       
        <section className="m-0" >                                                    
                <div id="question-form">
                  <QuestionAndPoll  />
                </div>
        </section>         
        <hr className="m-0"></hr>                   
    </div>
  );
}

export default Main;
