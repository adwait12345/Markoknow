import React from 'react'
import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './page1.css'
export default function Page1() {
     const [city , setCity] = useState("")

  const Clicked = ()=>{
     console.log(city)
  }
 



  return (
    <>
    <div className="container">
        <h3>Area he visited yesterday for marketing</h3>
        <input  type="text" placeholder=''onChange={e => setCity(e.target.value)} />
        
        <Link to={{ 
  pathname: `/${city}`, 

}}><button onClick={Clicked}>Next</button></Link>
    </div>
    
    </>
  )
}
