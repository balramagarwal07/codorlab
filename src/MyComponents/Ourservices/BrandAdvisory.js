import React from 'react';
import service1 from "../../Images/service-Brand-Advisory.jpeg";

export default function BrandAdvisory() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
        <div className="container-fluid pdtopbottom-50 white-bg dark-text">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="heading pdbottom-50">Brand Advisory</h1>
                <p className="largetext pdleft-50">Proven expertise in driving the best ROI</p>
                <p className="bigtext text-muted mb-0 pdbottom-20">
                Our team specialised across digital formats and platforms to drive best in industry data-driven performance campaigns.  We make the best use of AI tools and data to generate high ROI.
                </p>
              </div>
              <div className="col-md-6">
                <p className="pdleft-100 "><img src={service1} alt="Service" /></p>
              </div>
            </div>
        </div>
    </>
  )
}
