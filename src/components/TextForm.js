import React ,{useState} from 'react'

export default function TextFrom(props) {
  const[text,setText] = useState('');
  const [copied, setCopied] = useState(false);
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newTxt = text.toUpperCase();
    setText(newTxt);
    props.showAlert("Converted to uppercase","success");
  }
  const handleDownClick = () => {
    // console.log("Uppercase was clicked");
    let newTxt = text.toLowerCase();
    setText(newTxt);
    props.showAlert("Converted to lowercase","success");
  }
  const handleOnChange = (evt) => {
    // console.log("onchange");
    setText(evt.target.value);
  }
  const handleSpace = () => {
    let nextxt = text.split(/[ ]+/)
    setText(nextxt.join(" "));
  }
  
  //can update by using setText('akbfbsda') function and update text
  // setText('New Text');
  return (
    <>
    <div className='container' style={{color: props.mode === "dark" ? "white" : "black",}}>
      <h1>{props.heading}</h1>
        <div className="mb-3 position-relative">
            <textarea className="form-control pe-5" value={text} id="myBox" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white',color: props.mode === "dark" ? "white" : "black",}} rows="7"></textarea>
            {text.trim() && (<i
            className="fa-solid fa-trash position-absolute"
            style={{
              top: '18px',
              right: '12px',
              fontSize: '18px',
              cursor: 'pointer',
            }}
            onClick={() => {setText(""); props.showAlert("Deleted","success")}}
          ></i>)}
           {text.trim() && (<i
            className="fa-solid fa-copy position-absolute"
            style={{
              bottom: '18px',
              right: '12px',
              fontSize: '18px',
              cursor: 'pointer',
            }}
            onClick={() => {
              navigator.clipboard.writeText(text);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000); // Hide after 2 seconds
            }}
          ></i>)} 
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert To Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleDownClick}>Convert To Lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleSpace}>Remove Spaces</button>

    </div>
    <div className="container my-2" style={{color: props.mode === "dark" ? "white" : "black",}}>
        <h2>Your Text summary </h2>
              <p><b>{text.trim().split(/\s+/).filter(word => word.length > 0).length
        } words and {text.length} characters</b></p>
              <p><i>{0.008 * text.trim().split(/\s+/).filter(word => word.length > 0).length
        } minutes read</i></p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "For God's Sake Write Something Up there..."}</p>
      </div>
        {copied && (
          <div
            className="alert alert-primary alert-dismissible fade show position-fixed"
            style={{
              bottom: "20px",
              left: "20px",
              zIndex: 9999,
              padding: "10px 20px",
              minWidth: "200px"
            }}
            role="alert"
          >
            Text copied to clipboard!
          </div>
          )}
    </>
  )
}
