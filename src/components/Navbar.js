import React from 'react';
import propTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
          <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid" >
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
              <Link className="nav-link" to="/about">About</Link>
            </li>

          </ul>
          <div className="color-palette" style={{display: 'flex',
              gap: 5,
              padding: 20,}}>
            <div className="color"  style={{backgroundColor: 'red', width:20,height:20,borderRadius:'200%',}}  onClick={() => props.changeColor('red')}></div>
            <div className="color" style={{backgroundColor: 'blue', width:20,height:20,borderRadius:'200%',}} onClick={() => props.changeColor('blue')}></div>
            <div className="color" style={{backgroundColor: 'green', width:20,height:20,borderRadius:'200%',}} onClick={() => props.changeColor('green')}></div>
            <div className="color" style={{backgroundColor: 'yellow', width:20,height:20,borderRadius:'200%',}} onClick={() => props.changeColor('yellow')}></div>
          </div>

            <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`} >
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
                <label className="form-check-label" for="switchCheckDefault">Enable {props.mode === 'light'?'dark':'light'} Mode</label>
            </div>
        </div>
      </div>
    </nav>
  );
}


Navbar.propTypes = {
    title: propTypes.string,

}
Navbar.defaultProps = {
    aboutText : "about us",
}