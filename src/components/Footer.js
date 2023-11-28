import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
// import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/linkedin.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/medium icon.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/pratik-thorat94229/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Pratik94229"><img src={navIcon2} alt="Icon" /></a>
               <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            {/* <p>Copyright 2022. All Rights Reserved</p> */}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
