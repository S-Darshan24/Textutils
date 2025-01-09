import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [darkstyle, setdarkstyle] = useState({
    color: "black",
    backgroundColor: "white"
  });
  const [btnText, setbtnText] = useState("Dark")

  const alldark = () => {
    if (darkstyle.color === "white") {
      setdarkstyle({
        color: "black",
        backgroundColor: "white"
      });
      document.body.style.backgroundColor = "white";
      document.body.style.color = 'black';
      document.querySelector('.darkmode').style.backgroundColor = 'black'; 
      document.querySelector('.darkmode').style.color = 'white';
      setbtnText("Dark");

    } else {
      setdarkstyle({
        color: "white",
        backgroundColor: "#232f4f"
      });
      document.body.style.backgroundColor = '#232f4f';
      document.body.style.color = 'white';
      document.querySelector('.darkmode').style.backgroundColor = 'white'; 
      document.querySelector('.darkmode').style.color = 'black';
       setbtnText("Light");
    }
  }
  return (
     <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}> 
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> 
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">about</Link>
            </li>
            <button type="button" className="darkmode" onClick={alldark}>{btnText}</button>
          </ul>
        </div>
      </div>
    </nav>
  )
}