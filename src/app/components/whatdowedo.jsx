import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import GoogleMapComponent from "./GoogleMapComponent";
import "./whatdowedo.css";
import GoogleMapComponent from "./GoogleMapComponent";

const positiveWords = [
  "YES!",
  "Absolutely!",
  "Definitely!",
  "For Sure!",
  "Certainly!",
  "Indeed!",
  "Affirmative!",
  "LightSaber Brrr",
];

const HoverText = ({ text }) => {
  const [hover, setHover] = useState(false);
  const [randomWord, setRandomWord] = useState("");
  useEffect(() => {
    if (hover) {
      const randomIndex = Math.floor(Math.random() * positiveWords.length);
      setRandomWord(positiveWords[randomIndex]);
    }
  }, [hover]);
  return (
    <span
      className="whatmaybe"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span className={`original ${hover ? "hidden" : ""}`}>{text}</span>
      <span className={`overlay ${hover ? "visible" : ""}`}>{randomWord}</span>
    </span>
  );
};

const Whatdowedo = () => {
  return (
    <div className="whatdowedomain">
      <div className="whatuppercolm">
        <div className="whatleft">What do we Do</div>
        <div className="whatright">
          <span className="whatleftspan">Hackathons</span>
          <span className="whatleftspan">Open Source</span>
          <span className="whatleftspan">Data Science</span>
          <span className="whatleftspan">And Much More!!</span>
        </div>
      </div>
      <div className="whatlowercolm">
        <div className="whatlowleft">
          <GoogleMapComponent />
        </div>
        <div className="whatlowright">Where Can You Find Us</div>
      </div>
      <div className="whatuppercolm">
        <div className="whatleft">Should You Join Us</div>
        <div className="whatright">
          <HoverText text="Maybe?" />
          <HoverText text="Sure Why Not?" />
          <HoverText text="Conceivably?" />
          <HoverText text="Might Be Possible?" />
        </div>
      </div>
    </div>
  );
};

export default Whatdowedo;
