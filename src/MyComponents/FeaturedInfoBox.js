import React from 'react';
import softwareicon from '../Images/software-icon.png';
import itconsulting from '../Images/IT-Consulting-icon.png';
import teamaug from '../Images/team-augmentation-icon.png';

export default function FeaturedInfoBox() {
  return <>
        <div className="container-fluid pd-50">
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="featured-box-item">
                        <h4>Custom Software Development</h4>
                        <div className="box-icon-img text-center">
                            <img src={softwareicon} alt="CodorLab"/>
                        </div>
                        <div className="featured-box-info">
                            <ul>
                                <li>- Solutions tailored to specific business needs</li>
                                <li>- Domain experience</li>
                                <li>- Technical excellence</li>
                                <li>- Process visibility</li>
                                <li>- Constraint management framework</li>
                                <li>- Non-functional requirements match</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="featured-box-item">
                        <h4>Development Team Augmentation</h4>
                        <div className="box-icon-img text-center">
                            <img src={itconsulting} alt="CodorLab"/>
                        </div>
                        <div className="featured-box-info">
                            <ul>
                                <li>- Solutions tailored to specific business needs</li>
                                <li>- Domain experience</li>
                                <li>- Technical excellence</li>
                                <li>- Process visibility</li>
                                <li>- Constraint management framework</li>
                                <li>- Non-functional requirements match</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="featured-box-item">
                        <h4>IT Consulting and Digital Advisory</h4>
                        <div className="box-icon-img text-center">
                            <img src={teamaug} alt="CodorLab"/>
                        </div>
                        <div className="featured-box-info">
                            <ul>
                                <li>- Solutions tailored to specific business needs</li>
                                <li>- Domain experience</li>
                                <li>- Technical excellence</li>
                                <li>- Process visibility</li>
                                <li>- Constraint management framework</li>
                                <li>- Non-functional requirements match</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="featured-box-item">
                        <h4>Software Reengineering and Support</h4>
                        <div className="box-icon-img text-center">
                            <img src={softwareicon} alt="CodorLab"/>
                        </div>
                        <div className="featured-box-info">
                            <ul>
                                <li>- Solutions tailored to specific business needs</li>
                                <li>- Domain experience</li>
                                <li>- Technical excellence</li>
                                <li>- Process visibility</li>
                                <li>- Constraint management framework</li>
                                <li>- Non-functional requirements match</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </>;
}
