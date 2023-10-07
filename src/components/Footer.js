import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Made With ❤️</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Manan S.</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/manan-santoki"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
                
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/MananSantoki"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
                
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/manan-santoki-45876b223/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
                
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/manan.santoki"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
                
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>

        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
