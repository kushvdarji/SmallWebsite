import { Link } from "react-router-dom";
function Logout() {
  return (
    <>
    <div>
      <h1>Do YOU Really Want To Log Out</h1>
    </div>
    <div className='yes'>
    <button className='button1' id="but"><Link to="/login/home" style={{color:"black",fontWeight:"bolder",fontSize:"15px"}}>No</Link></button>
    <button className='button2' id="but"><Link to="/login" style={{color:"black",fontWeight:"bolder",fontSize:"15px"}}>Yes</Link></button>
    </div>
    {/* <button><Link to="/login">Login</Link></button> */}
    </>
 )
}
export default Logout;
