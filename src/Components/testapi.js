import React, { useState } from 'react'
// import axios from "axios";
// import faker from "faker";

const Testapi=()=> {
    const [data, setData]=useState("")
    React.useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
          .then(res=>res.json())
          .then(json=> setData(json))
          .then(console.log(data))
        }, [])
  
    return (
    <>
      <h4>testing</h4>
    </>
  )
}

export default Testapi
