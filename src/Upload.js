import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import "./App.css"
export default function Upload() {
    const [name, setName] = useState("")
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
            name:name,click:file
        }
        values.push(kush)
        localStorage.setItem("values",JSON.stringify(values))
        sessionStorage.setItem("values",JSON.stringify(values))

        alert("image uploaded")
    }
  return (
    <>
    <div>
      <Link to="/login/home">Back</Link>
      <br/>
      <br/>
      <form>
        Name : <input placeholder='Enter The Name' required onChange={(e)=>{setName(e.target.value)}} value={name}></input><br/> 
        <br></br>
        <div style={{display:'flex'}}>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    
            <span> File :</span><span> <input type="file" onChange={handleChange} accept="image/*" value={click} style={{cursor:"pointer"}} /></span> 
        </div>
        <br></br>
        <br></br>        
        <Link to="/login/home/upload/table"><button style={{padding:"10px 10px 10px 10px",borderRadius:"15%",}} id="but" onClick={handleClick}>Add</button>   </Link>    
         <br></br>
        <br></br>
        <br></br>
        <img src={file} alt="" onChange={(event)=>{setClick(event.target.value)}} 
          style={{height:"300px",width:"500px"}}
        />
      </form>
    </div>
    </>
  )
}
