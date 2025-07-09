import React,{useState} from 'react'
import './textarea.css'
export default function Textarea(props) {

  const [text,settext]=useState("")
  function Handlechange(e){
    settext(e.target.value)
    console.log(text.split(" ").length)
  }
  function ConverttoUp(){
   let new_text= text.toUpperCase()
   settext(new_text)
   props.showAlert("Text converted to Uppercase!")
  }
  function ConverttoLo(){
   let new_text= text.toLowerCase()
   settext(new_text)
   props.showAlert("Text converted to Lowercase!")
  }
  function copy(){
    navigator.clipboard.writeText(text)
    props.showAlert("Text copyed to clipboard!")
  }
  function clear(){
    settext("")
    props.showAlert("Text cleared!")
  }
  return (
    <>
      <div className='style0' style={props.style}>
        <h1>Enter your text below:</h1>
        <textarea value={text} onChange={Handlechange} cols="100" rows="16"></textarea>
        <div className="btn-s">
          <button type="button" onClick={ConverttoUp} className="btn btn-primary mx-2">Convert to UpperCase</button>
          <button type="button" onClick={ConverttoLo}  className="btn btn-danger mx-2">Convert to LowerCase</button>
          <button type="button" onClick={copy} className="btn btn-warning mx-2">Copy Text</button>
          <button type="button" onClick={clear} className="btn btn-info mx-2">Clear Text</button>
        </div>
        <div className='my-3'>
          <h2>Text Summary</h2>
          <p>{`${text.length} characters,${text ==="" ? "0" : text.split(" ").length} words`}</p>
          <h2>Preview</h2>
          <p className='preview-2'>{text}</p>
        </div>
      </div>
    </>
  )
}
