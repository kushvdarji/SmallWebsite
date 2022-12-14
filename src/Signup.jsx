import React from "react"
import { Link } from "react-router-dom"
// import { NavLink, Route,BrowserRouter as Router, Routes } from "react-router-dom"
// import Home from "./Home"
function Signup() {
  return (
    <>
    <div className='login'>
        <div className='inner-login'>
            <h1><u>Signup</u></h1>
            <div className='login-text'>
                <form>
                    <p>
                        <label>Name : </label>
                        <input type="text" placeholder='Enter Your Name'/>
                    </p>
                </form>
                <form>
                    <p>
                        <label>Email : </label>
                        <input type="email" placeholder='Enter Your Email'/>
                    </p>
                </form>
                <form>
                    <p>
                        <label>Phone : </label>
                        <input type="number" placeholder='Enter Your Phone Number'/>
                    </p>
                </form>
                <form>
                    <p>
                        <label>Passw : </label>
                        <input type="password" placeholder='Enter Your password'/>
                    </p>
                </form>
                <small>Already A User : <Link to="/login" style={{color:"lightblue"}}>Login</Link></small><br/>
                <form style={{marginBottom:"15px"}}>
                    <Link to="/Signup/Home" style={{color:"black"}}><button className="submit" id="but">Submit</button> </Link>
                </form>
            </div>
        </div>
     </div> 
    </>
  )
}
export default Signup