import React, { useEffect } from "react";
import Footer from "./Footer";
import Aos from "aos";
import Image4 from './image/Image4.jpg';
import Image5 from './image/Image5.jpg';
import Image6 from './image/Image6.png';
import './About.css';


function About(){
    useEffect(()=>{
        Aos.init();
    },[])
    return(
        <>
<h1 style={{color:"white", textAlign:"center"}}>About Us</h1>

<p data-aos='zoom-out' style={{fontSize:'larger',marginLeft:50, marginRight:50,color:"blue"}}>We are a Mobile Car Valeting and Detailing family run company based around the West Midlands, South Staffordshire and surrounding areas.

We have been running since April 2012 and have gained a significant number of regular customers from both private and business contracts.

We pride ourselves on customer satisfaction and will always provide what we believe to be the best products at the time, with products changing so quickly and so many new ones being made available we are constantly testing these as well as new methods to improve the service we provide.</p>

<h1 style={{color:"white",textAlign:"center"}}>We want to support you in becoming <br/>
the best version of yourself!</h1>

<h3 data-aos='fade-left' style={{marginLeft:30}}>By aiding our customers and franchisees <br/>
in building significant lives and freeing up their time!</h3>

<h3 data-aos='fade-left' style={{textAlign:"right",marginRight:30}}>Providing a reliable high quality service run by friendly <br/>
people who care about the work they do!</h3>

<h1 data-aos='zoom-out' style={{color:"white",textAlign:"center"}}>What we value at Fresh</h1>
<div className="contain">
<img src={Image4}/>
<p style={{color:"blue"}}><h2> Reliability</h2><br/>Forgot that you are picking up your partner’s parents from the airport tomorrow and your car is a total mess? Don’t worry – we got this!  If we book you in, we'll be there.</p>
<img src={Image5}/>

<p style={{color:"blue"}}><h2> Quality </h2><br/>We are committed to what we do.  Our team consists of car fanatics with an eye for detail, always providing a high quality valeting service. Leaving a job half done goes against what we believe in! </p>
<img src={Image6}/>
<h2></h2>
<p style={{color:"blue"}}> <h2>Fun </h2><br/>Rain, sun or snow - the day is what you make it. Our team aim to make the most of every day, keeping a positive attitude and focusing on delighting our customers. </p>
</div>
<Footer/>
        </>
    )
}
export default About