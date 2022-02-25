import React from 'react';
import service1 from "../../Images/service-Business-Plan.jpeg";

export default function BussinessPlaning() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
         <div className="container-fluid pdtopbottom-50 white-bg dark-text">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="heading pdbottom-50">Business Planning</h1>
                <p className="largetext pdleft-50">Utilising data and marketing technology signals and ensuring our investments are best utilised to maximise the objectives</p>
              </div>
              <div className="col-md-6">
                <p className="pdleft-100"><img src={service1} alt="Service" /></p>
              </div>
            </div>
            <div className="row">
                <div className="col-sm-12 pdbottom-20">
                    <h3 className="subheading">Our business plan operates in 3 key pillars</h3>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="expertise-item-box">
                        <h5>Business Goals and Objective</h5>
                        <div className="short-border"></div>
                        <p>- Growth goals <br/>
                          - SOV goals <br/>
                          - Industry benchmarking <br/>
                          <br/>
                        </p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="expertise-item-box">
                        <h5>Audience Profiling</h5>
                        <div className="short-border"></div>
                        <p>- Target Audience <br/>
                        - Archetype  <br/>
                        - Demographics  <br/>
                        - Derive Intent and Affinity Index  <br/>
                        </p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="expertise-item-box">
                        <h5>Media Estimation &amp; Planning</h5>
                        <div className="short-border"></div>
                        <p>- Channel selection  <br/>
                        - Planning principle  <br/>
                        - Marketing mix <br/> <br/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
