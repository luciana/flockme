import React from 'react';
import '../pages.css';
import './../profile-nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@aws-amplify/ui-react/styles.css';
import SideNav from '../../Components/Shared/SideNav';
import Questions from '../../Components/Questions/Questions';
//import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
//import awsExports from '../../aws-exports';
//import {useUser} from '../../Contexts/UserContext';
//Amplify.configure(awsExports);

function Main({ signOut, user }) {  
  //const {accessToken, idToken, refreshToken} = user.signInUserSession;
  //console.log("user from Main", user);
  return (
    <div className="App profile ">
        <SideNav 
          name={user.username}
          signOut={signOut} />    
        <div className="white-bg container border border-2 p-2 d-flex flex-column">
                  <h3>Decisions made simple</h3>    
        </div>               
        <hr className="m-0"></hr>       
        <Questions           
            user= {user}
        />            
    </div>
  );
}

export default withAuthenticator(Main, {
  includeGreetings: true,
  socialProviders: ['google', 'facebook']
});

