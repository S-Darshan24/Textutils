import React, { useState } from 'react'



export default function Textform(props) {

    const upclick = () => {
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showalert(" Converted to uppercase" , "success");
    }

    const loclick = () => {
        let newtext2 = text.toLowerCase();
        settext(newtext2);
        props.showalert(" Converted to LowerCase" , "success")
    }

    const cleartext = () => {
        let newtext3 = "";
        settext(newtext3);
    }

    const copytext = () => {
       
        navigator.clipboard.writeText(text);
        
        props.showalert(" Copied to Clipboard!" , "success");

    }
    const extraspeac =() =>{
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(" "))
        props.showalert(" Remove exterSpaces" , "success")
    }

    const onchange = (event) => {
        settext(event.target.value);
    }
    const [text, settext] = useState("")


    return (
        <div>
            <h1>{props.heading}</h1> 
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={onchange} id="mybox" rows="6"></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary" onClick={upclick}>Convert to UpperCase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={loclick}>Convert to lowerCase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={cleartext}>Clear Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={copytext}>Copy Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={extraspeac}> Remove Extra Speac</button>
           

            <div className="container my-4">
                <h3>Your Text Summary</h3>
                <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <h3 className='preview'>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
                <h5> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes tead the wors</h5>
            </div>
        </div>
    )
}