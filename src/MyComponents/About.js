import React from 'react';
import WhoWeAre from './WhoWeAre';

export default function About() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return <>
      <div className="container-fluid pdtopbottom-50">
            <div className="row">
                <div className="col-sm-12 col-md-7">
                    <h1 className="section-title pdbottom-50">About us</h1>
                    <p>Our experts bring forward conventional thinking to build, optimise growth for brands</p>
                    <p>We understand modern marketing and are experts in the use of marketing technology to create valuable, impactful and transparent marketing</p>
                    <p>Data-Driven growth marketing agency helping the brand to transform digitally</p>
                    <p>A media agency making the best use of analytics and technology</p>
                    <p>A unified approach to data analytics that brings creativity and media together</p>
                </div>
            </div>
        </div>
        <div className="container-fluid pdtopbottom-50">
            <div className="row">
                <div className="col-sm-12">
                    <ul className="growth-stats">
                      <li><h2>4.8/5</h2><p>Customer satisfaction rate</p></li>
                      <li><h2>44<sup>+</sup></h2><p>Projects Annually</p></li>
                      <li><h2>70<sup>%</sup></h2><p>Annual company growth</p></li>
                    </ul>
                </div>
            </div>
        </div>
        <WhoWeAre/>
  </>;
}
