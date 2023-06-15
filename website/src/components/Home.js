import './Stylesheet.css';
import "aos/dist/aos.css";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AOS from 'aos';
import Footer from "./Footer";
import ImageSlider from 'react-auto-image-slider'
import {Slide} from 'react-auto-image-slider'
import { increment } from '../redux/counterSlice';

function Home(){
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
console.log(state);
    useEffect(()=>{
        AOS.init();
    },[])
return(
    <>
      <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
    <ImageSlider effectDelay={200} autoPlayDelay={1000}>
    <Slide>
    <img src="https://media.product.which.co.uk/prod/images/original/gm-ecd5ebb4-cf37-4411-9901-57826ab1b28a-header-15.jpeg"/>
    </Slide> 
    <Slide>
    <img src="https://columbiatireauto.com/wp-content/uploads/2020/02/Pros-and-Cons-Soft-Touch-Car-Wash-vs.-Touch-Free-Car-Wash.png"/>
      </Slide>
      <Slide>
    <img src="https://thumbs.dreamstime.com/b/car-detailing-polishing-concept-hands-professional-car-service-male-worker-orbital-polisher-polishing-car-detailing-179172829.jpg"/>
      </Slide>
    </ImageSlider>
    <h1 data-aos='fade-up' className="had1">'Working together to make our customers smile'</h1>
    <p data-aos='flip-left' className="par1"> Welcome to Royal, the Uk's home of car washing and valeting. we are passionate about cleaning cars and royal has built a commanding presence in the UK car wash market. we have done this though  a clear core purpose of "working together to make our customers smile"..and our values are what underpin the processes that sit behind this:</p>
    <h1  data-aos='fade-up' className="had1"> New Ideas | Family | Respect | Pride | Honesty</h1>
    <p data-aos='flip-left' className="par1">We are proud of our easy-to-use customer service, and we work with our clients and partners to give our customers an industry-leading service experience and a wide range of professional yet affordable valeting choices.
<br/>
We focus on compliance, training and auditing to ensure that royal  provides a legal and ethical service.
<br/>
We support our Franchise Partners during their time with us through coaching, mentoring, on-site visits and training. We believe that our continuous support is what ensures our excellent customer service and industry-leading position and we have a dedicated team on the road visiting our sites; our team travels more than 1 million miles a year supporting our Franchise Partners, customers and clients.
<br/>
Compliance is the backbone of our business and gives reassurance to our high-profile clients and customers. Our robust processes and policies underpin every part of what royal does from keeping our customers and employees healthy and safe on site, to disposing of the waste water responsibly, to ensuring that every valeter is paid at least the National Minimum / Living Wage for all time worked.
<br/>
We have a proven track-record in delivering large-scale roll-outs as well as customised offerings to suit bespoke requirements. We offer a range of commercialisation, fleet account and sponsorship opportunities as well.</p>
   <hr/>
 <Footer/>  
    </>
    
)
}

export default Home