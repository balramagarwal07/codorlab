import React from 'react';
import mehul from '../Images/mehul.png';
import imran from '../Images/imran.png';
import ritvik from '../Images/ritvik.png';
import {BsCheckCircleFill} from 'react-icons/bs';

export default function WhoWeAre() {
  return <>
        <div className="container-fluid white-bg whoweare dark-text pd-50">
            <div className="container">
                <div className="row pdbottom-50 text-center">
                    <div className="col-sm-12">
                        <h1 className="section-title">Who we are?</h1>
                        <p className="subheading light-text">Talk about our collective experience</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-6">
                        <div className="team-box-item">
                            <div className="box-icon-img text-center">
                                <img src={mehul} alt="CodorLab"/>
                            </div>
                            <h4>Mehul Garg</h4>
                            <div className="team-box-info">
                                <ul>
                                    <li><p><BsCheckCircleFill/></p><p>Leads digital strategy and implementation</p></li>
                                    <li><p><BsCheckCircleFill/></p><p>7+ years of digital consulting experience</p></li>
                                    <li><p><BsCheckCircleFill/></p><p> Extensive experience with SaaS, Food-tech, consumer durables, Travel-tech</p></li>
                                    <li><p><BsCheckCircleFill/></p><p>Former consultant, Bain &mp; Company</p></li>
                                    <li><p><BsCheckCircleFill/></p><p>MBA, IIM Lucknow; B.Tech, IIT Guwahati</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <div className="team-box-item grey-bg">
                            <div className="text-center">
                                <img src={imran} alt="CodorLab"/>
                            </div>
                            <h4>Imran Khan</h4>
                            <div className="team-box-info">
                                <ul>
                                    <li><p><BsCheckCircleFill/></p><p>Advisor to high growth cos. across range of topics incl. digital strategy, building high performance teams</p></li>
                                    <li><p><BsCheckCircleFill/></p><p>30+ years of digital growth experience across industries</p></li>
                                    <li><p><BsCheckCircleFill/></p><p>Extensive experience with SaaS, Food-tech, consumer durables, Travel-tech</p></li>
                                    <li><p><BsCheckCircleFill/></p><p>Advisor, Cred, Bigbasket, Portea, Freshmenu, BeachBody, Simply Hired</p></li>
                                    <li><p><BsCheckCircleFill/></p><p>Former CMO, Credit Karma, Pandora, Munchery, OYO, Wonder-Workshop</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </>;
}
