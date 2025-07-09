import React,{useState} from 'react'
import './navbar.css'


export default function Navbar(props) {
   
    return (
        <>
            <header style={props.style}>
                <nav>
                    <div className="left2">
                        <ul>
                            <li><h3>{props.title}</h3></li>
                            <li>{props.nav1}</li>
                            <li>{props.nav2}</li>
                        </ul>
                    </div>
                    <div className="right2">
                        <div className="form-check form-switch">
                                <label className="form-check-label" htmlFor="checkNativeSwitch">
                                {`Enable ${props.mode} mode`}
                            </label>
                            <input onClick={props.Changemode} className="form-check-input" type="checkbox" value="" id="checkNativeSwitch" switch />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
// console.log(obj[0])