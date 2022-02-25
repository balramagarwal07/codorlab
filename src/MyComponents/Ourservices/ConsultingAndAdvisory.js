import React from 'react';
import service1 from "../../Images/service-Branding_Consulting_Vector.png";

export default function ConsultingAndAdvisory() {
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
        <div className="container-fluid white-bg pdtopbottom-50">
            <div className="row">
                <div className="col-md-6 dark-text title-animation">
                  <h1 className="section-title">Consulting And Advisory Services</h1>
                  </div>
            </div>
            <div className="row dark-text align-items-start">
              <div className="col-md-6 pdtop-20 offset-md-1">
                <p className="largetext">Working with brands for on business model and accelerating their growth</p>
                <p className="bigtext text-muted mb-0">
                  Our consulting services have helped cutting edge companies and startups to achieve digital transformation and progress towards their growth goals
                </p>
                <ul className="pdtop-20 bigtext">
                  <li className="pd-10">Accelerate transformation with our industry-leading expert advice.</li>
                  <li className="pd-10">Our consulting is supported in defining the business goals, planning principles and utilising the best effective medium and sources to achieve growth</li>
                  <li className="pd-10">CodorLabs consultant develops a strategic plan aligned with market dynamics to build the best and most effective media plan. Directional approach prioritizing business goals</li>
                </ul>
              </div>
              <div className="col-md-5">
                <p className="pdleft-100"><img src={service1} alt="Service" /></p>
              </div>
            </div>
        </div>
    </>
  )
}
