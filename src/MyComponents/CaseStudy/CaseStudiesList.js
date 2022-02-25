import React from 'react';
import './CaseStudy.css';
import { Link } from "react-router-dom";
import Casestudy1 from "../../Images/healthfully_761527e935.jpg";
import Casestudy2 from "../../Images/kpmg_0b8c0e56fc.jpg";

export default function CaseStudiesList() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <>
        <div className="container-fluid pdtopbottom-50">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                  <h1 className="section-title">Case Studies</h1>
                </div>
                <div className="col-md-6">
                  <p className="largetext">Check out the custom solutions we built for our clients to achieve their unique business goals and seize new opportunities</p>
                </div>
            </div>
            <div className="row pdtop-50 casestudylist">
                <div className="col-sm-6">
                  <Link to="/casestudies/casestudydetails">
                    <p><img src={Casestudy1} alt="Case Study"/></p>
                    <h2>Dhani</h2>
                    <p>This is the text for Title/name of the case study will place here</p>
                  </Link>
                </div>
                <div className="col-sm-6">
                  <Link to="/casestudies/casestudydetails">
                    <p><img src={Casestudy2} alt="Case Study"/></p>
                    <h2>Boat</h2>
                    <p>This is the text for Title/name of the case study will place here</p>
                  </Link>
                </div>
            </div>
        </div>
  </>;
}
