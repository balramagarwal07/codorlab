import React from 'react';
import './CaseStudy.css';
import Gallery from 'react-grid-gallery';
import ReactPlayer from 'react-player'
import Casestudybanner from "../../Images/dhani.jpg";
import macbooktms from "../../Images/macbook_tms.webp";

export default function CaseStudyDetails() {
  React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
const IMAGES =
[{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 220,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}]
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 220,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
},
 
{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 220,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
},
 
{
        src: "https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_n.jpg",
        thumbnail: "https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_n.jpg",
        thumbnailWidth: 420,
        thumbnailHeight: 220,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
}]

  return <>
        <div className="container-fluid pdbottom-50 casestudydetailspage nopadding-leftright">
            <div className="row d-flex align-items-center no-gutters">
                <div className="col-md-12 banner">
                  <img src={Casestudybanner} alt="Case Study"/>
                </div>
            </div>
        </div>
        <div className="container-fluid pdbottom-50 casestudydetailspage">
            <div className="row d-flex align-items-center pdbottom-50">
                <div className="col-md-10 offset-md-1">
                  <div className="narrow-width-contianer">
                    <h1 className="heading">Check out the custom solutions we built for our clients to achieve their unique business goals and seize new opportunities</h1>
                  </div>
                </div>
            </div>
          </div>
          <div className="container-fluid pdtopbottom-50 darken-bg">
            <div className="row">
                <div className="col-sm-12">
                    <ul className="growth-stats">
                      <li><h2>Industry</h2><p className="bigtext">Banking And Financial Services</p></li>
                      <li><h2>Service</h2><p className="bigtext">Digital Media Planning And Buying Influencer Marketing</p></li>
                    </ul>
                </div>
            </div>
          </div>
          <div className="container-fluid pdbottom-50 casestudydetailspage">
            <div className="row pdtop-50 align-items-center">
                <div className="col-md-6">
                  <h1 className="section-title">About the <span className="light-text">brand</span></h1>
                  <p className="bigtext pdtop-20">The sole business goal for Dhani was to get maximum new app 
                    users via Dhani Games who would, in turn, use their App for 
                    Doctor Consultations, The Super Saver Card, Dhani Credit Line,
                    and many more features that the App entails. The quantifiable 
                    goal was to achieve maximum installs at a low Cost Per Install 
                    and further optimize the campaigns for the lower funnel event of 
                    App Registrations at an optimum Cost Per Registration.
                    </p>
                </div>
                <div className="col-md-6">
                  <p><img src={macbooktms} alt="Case Study"/></p>
                </div>
            </div>
        </div>
        <div className="container-fluid grey-bg dark-text round-section">
            <div className="row align-items-center">
                <div className="col-sm-6">
                    <h2 className="dark-text section-title">Strategy/Execution</h2>
                    <p className="bigtext dark-text pdtop-20">
                    The sole business goal for Dhani was to get maximum new app 
                    users via Dhani Games who would, in turn, use their App for 
                    Doctor Consultations, The Super Saver Card, Dhani Credit Line,
                    and many more features that the App entails. The quantifiable 
                    goal was to achieve maximum installs at a low Cost Per Install 
                    and further optimize the campaigns for the lower funnel event of 
                    App Registrations at an optimum Cost Per Registration.
                    The quantifiable goal was to achieve maximum installs at a low Cost Per Install 
                    and further optimize the campaigns for the lower funnel event of 
                    App Registrations at an optimum Cost Per Registration.
                    </p>
                </div>
                <div className="col-md-6">
                  <p><img src={macbooktms} alt="Case Study"/></p>
                </div>
            </div>
            <div className="row align-items-center pdtop-50">
                <div className="col-sm-12 text-center pdbottom-50">
                    <h2 className="dark-text section-title">Gallery</h2>
                </div>
                <div className="col-sm-12 text-center">
                  <Gallery images={IMAGES} backdropClosesModal={true}/>
                </div>
            </div>
        </div>
        <div className="container-fluid pdtopbottom-50 casestudydetailspage">
          <div className="row justify-content-center">
            <div className="col-md-6 m-auto">
              <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' width="100%"/>
            </div>
          </div>
        </div>
        <div className="container-fluid pdtopbottom-50 bg-primary casestudydetailspage">
          <div className="row">
            <div className="col-md-12 text-center pdbottom-50">
              <h1 className="section-title">Results</h1>
            </div>
            <div className="col-sm-12">
                <ul className="growth-stats">
                  <li><h2>Install</h2><p className="heading">10M+</p></li>
                  <li><h2>Registrations</h2><p className="heading">2.6M+</p></li>
                  <li><h2>Gameplays</h2><p className="heading">2.2M+</p></li>
                </ul>
            </div>
          </div>
        </div>
  </>;
}
