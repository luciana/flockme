import React from 'react';
import '../../Components/Items/Item.css';
import './../pages.css';
import './../profile-nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNav from '../../Components/Shared/SideNav';
import Questions from '../../Components/Questions/Questions';

function Profile() {  
  return (
    <div className="App profile container">
        <SideNav name="Luciana Bruscino" />
        <div className="container-fluid p-0">
            <section className="" >                             
                <Questions
                    questionsUrl="http://localhost:5000/questions"
                    currentUserId="2"
                  />
            </section>
            <hr className="m-0"></hr>                   
        </div>
    </div>
  );
}

export default Profile;
