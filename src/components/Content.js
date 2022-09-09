import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import './Content.css';
const Content = () => {
  return (
    <>
   <Container className="content">
    <Row>
        <Col md={6}>
            <h4>
                Functional Requirements
            </h4>
        <ul>
            <li>
                 AI Based System
            </li>
            <li>
                 use React
            </li>
            <li>
                Google Authntication
            </li>
            <li>
                Email and Password Authntication
            </li>
            <li>
                Header
            </li>
            <li>
                Footer
            </li>
            <li>
                Ui Design
            </li>
        </ul>
        </Col>
        <Col md={6}>
        <h4>
                Non-Functional Requirements
            </h4>
        <ul>
            <li>
                Load page within 3s
            </li>
            <li>
                Availability Google User Everytime
            </li>
            <li>
                Availability Email User Everytime
            </li>
            <li>
                Login User see Requirements
            </li>
            <li>
                Quality Based System
            </li>
            <li>
                Meet user Experience
            </li>
            <li>
                Small Footer
            </li>
        </ul>
        </Col>
    </Row>
   </Container>
    </>
  );
};

export default Content;