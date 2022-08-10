import React, { useState } from 'react'

const  TopSold=()=> {
    const [data, setData]=useState("")
    React.useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
          .then(res=>res.json())
          .then(json=> setData(json))
          .then(console.log(data))
        }, [])
 
    return (
    <>
    <div id='row1'>
        <div><img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt=""/></div>
        <div><img src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" alt="" /></div>
        <div><img src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" alt="" /></div>
        <div> <img src="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" alt="" /></div>
        <div><img src="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg" alt="" /></div>
      </div>
      <div id='row2'>
        <div><img src="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg" alt="" /></div>
        <div><img src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" alt="" /></div>
        <div><img src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg" alt="" /></div>
        <div><img src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg" alt="" /></div>
        <div><img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt="" /></div>
      </div>
      
    </>
  )
}

export default TopSold
