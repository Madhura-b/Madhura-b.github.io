import React from "react";
import "./TalkCard.css";

const GetDescBullets = ({descBullets}) => {
  return descBullets
    ? descBullets.map((item, i) => (
        <li
          key={i}
          className={ "subTitle"}
        >
          {item}
        </li>
      ))
    : null;
};

export default function TalkCard({talkDetails}) {
  return (
    <div>
      <div className="container">
        <div
          className={
             "rectangle"
          }
        >
         <div className="diagonal-fill"></div>
          <div className="talk-card-title">{talkDetails.title}</div>
          <p className="talk-card-subtitle">{talkDetails.subtitle}</p>
          <ul>
          <GetDescBullets descBullets={talkDetails.descBullets} />
        </ul>

          <div className="card-footer-button-div">
            <a href={talkDetails.slides_url} target="_" className="talk-button">
              Slides
            </a>
            <a href={talkDetails.event_url} target="_" className="talk-button">
              Event
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
