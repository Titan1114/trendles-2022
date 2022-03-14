import React from 'react'

export const Content1 = () => {
    let contentStyle={
        minHeight:"100vh",
    }
    let hStyle={
      fontSize:"68px",
      color:"white",
      margin:"0px 15% 0 15%",
      fontFamily:"Fondamento"
    }
    let pStyle={
        color:"white",
        margin:"0px 25% 0 25%",  
        fontSize:"20px",     
    }
  return (
    <>
    <div className='container' style={contentStyle}>
      <p className="h2 mt-4" align="center" style={hStyle}>Trendles</p>
      <p align="center" className='mt-2 ' style={pStyle}>The Trendles Club organizes and promotes various personality building activities and provides enough avenues under multiple domains to students to facilitate the pursuit of their dreams. </p>
    </div>

    </>
  )
}
