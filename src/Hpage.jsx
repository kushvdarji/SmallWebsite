import React from 'react'
import { NavLink} from 'react-router-dom'
import Apps from "./Apps";
import Storage from './Storage';
function Hpage() {
  return (
    <>
    <div className='hl'>
    <NavLink to="/login/home/about" style={{color:"white",textAlign:"left"}} className="about">About</NavLink>
    <NavLink to="/logout" style={{color:"white"}} >Logout</NavLink>
    </div>
    <Apps/>
    <Storage/>
    </>
  )
}
export default Hpage;
