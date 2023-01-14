import React from 'react';
import '../../Components/Items/Item.css';
import './../pages.css';
import './../profile-nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from '../../Components/Shared/SideNav';
import Questions from '../../Components/Questions/Questions';

function Profile() {  
  return (
    <div className="App profile container-fluid">
        <SideNav name="Luciana Bruscino" />   
            <section className="" >         
              <div className="container white-bg my-5 container border border-2 p-3 d-flex flex-column">
                  <h3>Help the World Make Simple Decisions </h3>                  
              </div>                        
              <Questions
                    questionsUrl="http://localhost:5000/questions"
                    currentUserId="2"
              />
            </section>
            <hr className="m-0"></hr>                   
        </div>
    );
}

export default Profile;
