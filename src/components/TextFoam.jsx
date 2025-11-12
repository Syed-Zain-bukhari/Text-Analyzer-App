import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function TextFoam() {
const [text, setText] = useState("");


function handleUpClick() {
  let newText = text.toUpperCase();
  setText(newText);
}
function handlelowClick() {
  let newText = text.toLowerCase();
  setText(newText);
}
  return (
    <div>
      <div className="container my-3">        
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="fw-bold fs-4">Enter Text here to Annalyze</Form.Label>
            <Form.Control onChange={(e)=> setText(e.target.value)} as="textarea" value={text} rows={9} />
          </Form.Group>
        
          <Button onClick={handleUpClick} variant="primary" className="size-sm mx-1">Convert to uppercase</Button>
          <Button onClick={handlelowClick} variant="primary" className="size-sm mx-1">Convert to lowecase</Button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <h2>Time to Read</h2>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p> 

      </div>
      
    </div>
  );
}

export default TextFoam;
