import React from "react";
import "./hero.css";
import {MdLocationPin} from "react-icons/md";

const Hero = (props) => {
  return (
    <div className="container">
      <div className="imagediv">
        <img src={props.item.image} alt="country of event" />
        <div className="countryInformation">
            <div className="countryDetails">
              <MdLocationPin color='red' size={20}/>
        <h4 className="japan">{props.item.country}</h4>
        <div className="viewText"><p>View on Google Maps</p>
        </div>
        </div>
        <div>
            <h1>{props.item.eventCenter}</h1>
            </div>
            <div className="period"><p>{props.item.period}</p></div>
            <div className="description"><p>{props.item.description}</p></div>
            </div>
      </div>
      <hr />
    </div>
  );
};

export default Hero;
