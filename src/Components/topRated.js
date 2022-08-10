import React, { useState } from 'react'
import "./toprated.css"
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
