import React from "react";
import "./prizes.scss";

function PrizeHeading(props) {
  return (
    <div className="PrizeHeading">
      <h1>{props.type}</h1>
    </div>
  );
}

function FirstPrize(props) {
  return (
    <div className="Prizes">
      {props.icon}
      <h2>{props.type}</h2>
      <p>
        <ul> 
          { props.content  ? <li> {props.content} </li> : null }
          <li>{props.content1}</li> 
          { props.content2  ? <li>{props.content2}</li> : null }
          { props.content3  ? <li>{props.content3}</li> : null }
       </ul>
      </p>
    </div>
  );
}

export {FirstPrize, PrizeHeading};
