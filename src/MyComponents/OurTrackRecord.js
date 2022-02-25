import React from 'react';
import {BsFillGrid3X2GapFill} from "react-icons/bs";
import ecomm from '../Images/ecomm.jpg';
import edtech from '../Images/edtech.jpg';
import fintech from '../Images/fintech.jpg';
import d2cbrand from '../Images/d2cbrand.jpg';
import healthcare from '../Images/healthcare.jpg';
import fitness from '../Images/fitness.jpg';
import hospitality from '../Images/hospitality.jpg';
import athome from '../Images/athome.jpg';

export default function OurTrackRecord() {
  return <>
        <div className="container-fluid pdtopbottom-50 secondary-bg">
            <div className="row align-items-center pd-50">
                <div className="col-md-5">
                    <h1 className="section-title pdbottom-20"><BsFillGrid3X2GapFill/><span className="">Our Track Record</span></h1>
                    <p className="bigtext">Top sectors we think will be easier to get<br/><br/>
                        - Fin-tech, - Ed-tech<br/>
                        - Healthcare, - D2C<br/>
                        - SaaS, - Gaming
                    </p>
                </div>
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-sm-12 pdbottom-20">
                        <ul className="growth-stats bigtext">
                            <li><h2>&gt;5</h2><p>Unicorns</p></li>
                            <li><h2>50+</h2><p>Trusted Clients</p></li>
                            <li><h2>$5B+</h2><p>Budget handled</p></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-3">
                            <div className="border-item-box white-bg">
                                <img src={ecomm} alt="Track Record"/>
                            </div>
                        </div>
                        <div className="col-6 col-sm-3">
                            <div className="border-item-box white-bg">
                                <img src={edtech} alt="Track Record"/>
                            </div>
                        </div>
                        <div className="col-6 col-sm-3">
                            <div className="border-item-box white-bg">
                                <img src={fintech} alt="Track Record"/>
                            </div>
                        </div>
                        <div className="col-6 col-sm-3">
                            <div className="border-item-box white-bg">
                                <img src={d2cbrand} alt="Track Record"/>
                            </div>
                        </div>
                        <div className="col-6 col-sm-3">
                            <div className="border-item-box white-bg">
                                <img src={healthcare} alt="Track Record"/>
                            </div>
                        </div>
                        <div className="col-6 col-sm-3">
                            <div className="border-item-box white-bg">
                                <img src={fitness} alt="Track Record"/>
                            </div>
                        </div>
                        <div className="col-6 col-sm-3">
                            <div className="border-item-box white-bg">
                                <img src={hospitality} alt="Track Record"/>
                            </div>
                        </div>
                        <div className="col-6 col-sm-3">
                            <div className="border-item-box white-bg">
                                <img src={athome} alt="Track Record"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </>;
}
