import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVercel,
} from "react-icons/si";
import {
  RxVercelLogo,
} from "react-icons/rx";
import {
  AiFillWindows,
} from "react-icons/ai";
import {
  DiLinux,
} from "react-icons/di";
import {
  FaRaspberryPi,
} from "react-icons/fa";
import { BiCoffee } from "react-icons/bi";
import { BsTerminal } from "react-icons/bs";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRaspberryPi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsTerminal />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RxVercelLogo />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiCoffee />
      </Col>
    </Row>
  );
}

export default Toolstack;
