import { useEffect, useState } from 'react';
import './Offers.css';
import Image2 from './image/Image2.png';
import Image3 from './image/Image3.png';
import Aos from "aos";
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';


function Offers(){
    useEffect(()=>{
        Aos.init();
    },[]) 
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [mobile,setMobile]=useState("");
    const [error,setError]=useState("");
    const submit=async()=>{
        let result=await fetch("http://localhost:8000/detail",{
            method:"post",
            body: JSON.stringify({email,mobile}),
            headers:{
            "Content-Type":"application/json"    
            }
        });
        result=await result.json();
        alert("information sent")
        if(!email){
            setError(true);
            return false;
        }
        navigate("/");
    }
    return(
        <div className="article">
       <img src="https://www.carcility.com/blog/wp-content/uploads/2020/06/steam-car-wash.jpg" className="picture"/>
        <h1  className="header">Offers</h1>
        
        <div className='hold'>
        <h1 style={{color:"white",textAlign:'center'}}>Specical Offers</h1>
<h3>Welcome to the offers page… where you’ll be able to pick up the best offers, vouchers and deals for Royal Carwash. Simply print off the vouchers below and bring them into the branch with you, when you get your car cleaned, or show the cashier the voucher on your phone and that’s it.</h3>
<img className="jin" src={Image2}/>
<img className="jin" src={Image3}/>
<h2 className='hed2' data-aos='zoom-in'>Disinfection clean and wipe down service <br/>
£7 with any service</h2>
<h2 data-aos='zoom-in'>SENIOR WEDNESDAYS</h2>
<h3>Every Wednesday the over 60’s can save £2 on any outside only clean and £3 on any inside and out clean (including a Mini Valet). It’s our way of looking after our OAP’s. Simply pop along to your local branch on a Wednesday and ask for your Senior Discount.</h3>
<div className="container">
<h1 data-aos='flip-left'>Get news of latest offers</h1>
<p>Enter your email address to recieve updates on our latest offers, deals and membership schemes.
<br/>
<br/>
An email address at least is required.
<br/>
<br/>
You can unsubscribe at any time. View our Privacy policy here.</p>
<br/>
<input type="text" placeholder="Enter Email Address" value={email} onChange={(e)=>setEmail(e.target.value)}/>
{error&&!email && <span>required</span>}
<br/>
<input type="text" placeholder="Mobile Number" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
<br/>
<br/>
<button onClick={submit}>Get news of special offers</button>
</div>
</div>
<Footer/>
        </div>
    )
}
export default Offers