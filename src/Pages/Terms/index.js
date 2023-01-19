import React from 'react';
import './../pages.css';
import SideNav from '../../Components/Shared/SideNav';

function Terms() {  
  return (
    <div className="App profile container">
        <SideNav name="Luciana Bruscino" />  
        <div>
                <h3>Privacy Policies and Terms </h3>                  
                
            
                <hr className="m-2"></hr>   
                <div>
                <h4>(1) Privacy Terms </h4>

                <p> We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.</p>

                <p>While using our Services, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
                <ul>
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Location</li>
                    <li>Account preferences</li>
                    <li>Health conditions</li>
                    <li>Cookies and Usage Data</li>
                </ul>


                <p>We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used. </p>

                <p>All personal information entered on Flock App Services is safe, private and secure. We do not disclose ANY information to outside sources as we respect the importance of security and confidentiality of your data. NO information is shared with any third parties, except with verified and secure payment processors.</p>

                <p>Flock App uses the collected data for various purposes:</p>
                <ul>
                    <li>To provide and maintain the Service</li>
                    <li>To provide customer care and support</li>
                    <li>To provide analysis or valuable information so that we can improve the Service</li>
                    <li>To monitor the usage of the Service</li>
                    <li>To detect, prevent and address technical issues</li>
                </ul>



            </div>                
        </div>
        </div>  
    );
}

export default Terms;
