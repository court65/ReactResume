import React from 'react'
import img from "../images/Court.jpg"
import ken from "../images/Ken.jpg"

const Header = () => {
  return (
//  About Me Section
<section id="aboutMe">
  <div className="about-container">
    <div className="about-section">
      <div className="img-container">
        <img src={img} alt="Court Evans" className="portrait"/>
      </div>
      <div className="about-text">
        <h2> About Me:</h2>
        I'm a Software Developer with extensive experience in Industrial and Manufacturing Engineering, construction and manufacturing project management and in real estate sales and property management. I have experience working with all levels and departments within organizations small and large. 
      </div>
    </div>
    <div className="sevices-content">
       <img src={ken} style={{width:"300px",height:"auto"}}alt="board wall"/> 
    </div>
  </div>
</section> 

  )
}



export default Header