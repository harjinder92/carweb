import React, { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/fontawesome-free-solid'
import {Link} from 'react-router-dom'
import Services from "./Services";
import Image from './image/Image.png';

function NavBar(){
    const [dropdown,setDropdown]=useState(false);
    return(
        <>
        <div className="navigation-bar"> 
        <div id="navigation-container">
        <img className="logo" src={Image}/>
        <ul>
        
        <li><Link to="/"><FontAwesomeIcon icon={faHome} size="xl"/></Link></li>
        <li><Link to="/Services">Services</Link></li>    
        <li><Link to="/about us">About us</Link></li>
        <li><Link to="/offers">Offers</Link></li>
        <li><Link to="/royal to you">Royal to You</Link></li>
        </ul>
        </div>
        </div>
        </>
    )
}
export default NavBar;