import React from 'react';
import service1 from "../../Images/service-Project-Management.jpeg";

export default function MeasurementsExperiments() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
        <div className="container-fluid pdtopbottom-50 white-bg dark-text">
            <div className="row">
              <div className="col-md-12">
                <h1 className="heading pdbottom-20 title-animation">Measurements Experiments Services</h1>
                <p className="pdleft-100"><img src={service1} alt="Service" /></p>
              </div>
              <div className="col-md-6 pdtop-20 offset-md-2 text-animation">
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
            </div>
        </div>
    </>
  )
}
