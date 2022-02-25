import React from 'react';
import { Link } from "react-router-dom";
import logo from '../Images/codorlabslogo.png';
import {BsFacebook,BsInstagram,BsTwitter,BsYoutube,BsLinkedin} from 'react-icons/bs';

export default function Footer() {
  return <>
  <footer>
        <div className="container-fluid pd-50">
            <div className="row">
                <div className="col-sm-6 col-md-3">
                    <h6>Company</h6>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/casestudies">Case Studies</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-sm-6 col-md-6">
                    <div className="row no-gutters">
                        <div className="col-sm-12">
                            <h6>Services</h6>
                        </div>
                        <div className="col-sm-4">
                            <ul>
                                <li><Link to="/services">CodorLabs Consulting</Link></li>
                                <li><Link to="/services">Project management</Link></li>
                                <li><Link to="/services">Marketing Technology</Link></li>
                                <li><Link to="/services">Measurements and experiments</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-4">
                            <ul>
                                <li><Link to="/services">Performance marketing</Link></li>
                                <li><Link to="/services">Brand Advisory</Link></li>
                                <li><Link to="/services">Business Planning</Link></li>
                                <li><Link to="/services">Media health consulting</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-4">
                            <ul>
                                <li><Link to="/services">Ad operations</Link></li>
                                <li><Link to="/services">Ecommerce setup</Link></li>
                                <li><Link to="/services">Tactical and analytical planning</Link></li>
                            </ul>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="col-sm-6 col-md-3">
                    <h6>Contact Info</h6>
                    <ul>
                        <li><Link to="tel:0987654321">0987654321</Link></li>
                        <li><Link to="mailto:info@codorlabs.com">info@codorlabs.com</Link></li>
                        <li><Link to="">H No- 10, SRP, Gurgaon</Link></li>
                    </ul>
                </div>
            </div>
            <div className="row pdtop-50 d-flex align-items-center">
                <div className="col-sm-6">
                    <p><img src={logo} alt="CodorLabs" width="180px"/></p>
                    <p>@copyright {new Date().getFullYear()} CodorLabs. All Rights Reserved</p>
                    <p><Link to="/privacypolicy">Privacy Policy</Link></p>
                </div>
                <div className="col-sm-6">
                    <ul className="social-list d-flex justify-content-end">
                        <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><BsFacebook/></a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><BsTwitter/></a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noreferrer"><BsInstagram/></a></li>
                        <li><a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin/></a></li>
                        <li><a href="https://youtube.com" target="_blank" rel="noreferrer"><BsYoutube/></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="container-fluid pdtopbottom-50">
            <div className="row">
                <div className="col-sm-12">
                    <div className="sticky-btton">
                        <div>
                            <p className="">Talk to us today</p>
                        </div>
                        <Link to="/contact">Enquire Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  </>;
}
