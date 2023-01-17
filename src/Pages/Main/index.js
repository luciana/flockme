import React from 'react';
import '../pages.css';
import './../profile-nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from '../../Components/Shared/SideNav';
import QuestionAndPoll2 from '../../Components/Questions/QuestionAndPoll2';
import Questions from '../../Components/Questions/Questions';

function Main() {
  
  return (
    <div className="App profile container container-fluid">
        <SideNav name="Luciana Bruscino" />    
        <div className="white-bg container border border-2 p-2 d-flex flex-column">
                  <h3>Help the World Make Simple Decisions </h3>                  
        </div>   
                                               
        <div id="question-form">
          <QuestionAndPoll2  />
        </div>          
        <hr className="m-0"></hr>       
        <Questions           
            currentUserId="2"
        />            
    </div>
  );
}

export default Main;

