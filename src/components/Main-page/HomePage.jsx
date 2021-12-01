import React from "react";
import {Myinfo} from "../Top-division-components/Top-division-components.jsx";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./about.css";
import {Logo, LogoSectionAbout} from "../logo-section/logoSection.jsx";
import {PrizeHeading} from "../prize tracks/prizes.jsx";
import {Prizeinfo, PrizeNonCoding} from "../../Module/General";
import {Accordion} from "../FAQ/faq.jsx";
import {
  Sponsor,
  SponsorsHead,
  SponsorUS,
  Hoichoi
} from "../Sponsors/sponsors.jsx";
import {FirstPrize} from "../prize tracks/prizes.jsx";

import Birds from "../Birds/birds.jsx";
import Footer from "../Footer/footer.jsx";
import {Member} from "../team/team.jsx";
import pattern from "./pattern4.png";
import Media from "../media/media.jsx";

import {
  TOP_SECTION,
  TeamInfo,
  sponsorLogos,
  frequentlyAskedQuestions,
  //FOOTER,
  JudgeInfo
  // panels
} from "../../Module/General";

// javascript Map for sponsors

function SponsorGroup(props) {
  return (
    <Row>
      {props.map(s => (
        <Col className="" sm={12} lg={4} md={6}>
          {" "}
          <Sponsor srcx={s.src} link={s.link} color={s.color} />{" "}
        </Col>
      ))}
    </Row>
  );
}
// javascript Map for sponsors end

// Prize group

function PrizeGroup(props) {
  return (
    <Row>
      {props.map(s => (
        <Col className="" sm={12} lg={4} md={6}>
          <FirstPrize
            icon={s.icon}
            type={s.type}
            content1={s.content1}
            content2={s.content2}
            content3={s.content3}
          />
        </Col>
      ))}
    </Row>
  );
}
function PrizeNCoding(props) {
  return (
    <Row>
      {props.map(s => (
        <Col className="" sm={12} lg={4} md={6}>
          <FirstPrize
            icon={s.icon}
            type={s.type}
            content1={s.content1}
            content2={s.content2}
            content3={s.content3}
          />
        </Col>
      ))}
    </Row>
  );
}
// Prize group ending
function TeamMembers(props) {
  return (
    <Row className="members">
      {props.map(s => (
        <Col className="" sm={12} lg={4} md={4}>
          <Member
            name={s.Name}
            role={s.role}
            img={s.img}
            linkedin={s.linkedin}
            github={s.github}
          />
        </Col>
      ))}
    </Row>
  );
}

function FrequentlyAsked(props) {
  return (
    <Row className="sf">
      {props.map(s => (
        <Col className="" sm={12} lg={6} md={6}>
          <Accordion panels={s} />
        </Col>
      ))}
    </Row>
  );
}

export default function HomePage(props) {
  return (
    <div className="Whole_div" style={{backgroundImage: `url(${pattern})`}}>
      <div className="color_sectiom">
        <Container fluid>
          <Row className="Row info">
            <Col className="info-div" sm={12} lg={7} md={8}>
              <Myinfo />
            </Col>
            <Col className="d-image" sm={12} lg={5} md={4}>
              <img alt="top" src={TOP_SECTION.IMG_SRC} />
            </Col>
          </Row>

          <Row className="mediaInfo">
            <Col className="" sm={12} lg={12} md={12}>
              <Media />
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid>
        {/* Logo section  */}
        <Row className=" logoSection">
          <Col className="info-div" sm={12} lg={8} md={8}>
            <LogoSectionAbout />
          </Col>
          <Col className="info-div" sm={12} lg={4} md={4}>
            <Logo />
          </Col>
        </Row>

        {/* ********Frequently asked Questions here ***** */}
        <div className="Myfaqs">
          {frequentlyAskedQuestions.map(FrequentlyAsked)}
          {/* ********Frequently asked Questions ending here ***** */}
        </div>

        {/* ********Prizes here ***** */}
        <Row className="prizesection">
          <PrizeHeading type="Prize section" />
          {Prizeinfo.map(PrizeGroup)}
        </Row>
        {/* ********Prizes ending here ***** */}

        <Row className="prizesection non-coding">
          <PrizeHeading type="Non-coding prizes" />
          {PrizeNonCoding.map(PrizeNCoding)}
        </Row>

        {/* ********Sponsors here ***** */}
        <Row className="sponsorSection">
          <SponsorsHead />
          <SponsorUS />
          <Row className="titleSponser">
            <Hoichoi />
          </Row>
          {sponsorLogos.map(SponsorGroup)}
        </Row>

        {/* ********Sponsors ending here ***** */}

        <Birds top="120vh" left="0vh" type="" />

        {/* ********Team here ***** */}
        <h1>Our Team</h1>
        {/* {FOOTER.JOIN_TEAM.required && <JoinTeam />} */}
        {TeamInfo.map(TeamMembers)}
        <h1>Our Judges</h1>
        {JudgeInfo.map(TeamMembers)}
        {/* ********Team ending here ***** */}
      </Container>
      <Footer />
    </div>
  );
}
