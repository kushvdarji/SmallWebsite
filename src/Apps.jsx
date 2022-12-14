
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css"
function App() {
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    const [click, setClick] = useState("");
    
    const handleClick=(e)=>
    {
        var values=JSON.parse(localStorage.getItem("values")||"[]")

        var kush={
            click:file
        }
        values.push(kush)
        localStorage.setItem("values",JSON.stringify(values))
        sessionStorage.setItem("values",JSON.stringify(values))

        alert("image uploaded")
    }
    
    return (
        <div className="App">
            <h2>Add Image : </h2>
            <input type="file" onChange={handleChange} accept="image/*" value={click} required style={{cursor:"pointer"}} />
            <img src={file}  onChange={(event)=>{setClick(event.target.value)}}
             style={{height:"150px",width:"200px"}} />
            <br></br>
            <br></br>
            <Link to="/login/home/upload"> <button id="but" onClick={handleClick}>Upload</button></Link>
            {/* <Link to="/login/home/upload"><button id="but">Next</button></Link> */}
        </div>
    );
}
export default App;