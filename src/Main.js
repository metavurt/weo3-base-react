import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Experience from "./Experience";

class Main extends Component {
  render() {
    return (
       <HashRouter>
        <div>
          <header>
          {/* <img src="assets/images/weo3-logo.png" /> */}
          </header>
          <ul className="nav">
            <li><NavLink to="/">work</NavLink></li>
            <li><NavLink to="/about">about</NavLink></li>
            <li><NavLink to="/contact">contact</NavLink></li>
            <li><NavLink to="/experience">experience</NavLink></li>
            <li><NavLink to="/more">more</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Work}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/experience" component={Experience}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}

export default Main;
