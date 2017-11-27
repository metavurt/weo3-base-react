import React, { Component } from "react";

class About extends React.Component {
  render() {
    return (
      <div>
        <p>Hello and good day! I'm Billy and I enjoy all things frontend, most things fullstack, and many things backend. Although I have a penchant for wanting things to be well-designed and pretty, my core desire is that things work as they should, for as long as they possibly can, with headache-free maintanence.</p>
        <p>On a personal note I enjoy my daily coffee, am inspired by nature, art and music, love riding my motorcycle, and take time to stroll in the sunshine, soaking up SoCal's warmth.</p>
        <p>Where I find happiness:
          <ul>
              <li>succinct markup</li>
              <li>semantic organization</li>
              <li>snowboarding Mt. Hood</li>
              <li>modular programming</li>
              <li>robust solutions vs quick fixes</li>
              <li>wandering through experimental codepens</li>
              <li>collaborative problem solving</li>
              <li>sunshine. lots and lots of sunshine</li>
              <li>open source and open minds</li>
              <li>moderation when using ‘shiny new toys’</li>
              <li>judicious test-driven development</li>
              <li>peace, love, coconut milk cappuccinos, porters and bowling</li>
          </ul>
        </p>
        <p>I find joy in learning new technologies, by either growing & evolving with them, or discovering that there exists a better way using a different approach. The day I stop learning and practicing code is the day I am retired from this field.</p>
        <ul class="social-links">
          <li><a title="LinkedIn" target="_blank" href="https://www.linkedin.com/in/billyo"><img src="assets/images/icon-linkedin.png" /></a></li>
          <li><a title="GitHub" target="_blank" href="https://www.github.com/metavurt"><img src="assets/images/icon-github.png" /></a></li>
          <li><a title="Twitter" target="_blank" href="https://twitter.com/weo3dev"><img src="assets/images/icon-twitter.png" /></a></li>
        </ul>
      </div>
    );
  }
}

export default About
