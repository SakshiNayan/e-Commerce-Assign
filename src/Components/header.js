import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"



const Header=()=> {
  
  return (
    <>
    <div id="head"><h1>AVAILABLE PRODUCTS</h1></div>
    <div>
        <select>
            <option  value="/rated">Top rated Category</option>
            <option>Top sold Category</option>
        </select>
    </div>
    </>
      
    
  )
}

export default Header
