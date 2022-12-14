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
import Call from "./Call";
import Upload from "./Upload";
// import Addition from "./Addition";
import Table from "./Table";
import Cardi from "./Cardi";
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
                    <Route path='/signup/home/about' element={<About/>}/>
                    <Route path="/login/home/value" element={<Value/>}></Route>
                    <Route path="/signup/home/value" element={<Value/>}></Route>
                    <Route path="/login/home/call" element={<Call/>}></Route>
                    <Route path="/signup/home/call" element={<Call/>}></Route>
                    <Route path="/login/home/upload" element={<Upload/>}></Route>
                    <Route path="/login/home/upload/table" element={<Table/>}></Route>
                    <Route path="login/home/cardi" element={<Cardi/>}></Route>
                </Routes>
            </Router>
        </>
    );
}
export default Nav;