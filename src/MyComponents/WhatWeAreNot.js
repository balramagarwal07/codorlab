import React from 'react';
import {BsFillNodeMinusFill} from "react-icons/bs"

export default function WhatWeAreNot() {
  return <>
        <div className="container pdtop-50">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 className="section-title"><BsFillNodeMinusFill/><br/> What we are not - <span className="light-text subheading">A Marketing Agency</span></h1>
                </div>
            </div>
        </div>
        <div className="container pdtopbottom-50">
            <div className="row">
                <div className="col-sm-6 col-md-3">
                    <div className="expertise-item-box">
                        <h5>Understand your business model</h5>
                        <div className="short-border"></div>
                        <p>Align with your goals directly</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="expertise-item-box">
                        <h5>No-hassle insider team</h5>
                        <div className="short-border"></div>
                        <p>Manage your agencies woes</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="expertise-item-box">
                        <h5>Own the problems</h5>
                        <div className="short-border"></div>
                        <p>Make stewardship/ownership explicit</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="expertise-item-box">
                        <h5>Here for your success, outcomes</h5>
                        <div className="short-border"></div>
                        <p>Build your internal team and capability</p>
                    </div>
                </div>
            </div>
        </div>
  </>;
}
