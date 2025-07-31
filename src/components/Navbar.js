import React from 'react';
import propTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
          <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid" >
        <Link className="navbar-brand" to="/">{props.title}</Link>
        {/* <p className='navbar-brand mt-3'>{props.title}</p> */}
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
            <div className="color"  style={{backgroundColor: 'rgba(230, 93, 106, 1)', width:20,height:20,borderRadius:'20%',}}  onClick={() => props.changeColor('rgba(230, 93, 106, 1)')}></div>
            <div className="color" style={{backgroundColor: 'rgba(39, 87, 149, 1)', width:20,height:20,borderRadius:'20%',}} onClick={() => props.changeColor('rgba(39, 87, 149, 1)')}></div>
            <div className="color" style={{backgroundColor: 'rgba(5, 99, 77, 1)', width:20,height:20,borderRadius:'20%',}} onClick={() => props.changeColor('rgba(5, 99, 77, 1)')}></div>
            <div className="color" style={{backgroundColor: 'rgba(137, 142, 27, 1)', width:20,height:20,borderRadius:'20%',}} onClick={() => props.changeColor('rgba(137, 142, 27, 1)')}></div>
          </div>

            <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`} >
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
                <label className="form-check-label" htmlFor="switchCheckDefault">Enable {props.mode === 'light'?'dark':'light'} Mode</label>
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