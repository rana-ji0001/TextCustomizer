// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";


function App() {
  const [bgColor,setbgColor] = useState("white");
  // useEffect(() => {document.body.style.backgroundColor = bgColor},[bgColor]);
  const changeColor = (color) => {
    if(bgColor !== color){
      setbgColor(color);
      document.body.style.backgroundColor = color
      showAlert(`${color} Mode has been enabled`,"success");
    }else{
      setbgColor('white');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled","success");
    }
  }
  const [mode,setMode] = useState('light');
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
    }
  }
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type:type,

    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} changeColor={changeColor}/>
    <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>

          <Route exact path="/" element={<TextForm heading="TextCustomizer-Customise your Text" mode={mode}  showAlert={showAlert}/> }/>
        </Routes>
      
       {/* <TextForm heading="Enter the Text to analyze below" mode={mode}  showAlert={showAlert}/> */}
    </div>
      <Alert alert={alert}/>

    </Router>
    </>
  );
}

export default App;
