import { Link } from "react-router-dom";
import "./App.css";
function Login() {
  return (
    <>
     <div className='login'>
        <div className='inner-login'>
            <h1><u>Login</u></h1>
            
            <div className='login-text'>
                <form>
                    <p>
                        <label>Email : </label>
                        <input type="email" placeholder='Enter Your Email'/>
                    </p>
                </form>
                <form>
                    <p>
                        <label>Passw : </label>
                        <input type="password" placeholder='Enter Your password'/>
                    </p>
                </form>
                <small>New User : <Link to="/signup" style={{color:"lightblue"}}>Signup</Link> </small>
                <form style={{marginBottom:"15px"}}>
                    <button className="submit" id="but"><Link to="/Login/Home" style={{color:"black",fontSize:"20px"}}>Submit</Link></button>
                </form>
            </div>
        </div>
     </div> 
    </>
  )
}
export default Login;
