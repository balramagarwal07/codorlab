import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import serviceicon1 from "../Images/consulting-icon.jpg";
import serviceicon2 from "../Images/project-management-icon.jpg";
import serviceicon3 from "../Images/Marketing-Technology.jpg";
import serviceicon4 from "../Images/Measurements-Experiments.jpg";
import serviceicon5 from "../Images/performance-icon.png";
import serviceicon6 from "../Images/brand-advisory-icon.jpg";
import serviceicon7 from "../Images/tactical-icon.jpg";
import serviceicon8 from "../Images/business-planing-icon.png";
import serviceicon9 from "../Images/adops-icon.png";
import serviceicon10 from "../Images/ecommerce-icon.png";
import serviceicon11 from "../Images/meadi-health-icon.png";

const Loading = () =>(
  <div className="hover-box loading">
      <p>Loading...</p>
  </div>
)
export default function OurServices() {
  React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return <>
        <div className="container-fluid pd-50 ourservices-bg">
            <div className="row">
                <div className="col-md-6 dark-text">
                  <h1 className="section-title">Our Services</h1>
                  <p className="largetext">Check out the custom solutions we built for our clients to achieve their unique business goals and seize new opportunities</p>
                </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-6 col-md-3">
                <LazyLoad placeholder={<Loading/>}>
                  <div className="hover-box">
                    <p className="service-icon"><img src={serviceicon1} alt="Services"/></p>
                    <h4 className="subheading">Consulting Advisory</h4>
                    <p className="service-text-info">Check out the custom solutions. Check out the custom solutions</p>
                    <p className="hover-link"><Link to="/services/consulting-advisory-services">Read More</Link></p>
                  </div>
                  </LazyLoad>
                </div>
                <div className="col-sm-6 col-md-3">
                <LazyLoad placeholder={<Loading/>}>
                  <div className="hover-box">
                    <p className="service-icon"><img src={serviceicon2} alt="Services"/></p>
                    <h4 className="subheading">Project Management</h4>
                    <p className="service-text-info">Check out the custom solutions. Check out the custom solutions</p>
                    <p className="hover-link"><Link to="/services/project-management-services">Read More</Link></p>
                  </div>
                  </LazyLoad>
                </div>
                <div className="col-sm-6 col-md-3">
                <LazyLoad placeholder={<Loading/>}>
                  <div className="hover-box">
                    <p className="service-icon"><img src={serviceicon3} alt="Services"/></p>
                    <h4 className="subheading">Marketing Technology</h4>
                    <p className="service-text-info">Check out the custom solutions. Check out the custom solutions</p>
                    <p className="hover-link"><Link to="/services/marketing-technology-services">Read More</Link></p>
                  </div>
                  </LazyLoad>
                </div>
                <div className="col-sm-6 col-md-3">
                <LazyLoad placeholder={<Loading/>}>
                  <div className="hover-box">
                    <p className="service-icon"><img src={serviceicon4} alt="Services"/></p>
                    <h4 className="subheading">Measurements and Experiments</h4>
                    <p className="service-text-info">Check out the custom solutions. Check out the custom solutions</p>
                    <p className="hover-link"><Link to="/services/measurements-experiments-services">Read More</Link></p>
                  </div>
                  </LazyLoad>
                </div>
              </div>
              <div className="row pdtop-50 justify-content-center">
                <div className="col-sm-6 col-md-3">
                <LazyLoad placeholder={<Loading/>}>
                  <div className="hover-box">
                    <p className="service-icon"><img src={serviceicon5} alt="Services"/></p>
                    <h4 className="subheading">Performance Marketing</h4>
                    <p className="service-text-info">Check out the custom solutions. Check out the custom solutions</p>
                    <p className="hover-link"><Link to="/services/performance-marketing-services">Read More</Link></p>
                  </div>
                  </LazyLoad>
                </div>
                <div className="col-sm-6 col-md-3">
                <LazyLoad placeholder={<Loading/>}>
                  <div className="hover-box">
                    <p className="service-icon"><img src={serviceicon6} alt="Services"/></p>
                    <h4 className="subheading">Brand Advisory</h4>
                    <p className="service-text-info">Check out the custom solutions. Check out the custom solutions</p>
                    <p className="hover-link"><Link to="/services/brand-advisory">Read More</Link></p>
                  </div>
                  </LazyLoad>
                </div>
                <div className="col-sm-6 col-md-3">
                <LazyLoad placeholder={<Loading/>}>
                  <div className="hover-box">
                    <p className="service-icon"><img src={serviceicon7} alt="Services"/></p>
                    <h4 className="subheading">Tactical and Analytical Planning</h4>
                    <p className="service-text-info">Check out the custom solutions. Check out the custom solutions</p>
                    <p className="hover-link"><Link to="/services/tactical-and-analytical-services">Read More</Link></p>
                  </div>
                  </LazyLoad>
                </div>
                <div className="col-sm-6 col-md-3">
                <LazyLoad placeholder={<Loading/>}>
                  <div className="hover-box">
                    <p className="service-icon"><img src={serviceicon8} alt="Services"/></p>
                    <h4 className="subheading">Business Planning</h4>
                    <p className="service-text-info">Check out the custom solutions. Check out the custom solutions</p>
                    <p className="hover-link"><Link to="/services/bussiness-planing-services">Read More</Link></p>
                  </div>
                  </LazyLoad>
                </div>
              </div>
              <div className="row pdtop-50 justify-content-center">
                <div className="col-sm-6 col-md-3">
                <LazyLoad placeholder={<Loading/>}>
                  <div className="hover-box">
                    <p className="service-icon"><img src={serviceicon9} alt="Services"/></p>
                    <h4 className="subheading">Ad operations</h4>
                    <p className="service-text-info">Check out the custom solutions. Check out the custom solutions</p>
                    <p className="hover-link"><Link to="/services/ad-operations-services">Read More</Link></p>
                  </div>
                  </LazyLoad>
                </div>
                <div className="col-sm-6 col-md-3">
                <LazyLoad placeholder={<Loading/>}>
                  <div className="hover-box">
                    <p className="service-icon"><img src={serviceicon10} alt="Services"/></p>
                    <h4 className="subheading">Ecommerce Setup</h4>
                    <p className="service-text-info">Check out the custom solutions. Check out the custom solutions</p>
                    <p className="hover-link"><Link to="/services/ecommerce-setup">Read More</Link></p>
                  </div>
                  </LazyLoad>
                </div>
                <div className="col-sm-6 col-md-3">
                <LazyLoad placeholder={<Loading/>}>
                  <div className="hover-box">
                    <p className="service-icon"><img src={serviceicon11} alt="Services"/></p>
                    <h4 className="subheading">Media Health Consulting</h4>
                    <p className="service-text-info">Check out the custom solutions. Check out the custom solutions</p>
                    <p className="hover-link"><Link to="/services/media-health-consulting">Read More</Link></p>
                  </div>
                  </LazyLoad>
                </div>
            </div>
        </div>
  </>;
}
