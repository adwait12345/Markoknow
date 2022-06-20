import React from 'react'
import './page2.css'
import { useParams } from "react-router";

export default function Page2() {
    const { city } = useParams();
    
  return (
    <>
    <div className="wrapper">
        <h1>Area he visited for marketing</h1>
        <h3>{city}</h3>
    </div>
    </>
  )
}
