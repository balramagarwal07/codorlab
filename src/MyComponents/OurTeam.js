import React from 'react';
import user1 from '../Images/PP_01.jpg';

export default function OurTeam() {
  return <>
        <div className="container pdtopbottom-50">
            <div className="row">
                <div className="col-md-7 col-lg-7">
                    <div className="narrow-width-heading">
                        <h1 className="section-title"><span className="light-text">Management Board</span></h1>
                        <p>Codorlabs has a reputation as an egalitarian outsourcing company, and our management board members stay in constant touch with Codorlabs experts  and clients. For this reason, our clients can be sure that every project and every opportunity will receive the necessary level of strategic oversight from our executives.</p>
                    </div>
                </div>
            </div>
            <div className="row pdtop-50">
                <div className="col-sm-6 col-md-4 text-center">
                    <p><img src={user1} alt="CodorLabs"/></p>
                    <h4>Ameen</h4>
                    <p className="review-designation">UX/UI Developer</p>
                </div>
                <div className="col-sm-6 col-md-4 text-center">
                    <p><img src={user1} alt="CodorLabs"/></p>
                    <h4>Ritvik</h4>
                    <p className="review-designation">UX/UI Developer</p>
                </div>
                <div className="col-sm-6 col-md-4 text-center">
                    <p><img src={user1} alt="CodorLabs"/></p>
                    <h4>Balram Agarwal</h4>
                    <p className="review-designation">UX/UI Developer</p>
                </div>
            </div>
        </div>
  </>;
}
