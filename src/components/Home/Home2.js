import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
             A LITTLE MORE About <span className="purple"> ME !</span>
            </h1>
            <p className="home-about-body">
              I was 16 when I started my journey with computers and coding. 
              I think that I have learnt something, maybe not as much, but 
              you know... something I was intrested in and kept digging into it. 
              And I unrivealed the world of technology. I am a passionate about 
              learning new things and exploring new technologies.              
              <br />
              <br />
              Right now I am on my journey to become a<b className="purple"> DevOps Engineer. </b>
              <br />
              <br />
              I have worked with technologies like <b className="purple"> Docker and Kubernetes </b>
              Also used CI/CD tools like <b className="purple"> Jenkins </b>
              <br />
              I possess a profound mastery of <b className="purple"> Git and GitHub, </b> demonstrating a great ability to efficiently 
              manage version control and collaborate on diverse software development projects.
              <br />
              <br />I am fluent in languages like
              <i>
                <b className="purple"> Python, C++, Javascript </b>
              </i>
              <br />
              <br />
              I like building some cool and usefull &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Web Servers.
                </b>
              </i>
              <br />
              <br />
              I like working with linux and open source software.
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js, React.js, etc...</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT ME @</h1>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/manan-santoki"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/MananSantoki"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/manan-santoki-45876b223/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/manan.santoki"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
