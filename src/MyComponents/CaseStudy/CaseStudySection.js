import React from 'react';
import { Link } from "react-router-dom";
import healthfyllyimg from "../../Images/ipad_healtfully.webp";
import macbooktms from "../../Images/macbook_tms.webp";
import {Row, Col,Container} from "react-bootstrap";

export default function CaseStudySection() {
  return <>
        <Container fluid  className="pd-50 grey-bg">
            <Row>
                <Col sm={12} >
                    <h1 className="section-title"><span className="light-text">Case Studies</span></h1>
                </Col>
            </Row>
            <Row className="pdtopbottom-50 dark-text">
                <Col md={6} lg={5}>
                    <h1 className="heading-light">Dhani</h1>
                    <div className="bigtext uppercase pdtopbottom-20 grey-text">Banking and Financial Services</div>
                    <h2 className="subheading">An all-around HIPAA-compliant solution for digitizing healthcare processes that:</h2>
                    <p className="pdtopbottom-20">
                        Enables telemedicine with convenient and quick scheduling and payments. Allows real-time communication and collaboration between patients and caregivers 
                    </p>
                    <p><Link to="/casestudies/casestudydetails" className="round-button small-button">See Full Case Study</Link></p>
                </Col>
                <Col md={6} lg={7} className="d-none d-md-block">
                    <img src={healthfyllyimg} alt="Case Study"/>
                </Col>
            </Row>
            <Row className="pdbottom-50 dark-text">
                <Col md={6} lg={7} className="d-none d-md-block">
                    <img src={macbooktms} alt="Case Study"/>
                </Col>
                <Col md={6} lg={5}>
                    <h1 className="heading-light">Boat</h1>
                    <div className="bigtext uppercase pdtopbottom-20 grey-text">Music and Entertainment Services</div>
                    <h2 className="subheading">An all-around HIPAA-compliant solution for digitizing healthcare processes that:</h2>
                    <p className="pdtopbottom-20">
                        Enables telemedicine with convenient and quick scheduling and payments. Allows real-time communication and collaboration between patients and caregivers 
                    </p>
                    <p><Link to="/casestudies/casestudydetails" className="round-button small-button">See Full Case Study</Link></p>
                </Col>
            </Row>
        </Container >
  </>;
}
