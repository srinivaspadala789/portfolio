import React, { useState, useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import "./BirthdayWish.css";

import cakeImg from "./Assets/cake2.jpeg";
import cakeCutImg from "./Assets/cake4.jpeg";
import personImg from "./Assets/kid.jpg";
import wishAudio from "./Assets/song3.mp3";

const BirthdayWish = ({ name = "Chellamma..❤️" }) => {
  const [isCut, setIsCut] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const audioRef = useRef(null);

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

  useEffect(() => {
    if (showMessage && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, [showMessage]);

  return (
    <div className={`reveal-container ${isCut ? "night-bg" : ""}`} {...handlers}>
      <audio ref={audioRef} src={wishAudio} preload="auto" />

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
          <div className="half left">
            <img src={cakeCutImg} alt="left slice" />
          </div>
          <div className="half right">
            <img src={cakeCutImg} alt="right slice" />
          </div>
        </div>
      )}

      {showMessage && (
        <div className="reveal-card">
          <img src={personImg} alt="person" className="profile-pic" />
          <h1>Happy Birthday {name}!</h1>
          <p>
            Ilanti puttinarojulu marenno jarupukovali Korukuntu.. Malli vache puttina rujuki nannu Mama ni cheyyalani Asisthu... Mee Annaya...❤️
          </p>
        </div>
      )}
    </div>
  );
};

export default BirthdayWish;
