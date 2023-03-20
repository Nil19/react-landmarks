import React, { useState } from "react"
import "./Card.css"

export default function Card({ frontSideTitle, backSideTitle, frontSideImage, backSideImage }) {
  const [isFront, changeFace] = useState(true);

  function handleClick() {
    changeFace(oldState => !oldState);
  }

  const text = isFront ? frontSideTitle : backSideTitle;
  const sideClass = isFront ? "front" : "back";
  const classList = `flash-card ${sideClass}`

  //Pass down image props from App.jsx
  //Create props for backSideText to display on back of cards
  //Adjust CSS for images etc 
  
  return (
    <div className={classList} onClick={handleClick}>
      {text}
      <img src={isFront ? frontSideImage : backSideImage} width="200px"/>

      {!isFront ? <p>Example text here</p> : null}
    </div>
  );
}