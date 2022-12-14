import React from 'react'
import { NavLink} from 'react-router-dom'
import Apps from "./Apps";
import Storage from './Storage';
import Audio from './Audio';
function Hpage() {
  return (
    <>
    <div className='hl'>
    <NavLink to="/login/home/about" style={{color:"white"}} className="about">About</NavLink> &nbsp;
    <NavLink to="/logout" style={{color:"white"}} >Logout</NavLink>
    </div>
    <Apps/>
    <Storage/>
    <Audio/>
    </>
  )
}
export default Hpage;
