import React ,{useState} from 'react'
import { Link } from 'react-router-dom';
function Storage() {
const [language, setLanguage] = useState("");
const [framework, setFramework] = useState("");
function saveLanguage()
{
  var courses=JSON.parse(localStorage.getItem("courses") || "[]");
  var course={
    language:language,
    framework:framework
  }
  courses.push(course)
  localStorage.setItem("courses",JSON.stringify(courses))
}
  return (
    <div>
      <form className="App" ><br/><br/>
         Language : 
         <input id="kush" type="text" required value={language} onChange={(e)=>{setLanguage(e.target.value)}}></input><br/><br/>
          FrameWork : 
          <input id="dipen" type="text" required value={framework} onChange={(e)=>{setFramework(e.target.value)}}></input><br/><br/>
          <button id="but" onClick={saveLanguage} type="button">Submit</button>
          <button style={{padding:"10px 10px 10px 10px",borderRadius:"15%",}} id="but"><Link to="/login/home/value">Submit</Link></button>
      </form>
    </div>
  )
}
export default Storage;