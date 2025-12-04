import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./BirthdayWish.css";

import cakeImg from "./Assets/cake2.jpeg";
import cakeCutImg from "./Assets/cake2.jpeg";
import personImg from "./Assets/kid.jpg";

const BirthdayWish = ({ name = "Chellamma..❤️" }) => {
  const [isCut, setIsCut] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleCut(),
    onSwipedRight: () => handleCut(),
    trackMouse: true,
  });

  const handleCut = () => {
    if (!isCut) {
      setIsCut(true);
      setTimeout(() => setShowMessage(true), 1200);
    }
  };

  return (
    <div className={`reveal-container ${isCut ? "night-bg" : ""}`} {...handlers}>
      {isCut && (
        <div className="sparkle-container">
          {[...Array(80)].map((_, i) => (
            <div key={i} className="sparkle" style={{ "--i": Math.random() }} />
          ))}
        </div>
      )}

      {!isCut && (
        <div className="cake-section" onClick={handleCut}>
          <img src={cakeImg} alt="cake" className="cake-whole" />
          <p className="swipe-text">Swipe to cut the cake 🎂</p>
        </div>
      )}

      {isCut && !showMessage && (
        <div className="cake-halves">
          <img src={cakeCutImg} alt="left half" className="half left" />
          <img src={cakeCutImg} alt="right half" className="half right" />
        </div>
      )}

      {showMessage && (
        <div className="reveal-card">
          <img src={personImg} alt="person" className="profile-pic" />
          <h1>Happy Birthday {name}!</h1>
          <p>Ilanti puttinarojulu marenno jarupukovali, malli vache puttina rujuki nannu mama ni cheyyalani korukuntu ...Mee Annaya❤️</p>
        </div>
      )}
    </div>
  );
};

export default BirthdayWish;
