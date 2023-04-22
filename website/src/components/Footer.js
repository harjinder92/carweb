import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/fontawesome-free-solid";
import './Footer.css'

function Footer(){
return(
    <div className="footer">
    <ul>
<li><Link to='./about us'>About us</Link></li> 
<li><Link to='./services'>Services</Link></li>
<li><Link to='./contact us'>Contact us</Link></li>
<li><Link to='./privacy policy'>privacy policy</Link></li>
<li><Link to='./terms & conditions'>Terms & conditions</Link></li>
</ul>
<h2 className="footer">Royal Car Wash<br/>
Lawton Court, Oaks Cresent
WV3 9SH</h2>
<h2 className="footer"><FontAwesomeIcon icon={faPhone} size='s'/> 44 07823455473</h2>
<h2 className="footer"><FontAwesomeIcon icon={faEnvelope} size='s'/> happysingajimal10@gmail.com</h2>
    </div>
)
    
}
export default Footer