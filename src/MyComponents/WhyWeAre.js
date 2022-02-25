import React from 'react';
import {BsFillNodePlusFill} from "react-icons/bs"

export default function WhyWeAre() {
  return <>
        <div className="container-fluid pdtopbottom-50">
            <div className="row align-items-center pdtopbottom-50">
                <div className="col-md-5 col-lg-4">
                    <h1 className="section-title pdbottom-20"><BsFillNodePlusFill/> <span className="light-text">Why we are here..</span></h1>
                    <p className="bigtext">Consulting - Strategy | Even though we are not executing - we take ownership of the results We direct the execution </p>
                </div>
                <div className="col-md-7 col-lg-8">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="expertise-item-box">
                                <h5>We help you solve difficult marketing problems</h5>
                                <div className="short-border"></div>
                                <p>Cred: optimized marketing spends, OYO: scaled users when growth saturated, Portea: built internal marketing team</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="expertise-item-box">
                                <h5>We have methodological approach, don't believe in shortcuts </h5>
                                <div className="short-border"></div>
                                <p>30+ years of experience in scaling companies, we are equipped with best practices across channels</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="expertise-item-box">
                                <h5>We are insiders, part of your marketing leadership team</h5>
                                <div className="short-border"></div>
                                <p>Worked with founders/leadership; Cred: Kunal Shah/Trupthi Shetty, Portea: Meena Ganesh, Growfit: Jyotsna Pattabiraman</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="expertise-item-box">
                                <h5>As part of leadership team, we are direct and to the point in our communication</h5>
                                <div className="short-border"></div>
                                <p>Uncover and communicate deep rooted marketing problems (across technology, process and people), build growth roadmap and identify and govern new initiatives</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </>;
}
