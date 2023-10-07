import React from "react";
import Card from "react-bootstrap/Card";
import { ImPacman } from "react-icons/im";
import { ImSpinner } from "react-icons/im";
import { ImAirplane } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi There, I am <span className="purple">Manan Santoki </span>
            from <span className="purple"> Vadodara, GJ, India.</span>
            <br /> I am a pre final year student pursuing an Btech Computer
            Science Engineering at VIT Vellore, Tamil Nadu.
            <br />
            Additionally, I am currently might be doing something cool as in
            learning new technologies and building projects.
            <br />
            <br />
            Apart from coding and building stuff I am also interested in
          </p>
          <ul>
            <li className="about-activity">
              <ImPacman /> Playing Games. Yeah both Indor and Outdoor!
            </li>
            <li className="about-activity">
              <ImSpinner /> Building Software or Tinkering with Hardware
            </li>
            <li className="about-activity">
              <ImAirplane /> Travelling...
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Let's go invent tomorrow instead of worrying about what happened yesterday !"{""}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
