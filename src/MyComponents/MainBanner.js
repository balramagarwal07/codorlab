import React from 'react'
import '../style.css';
import bannerimage from '../Images/codorlabslogo.png';

export default function MainBanner() {
    return (
        <div className="main-banner-section">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-sm-7 pdtopbottom-50">
                        <div className="banner-info">
                            <h1 className="section-title uppercase">We build  <span className="light-text">strategies and help to</span>unleash Growth</h1>
                        </div>
                    </div>
                    <div className="col-sm-5 pdtopbottom-50">
                    <div className="featured-img dark-bg">
                        <img src={bannerimage} alt="Codor Labs"/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
