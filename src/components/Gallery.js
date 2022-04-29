import React from 'react';
import img1 from "../images/nurses.jpeg";
import img2 from "../images/chf.jpeg";
import img3 from "../images/foodbank.jpeg";
import img4 from "../images/walkathon2021.jpeg";
import img5 from "../images/groupevent.jpeg";
import img6 from "../images/xmas.jpeg";
import img7 from "../images/cfevent.jpeg";
import img8 from "../images/event.jpeg";
import img9 from "../images/food.jpeg";


const Gallery = ({title}) => {
  return (
    <div className='gallery'>
    <h2 className="title">{title}</h2>
      <div className="grid-container">
        <div className="photo1">
          <img src={img1} alt="" />
        </div>
        <div className="photo2">
        <img src={img2} alt="" />
        </div>
        <div className="photo3">
          <img src={img3} alt="" /></div>
        <div className="photo4">
        <img src={img4} alt="" />
        </div>
        <div className="photo5">
          <img src={img5} alt="" /></div>
        <div className="photo6">
        <img src={img6} alt="" />
        </div>
        <div className="photo7">
          <img src={img7} alt="" /></div>
        <div className="photo8">
          <img src={img8} alt="" /></div>
        <div className="photo9">
        <img src={img9} alt="" />
        </div>
      
      </div>

    </div>
  )
}

export default Gallery