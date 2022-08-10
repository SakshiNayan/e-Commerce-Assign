import React, { useState } from 'react'
import "./toprated.css"
import Header from "./header";
const  TopRated=()=> {
    const [data, setData]=useState([])
    React.useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
          .then(res=>res.json())
          .then(json=> setData(json))
          .then(console.log(data))
        }, [])
 
    return (
    <>
    <Header/>
    {data.map((data)=>{
        return(
            <div id='cardBody'>
                <div className='itemcard'>
                    <button><img src={data.image} alt=''  width={200}  height={200}/></button>
                </div>
            </div>
        )
    })}
    
      
    </>
  )
}

export default TopRated
