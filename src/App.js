  import './App.css';
  import Navbar from './Components/Navbar'
  import Textform from './Components/Textform';
  import About from './Components/About'
  import Alert from './Components/Alert';
  import React, { useState } from 'react';
  import {
    BrowserRouter as Router,
    Routes,   
    Route
  } from "react-router-dom";


  function App(props) {
    const [alert, setAlert] = useState(null);

    const showalert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1200);
    }
    return (
      <>
        <Router>
          <Navbar title="TextConvert" showalert={showalert} />
          <Alert alert={alert} />
          <div className="container my-3">
            <Routes>
              <Route path="/about" element={<About darlmode={props.alldark} />} />
              <Route path="/" element={<Textform h5 heading="Convrt Your Text" showalert={showalert}/>}/>
            </Routes>
          </div>
        </Router>
      </>
    );
  }

  export default App;
