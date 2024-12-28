import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'


export default function Navbar(props) {

  const [darkstyle, setdarkstyle] = useState({
    color: "white",
    backgroundColor: "black"
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
      props.showalert(" Light mode has been enabled","success");
      //change title for intraval 
      // setInterval(() =>{
      //   document.title = 'textutils is amazing'
      // }, 2000);
      // setInterval(() =>{
      //   document.title = ' install textutils Now'
      // }, 1500);
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
      props.showalert(" Dark mode has been enabled","success");
      // document.title = 'Textutils - Dark mode'
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


// Navbar.propTypes = {
//   titel: PropTypes.string.isRequired,
//   abouttext: PropTypes.string.isRequired
// }


// Navbar.defaultProps = {
//   title: 'new title',
//   abouttext: 'new abouttext'
// }