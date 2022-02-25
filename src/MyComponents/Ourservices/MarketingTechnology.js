import React from 'react';
import service1 from "../../Images/service-Project-Management.jpeg";

export default function MarketingTechnology() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
        <div className="container-fluid pdtopbottom-50 white-bg dark-text">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="heading pdbottom-20">Marketing Technology</h1>
                <p className="pdleft-100"><img src={service1} alt="Service" /></p>
                <p className="largetext pdleft-50">Media planning, campaign structuring, implementation, timely updates, optimisations and reporting with precision aligned with media plans</p>
              </div>
              <div className="col-md-6">
                <p className="bigtext text-muted mb-0">
                Our experienced marketing specialist ensures top-notch industry-leading optimisation and execution on of social, search, display, discovery, video, Facebook etc Our reporting templates are customised and automated to drive the best insights. We pioneer new beta features and industry best practices in our media approach
                </p>
              </div>
            </div>
        </div>
    </>
  )
}
