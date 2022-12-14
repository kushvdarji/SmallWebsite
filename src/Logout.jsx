import { Link } from "react-router-dom";
function Logout() {
  return (
    <>
    <div>
      <h1>Do YOU Really Want To Log Out</h1>
    </div>
    <div className='yes'>
    <Link to="/login/home" style={{color:"black",fontWeight:"bolder",fontSize:"15px"}}><button className='button1' id="but" style={{padding:"10px 10px 10px 10px"}}>No</button></Link>
    <Link to="/login" style={{color:"black",fontWeight:"bolder",fontSize:"15px"}}><button className='button2' id="but" style={{padding:"10px 10px 10px 10px"}}>Yes</button></Link>
    </div>
    {/* <button><Link to="/login">Login</Link></button> */}
    </>
 )
}
export default Logout;
