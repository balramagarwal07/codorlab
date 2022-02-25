import React from 'react';
import logoicon from '../Images/icon-white.png';

export default function AnimationBanner() {
  return <>
        <div className="main-banner-section">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-sm-6">
                        <div id="logocontainer">
                            <div id="pelogo"><img src={logoicon} alt="C"/></div>
                            <div className="loader loader1"></div>
                            <div className="loader loader2"></div>
                            <div className="loader loader3"></div>
                            <div className="loader loader4"></div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="banner-info banner-animation">
                            <h1 className="section-title uppercase">We build  <span className="light-text">strategies and help to</span>unleash Growth</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </>;
}
