import { BrowserRouter as Router ,Route,Routes} from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Logout from "./Logout"
import "./App.css";
import About from './About';
// import Contact from './Contact';
// import Help from './Help';
// import Home from './Home';
import Hpage from "./Hpage";
import Value from "./Value";
function Nav ()
{
    return(
        <>
            <Router>           
                <Routes>
                    <Route path="/signup" element={<Signup/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/login/home" element={<Hpage/>}></Route>
                    <Route path="/signup/home" element={<Hpage/>}></Route>
                    <Route path="/logout" element={<Logout/>}></Route>
                    <Route path='/login/home/about' element={<About/>}/>
                    <Route path="/login/home/value" element={<Value/>}></Route>
                </Routes>
            </Router>
        </>
    );
}
export default Nav;