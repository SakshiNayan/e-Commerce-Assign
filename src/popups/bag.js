import React, { useState } from 'react'

function Bag(props) {
  //const [item , setItem] = useState("")
  return (
    <>
      <div id='bagPg'>
        <div id="bagcard">
            <p>{props.title}</p>
            <span><button className="close-B"><b>X</b></button></span>
            <img src={props.image} alt=''/>

        </div>
      </div>
    </>
  )
}

export default Bag
