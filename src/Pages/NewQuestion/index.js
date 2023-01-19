import React from 'react';
import QuestionAndPoll2 from '../../Components/Questions/QuestionAndPoll2';
import SideNav from '../../Components/Shared/SideNav';


const NewQuestion = (props) => {
return (
    <div className="App profile ">
       <SideNav name="Luciana Bruscino" />    
        <div className="white-bg container border border-2 p-2 d-flex flex-column">
                  <h3>Help the World Make Simple Decisions </h3>                  
        </div>   
                                               
        <div id="question-form">
          <QuestionAndPoll2  />
        </div> 
    </div>
  )
};

export default NewQuestion;