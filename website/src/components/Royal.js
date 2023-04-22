import React, { useEffect } from "react";
import './Royal.css'
import  Aos from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone ,faEnvelope } from "@fortawesome/fontawesome-free-solid";
import Footer from "./Footer";
function Royal(){
    useEffect(()=>{
        Aos.init();
    },[])
return(
    <>
    <div className="container">
    <h2 className="head1">Royal to you</h2>
<h1 data-aos='flip-left'>Prefer to have your<br/> car valeted at home?</h1>
<h1 data-aos='flip-left'>Let us visit you at your chosen location</h1>
</div>
<div className="sec2">
<h2>We are delighted to offer our new 'at home' service for our customers who may be shielding or vulnerable or who may just prefer us to wash their car at a location of their choice</h2>
   <h3>To book a service you will need to:</h3> 
   <ul>
 <li>  Download our Customer App from the App Store or Google Play and register an account</li>
<li>Once registered, book a Wash and put in your details, including the postcode of your chosen locations and the 'WavesToYou' option should appear*</li>
<li>Simply select this option, choose the service you want and pre-book a morning or afternoon slot on the day of your choice (we will call you to confirm the specific time)</li>
<li>On the day one of our qualified valeters will visit your to carry out your chosen service.</li>
</ul>
<p>*If RoyalToYou does not show as an option, sadly you may be too far from our Hub - please call us to discuss this if you have an issue booking

Our first RoyalToYou Hub is now in operation and is based from Tesco Kensington, WV3 9SH. We operate within a two-mile radius of this postcode.</p>
</div>
<hr/>
<Footer/>
    </>
)
}
export default Royal