import './App.css';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import Alert from './Components/Alert';
import React, { useState } from 'react'


export default function App() {
  
  const [alert,setalert]= useState(null)
  const showAlert=(msg)=>{
    setalert(msg)
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const [mode,setmode]= useState("Dark")

  const [style1,setstyle1]=useState({
        color:'black',
        backgroundColor:'rgb(213, 237, 248)'
      })

  const [style2,setstyle2]=useState({
        color:'black',
        backgroundColor:'white'
      })

  const Changemode=()=>{
    if(mode === "Dark"){
     setstyle1({
        color:'white',
        backgroundColor:'black'
      })
      setstyle2({
        color:'white',
        backgroundColor:'#03213b'
              })
              setmode("Light")
    }
    else{
      setstyle1({
      color:'black',
        backgroundColor:'rgb(213, 237, 248)'
      })
      setstyle2({
        color:'black',
        backgroundColor:'white'
              })
              setmode("Dark")
    }

  }
  return (
  <>
    <Navbar style={style1} mode={mode} Changemode={Changemode} title="TextUtils" nav1="Home" nav2="About" />
    <Alert alert={alert}/>
    <Textarea showAlert={showAlert} style={style2} />
  </>
  );
}

