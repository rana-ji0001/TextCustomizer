import React  from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',


    }
  return (
    <div className="container">
        <h1 className='my-3' style={{color: props.mode === 'dark'?'white':'#042743',}} >About Us</h1>
            <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                <strong>✨ Features:</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                Convert text to UPPERCASE or lowercase.Remove extra white spaces.Copy text with one click.Live word and character counter.Responsive and clean UI built with React Alerts for user actions (e.g., "Text copied", "Converted to Uppercase")
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                <strong>🚀 Tech Stack:</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                React.js HTML, CSS, JavaScript Optional: Bootstrap (if you're using it)
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                <strong>✅ Browser Compatibility</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                TextCustomizer is fully compatible with all modern browsers, including Chrome, Firefox, Edge, and Safari, ensuring a smooth experience across platforms.
            </div>
            </div>
        </div>
        </div>
        
    </div>
  )
}
