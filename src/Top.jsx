import React from 'react';
import { BrowserRouter,Link} from 'react-router-dom';

import "./App.css";
export default function Top() {
    var tog =true
    const push =() =>
    {
        if(tog===true)
        {
            var k =document.getElementById("nav")
            k.style.display="none";
            var s=document.getElementById("side")
            s.style.display="block";
            tog=false;
        }
        else{
            var u=document.getElementById("nav")
            u.style.display="flex";
            var h=document.getElementById("side")
            h.style.display="none";
            tog=true;
        }
    }
  return (
    <>
    <div>
        <BrowserRouter>
            <div className='router' id='nav' style={{justifyContent:"space-around"}}>
            <Link to="/login/home/about" className="hello">About</Link>
            <Link to="/login/home/contact" className="hello">Contact</Link>
            <Link to="/login/home/home" className="hello">Home</Link>
            <Link to="/login/home/help" className="hello">Help</Link>
            </div>
        </BrowserRouter>
    </div>
        <button className='buttonok' onClick={push}>Okkkkk</button>
    </>
  )
}