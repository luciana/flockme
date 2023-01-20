import React from 'react';
import ReactDOM from 'react-dom/client';
import Amplify from '@aws-amplify/core';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import config from './aws-exports';
import { UserContextProvider } from './Contexts/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//Check if you are in localhost or production
const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

// by default, say it's localhost
const oauth = {
  domain: 'flock-amplify-signin-social-dev.auth.us-east-1.amazoncognito.com',
  scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
  redirectSignIn: 'http://localhost:3000/',
  redirectSignOut: 'http://localhost:3000/',
  responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
};

// if not, update the URLs
if (!isLocalhost) {
  oauth.redirectSignIn = 'https://main.d1whc2kcol1syq.amplifyapp.com/';
  oauth.redirectSignOut = 'https://main.d1whc2kcol1syq.amplifyapp.com/';
}

// copy the constant config (aws-exports.js) because config is read only.
var configUpdate = config;
// update the configUpdate constant with the good URLs
configUpdate.oauth = oauth;
// Configure Amplify with configUpdate
Amplify.configure(configUpdate);

// console.log("awsExports",awsExports);
// console.log("awsExports.oauth", awsExports.oauth);
// console.log("awsExports.oauth.redirectSignIn", awsExports.oauth.redirectSignIn);
// const signInURI = (awsExports.oauth.redirectSignIn).split(',');
// const signOutURI = (awsExports.oauth.redirectSignOut).split(',');

// if (isLocalhost) {
//   awsExports.oauth.redirectSignIn = signInURI[0];
//   awsExports.oauth.redirectSignOut = signOutURI[0];

// } else if (window.location.hostname === "https://main.d1whc2kcol1syq.amplifyapp.com/") {
//   console.log('window.location hostname in amplifyapp.com');
//   awsExports.oauth.redirectSignIn = signInURI[1];
//   awsExports.oauth.redirectSignOut = signOutURI[1];

// } else {

//   console.alert('This is not possible')

// }
