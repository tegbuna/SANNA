import React from 'react';
import largeLogo from "../images/sanna_logo.png";



const Landing = () => {
  return (
    <div className='hero' id='home'>
    <div className="main-hero">
      <div className="landing-content">
        <div className="grid-container">
            <p className='motto'>Healing our community together.</p>
            <div className="sanna-logo">
            <img src={largeLogo} alt="logo" />
            </div>  
            <div className="sanna-mobile-logo">
            <img src={largeLogo} alt="logo" />
            </div>
            <div className="email">
              <input type="email" name="email" id="email" />
              <button type="submit">Join Us!</button>
            </div>
            <div className="quotation">
              <p >Enter your email and join us today!</p> 
            </div>
        </div>
      </div>
    </div>

  </div>
  )
}

export default Landing
