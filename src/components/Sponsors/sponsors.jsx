import React from "react";
import "./sponsors.scss";
import {Btn} from "../Top-division-components/Top-division-components.jsx";
import {SOCIALS} from "../../Module/General";

function SponsorsHead() {
  return <h1 className="shead">Sponsors & Partners</h1>;
}

function Sponsor(props) {
  return (
    <a href={props.link} target="__blank">
      <div className={ `Sponsor ${ props.color }`}>
        <img src={props.srcx} alt="Dechacks"></img>
      </div>
    </a>
  );
}

function SponsorUS() {
  return (
    <div className="joinT sponsorUS">
      <h3>Interested in Sponsoring </h3>
      <a href={SOCIALS.email}>
        <Btn className="sponsor_btn" type="Sponsor us" overlay="Send a mail" />
      </a>
    </div>
  );
}

export {SponsorsHead, Sponsor, SponsorUS};
