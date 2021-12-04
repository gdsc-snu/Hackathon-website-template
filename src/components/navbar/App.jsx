import React from "react";
import "./styles.scss";
// import MytypedComponent from "../typing-effect/typing.js"
// import TOGGLE from "../toggle-button/toggle";
import HomePage from "../Main-page/HomePage";
// import logo from "./logoo.png"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Link} from "react-scroll";

import Discord from "../Routes/Discord";
import Twitter from "../Routes/Twitter";
import Linkedin from "../Routes/LinkedIn";
import Instagram from "../Routes/Instagram";
import Devpost from "../Routes/Devpost";

export default class NAVBAR extends React.Component {
  state = {
    color: "#121930"
  };
  listenScrollEvent = e => {
    if (window.scrollY > 800) {
      this.setState({color: "rgba(50, 13, 136)"});
    } else {
      this.setState({color: "#121930"});
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="nav_bar" style={{backgroundColor: this.state.color}}>
            <ul>
              {/*Navigation for Home*/}

              <li className="link-wrapper">
                <div style={{cursor: "pointer"}}>
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <span className="links">Home </span>{" "}
                  </Link>
                </div>
              </li>

              {/*Navigation for Sponsors*/}

              <li>
                <div style={{cursor: "pointer"}}>
                  <Link
                    to="sponsors"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClassName="active"
                  >
                    <span className="links">Sponsors </span>{" "}
                  </Link>
                </div>
              </li>
              <li>
                <div style={{cursor: "pointer"}}>
                  <Link
                    to="judges"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <span className="links">Judges </span>{" "}
                  </Link>
                </div>
              </li>
              {/*Navigation for info*/}

              <li>
                <Link to="/projects">
                  <span className="links">More info </span>{" "}
                </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/discord" exact component={Discord} />
            <Route path="/linkedin" exact component={Linkedin} />
            <Route path="/devpost" exact component={Devpost} />
            <Route path="/twitter" exact component={Twitter} />
            <Route path="/instagram" exact component={Instagram} />
            <Route path="/contact">
              <HomePage />
            </Route>
            <Route path="/links">
              <HomePage />
            </Route>
            <Route path="/projects">
              <HomePage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

// function Projects() {
//   return <h2>Projects here</h2>;
// }

// function Contact() {
//   return <h2>contact info</h2>;
// }

// function Links() {
//   return <h2>Home</h2>;
// }
