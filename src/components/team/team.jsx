import React from "react";
import "./team.css";
import {Btn} from "../Top-division-components/Top-division-components.jsx";
import {FOOTER} from "../../Module/General";

function JoinTeam() {
  return (
    <div className="joinT">
      <h3>Interested in joining our team </h3>
      <a href={FOOTER.JOIN_TEAM.src}>
        <Btn type="Join our team" overlay="Fill the form" />
      </a>
    </div>
  );
}

function Member(props) {
  return (
    <div className="member">
      <img src={props.img} alt="Dechack"></img>
      <div className="members-link">
        <h3>{props.name}</h3><p>{props.role}</p>
       { props.github ? <a href={`${props.github}`} target='_blank' rel="noreferrer" > 
          <i class="fab fa-2x fa-github"></i>
        </a> : null}
        {props.designation ? <h2>{props.designation} </h2>  : null}
        { props.company  ? <h3>  {props.company} </h3> : null }
        { props.linkedin ?<a href={`${props.linkedin}`} target='_blank' rel="noreferrer">
          <i class="fab fa-2x fa-linkedin"></i>
        </a>  : null}
      </div>
    </div>
  );
}

function Judges(props) {
  return (
    <div className="member">
      <img src={props.img} alt="Dechack"></img>
      <div className="members-link">
        <h3>{props.name}</h3>
        <p>{props.role}</p>
        <a href={`${props.github}`} target='_blank' rel="noreferrer" >
          <i class="fab fa-2x fa-github"></i>
        </a>
        <a href={`${props.linkedin}`} target='_blank' rel="noreferrer">
          <i class="fab fa-2x fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}



export {Member, JoinTeam, Judges};
