import React from 'react';
import { Link } from "react-router-dom";
import {Tab, Nav, Row, Col,Container} from "react-bootstrap";
import {BsArrowRight,BsFillDiagram3Fill} from 'react-icons/bs';
import consulting from "../Images/service-Branding_Consulting_Vector.png";
import brandadvisory from "../Images/service-Brand-Advisory.jpeg";
import businessplan from "../Images/service-Business-Plan.jpeg";
import performancemarketing from "../Images/service-Performance-Marketing.jpeg";
import projectmanagement from "../Images/service-Project-Management.jpeg";

export default function ServiceTabs() {
  return <>
  <Container fluid className="pd-50 d-block d-md-none">
        <Row>
            <Col sm={12} className="pdbottom-50 text-center">
                <h2 className="section-title">Our Services</h2>
                <p className="subheading light-text">We have expertise in...</p>
            </Col>
                <Col md={6} lg={3}>
                    <Link to="/services/consulting-advisory-services" className="service-box-item">
                        <h4>CodorLabs Consulting Service</h4>
                        <div className="service-arrow-icon text-center">
                            <BsArrowRight/>
                        </div>
                    </Link>
                </Col>
                <Col md={6} lg={3}>
                    <Link to="/services/ad-operations-services" className="service-box-item">
                        <h4>Ad Operations</h4>
                        <div className="service-arrow-icon text-center">
                            <BsArrowRight/>
                        </div>
                    </Link>
                </Col>
                <Col md={6} lg={3}>
                    <Link to="/services/brand-advisory" className="service-box-item">
                        <h4>Brand Advisory</h4>
                        <div className="service-arrow-icon text-center">
                            <BsArrowRight/>
                        </div>
                    </Link>
                </Col>
                <Col md={6} lg={3}>
                    <Link to="/services/bussiness-planing-services" className="service-box-item">
                        <h4>Business Planing</h4>
                        <div className="service-arrow-icon text-center">
                            <BsArrowRight/>
                        </div>
                    </Link>
                </Col>
                <Col md={6} lg={3}>
                    <Link to="/services/performance-marketing-services" className="service-box-item">
                        <h4>Performance marketing</h4>
                        <div className="service-arrow-icon text-center">
                            <BsArrowRight/>
                        </div>
                    </Link>
                </Col>
                <Col md={6} lg={3}>
                    <Link to="/services/project-management-services" className="service-box-item">
                        <h4>Project Management</h4>
                        <div className="service-arrow-icon text-center">
                            <BsArrowRight/>
                        </div>
                    </Link>
                </Col>
                <Col sm={12} className="pdtop-50 text-center">
                    <h5 className="subheading">We deliver well-suited solutions that ensure business sustainability and high performance.</h5>
                    <p className="pd-20"><Link to="/services" className="round-button small-button m-auto">See All Services</Link></p>
                </Col>
            </Row>
        </Container>
    <Tab.Container defaultActiveKey="first">
    <section className="pd-50 d-none d-md-block white-bg">
        <Container>
            <Row className="no-gutters">
            <Col sm={12} className="pdbottom-50 text-center">
                <p className="dark-text section-title"><BsFillDiagram3Fill/></p>
                <h2 className="dark-text section-title">Our Services</h2>
                <p className="subheading light-text">We have expertise in...</p>
            </Col>
                <Col sm={3}>
                    <Nav variant="pills" className="nav flex-column nav-pills nav-pills-custom white-bg" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <Nav.Item>
                            <Nav.Link className="nav-link p-3" eventKey="first">
                                <i className="fa fa-user-circle-o mr-2"></i>
                                <span className="font-weight-bold small text-uppercase">CodorLabs Consulting Service</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="nav-link p-3" eventKey="second">
                                <i className="fa fa-user-circle-o mr-2"></i>
                                <span className="font-weight-bold small text-uppercase">Ad operations</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="nav-link p-3" eventKey="third">
                                <i className="fa fa-user-circle-o mr-2"></i>
                                <span className="font-weight-bold small text-uppercase">Performance Marketing</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="nav-link p-3" eventKey="fourth">
                                <i className="fa fa-user-circle-o mr-2"></i>
                                <span className="font-weight-bold small text-uppercase">Business Planning</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="nav-link p-3" eventKey="fifth">
                                <i className="fa fa-user-circle-o mr-2"></i>
                                <span className="font-weight-bold small text-uppercase">Project management</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="nav-link p-3" eventKey="sixth">
                                <i className="fa fa-user-circle-o mr-2"></i>
                                <span className="font-weight-bold small text-uppercase">Brand Advisory</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="nav-link p-3" eventKey="seventh">
                                <i className="fa fa-user-circle-o mr-2"></i>
                                <span className="font-weight-bold small text-uppercase">Tactical and analytical planning</span>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content className="tabcontent-anim">
                        <Tab.Pane eventKey="first" className="fadein shadow rounded bg-white p-5">
                            <Row>
                            <Col sm={8}>
                                <h4 className="heading-light mb-3 dark-text">Consulting and Advisory</h4>
                                <p className="bigtext text-muted mb-0 dark-text">
                                Our consulting services have helped cutting edge companies and startups to achieve digital transformation and progress towards their growth goals
                                </p>
                                <ul className="pdtop-20 dark-text">
                                    <li>Accelerate transformation with our industry-leading expert advice.</li>
                                    <li>Our consulting is supported in defining the business goals, planning principles and utilising the best effective medium and sources to achieve growth</li>
                                    <li>CodorLabs consultant develops a strategic plan aligned with market dynamics to build the best and most effective media plan. Directional approach prioritizing business goals</li>
                                </ul>
                            </Col>
                            <Col sm={4}>
                                <img src={consulting} alt="Services"/>
                            </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second" className="fadein shadow rounded bg-white p-5">
                            <Row>
                                <Col sm={8}>
                                    <h4 className="heading-light mb-3 dark-text">Ad Operations</h4>
                                    <p className="bigtext text-muted mb-0 dark-text">
                                    Media planning, campaign structuring, implementation, timely updates, optimisations and reporting with precision aligned with media plans
                                    </p>
                                    <p className="pdtop-20 dark-text">
                                    Our experienced marketing specialist ensures top-notch industry-leading optimisation and execution on of social, search, display, discovery, video, Facebook etc Our reporting templates are customised and automated to drive the best insights. We pioneer new beta features and industry best practices in our media approach
                                    </p>
                                </Col>
                                <Col sm={4}>
                                    <img src={brandadvisory} alt="Services"/>
                                </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third" className="shadow rounded bg-white p-5">
                            <Row>
                                <Col sm={12}>
                                    <h4 className="heading-light mb-3 dark-text">Performance Marketing</h4>
                                    <p className="bigtext text-muted mb-0 dark-text">
                                    Proven expertise in driving the best ROI
                                    </p>
                                    <p className="pdtop-20 dark-text">
                                    Our team specialised across digital formats and platforms to drive best in industry data-driven performance campaigns.  We make the best use of AI tools and data to generate high ROI.
                                    </p>
                                </Col>
                                <Col sm={6}>
                                    <img src={performancemarketing} alt="Services"/>
                                </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth" className="shadow rounded bg-white p-5">
                            <Row>
                                <Col sm={6}>
                                    <h4 className="heading-light mb-3 dark-text">Business Planning</h4>
                                    <p className="bigtext text-muted mb-0 dark-text">
                                    Utilising data and marketing technology signals and ensuring our investments are best utilised to maximise the objectives
                                    </p>
                                    <p className="pdtop-20 dark-text">Our business plan operates in 3 key pillars</p>
                                    <ul className="pdtop-20 dark-text">
                                        <li>01 Business Goals and Objective</li>
                                        <li>02 Audience Profiling</li>
                                        <li>03 Media Estimation &amp; Planning</li>
                                    </ul>
                                </Col>
                                <Col sm={6}>
                                    <img src={businessplan} alt="Services"/>
                                </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth" className="shadow rounded bg-white p-5">
                            <Row>
                                <Col sm={8}>
                                    <h4 className="heading-light mb-3 dark-text">Project management</h4>
                                    <p className="bigtext text-muted mb-0 dark-text">
                                    Our consulting services have helped cutting edge companies and startups to achieve digital transformation and progress towards their growth goals
                                    </p>
                                    <ul className="pdtop-20 dark-text">
                                        <li>Accelerate transformation with our industry-leading expert advice.</li>
                                        <li>Our consulting is supported in defining the business goals, planning principles and utilising the best effective medium and sources to achieve growth</li>
                                        <li>CodorLabs consultant develops a strategic plan aligned with market dynamics to build the best and most effective media plan. Directional approach prioritizing business goals</li>
                                    </ul>
                                </Col>
                                <Col sm={4}>
                                    <img src={projectmanagement} alt="Services"/>
                                </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="sixth" className="shadow rounded bg-white p-5">
                            <Row>
                                <Col sm={8}>
                                    <h4 className="heading-light mb-3 dark-text">Brand Advisory</h4>
                                    <p className="bigtext text-muted mb-0 dark-text">
                                    Our consulting services have helped cutting edge companies and startups to achieve digital transformation and progress towards their growth goals
                                    </p>
                                    <ul className="pdtop-20 dark-text">
                                        <li>Accelerate transformation with our industry-leading expert advice.</li>
                                        <li>Our consulting is supported in defining the business goals, planning principles and utilising the best effective medium and sources to achieve growth</li>
                                        <li>CodorLabs consultant develops a strategic plan aligned with market dynamics to build the best and most effective media plan. Directional approach prioritizing business goals</li>
                                    </ul>
                                </Col>
                                <Col sm={4}>
                                    <img src={brandadvisory} alt="Services"/>
                                </Col>
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="seventh" className="shadow rounded bg-white p-5">
                            <Row>
                                <Col sm={8}>
                                    <h4 className="heading-light mb-3 dark-text">Tactical and analytical planning</h4>
                                    <p className="bigtext text-muted mb-0 dark-text">
                                    Our consulting services have helped cutting edge companies and startups to achieve digital transformation and progress towards their growth goals
                                    </p>
                                    <ul className="pdtop-20 dark-text">
                                        <li>Accelerate transformation with our industry-leading expert advice.</li>
                                        <li>Our consulting is supported in defining the business goals, planning principles and utilising the best effective medium and sources to achieve growth</li>
                                        <li>CodorLabs consultant develops a strategic plan aligned with market dynamics to build the best and most effective media plan. Directional approach prioritizing business goals</li>
                                    </ul>
                                </Col>
                                <Col sm={4}>
                                    <img src={businessplan} alt="Services"/>
                                </Col>
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
                <Col sm={12} className="pdtop-50 text-center">
                    <h5 className="subheading dark-text">We deliver well-suited solutions that ensure business sustainability and high performance.</h5>
                    <p className="pd-20"><Link to="/services" className="round-button small-button m-auto">See All Services</Link></p>
                </Col>
            </Row>
        </Container>
    </section>
    </Tab.Container>
  </>;
}
