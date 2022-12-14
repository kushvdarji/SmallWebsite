
import React, { useState } from "react";
  
function Audio() {
    const [file, setFile] = useState();
    function handleChange(e) {
        // console.log(e.target.files[0]);
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        return new Promise(resolve => {
            reader.onloadend = () => {
                console.log(reader.result);
                resolve(reader.result);
                setFile(reader.result)
            };
        });
        // setFile(URL.createObjectURL(e.target.files[0]));

    }
    // var binary =convertDataURITo
    return (
        <div className="App">
            <h2>Add Audio : </h2>
            <input type="file" onChange={handleChange} accept="audio/*"/>
            <br></br>
            <br></br>
            <audio  src={file} controls autoPlay/>
            <br></br>
            <br></br>
            <button>Upload</button>
        </div>
    );
}
export default Audio;
