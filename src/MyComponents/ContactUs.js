import React from 'react';
import careerimage from "../Images/career-image.jpg";
import {BsPinMap} from 'react-icons/bs';
import {BsTelephoneFill} from 'react-icons/bs';
import {BsFillEnvelopeFill} from 'react-icons/bs';
  
export default function ContactUs() {
  React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return <>
      <div className="container-fluid contactus-bg dark-text">
            <div className="row">
                <div className="col-md-6">
                  <h1 className="section-title uppercase secondary-text">Let's Connect</h1>
                  <p className="bigtext">Are you ready to make something memorable?<br/>
                    We're ready to help.</p>
                </div>
                <div className="col-md-6">
                  <form method="POST" id="contactform" className="grey-bg contact-formbox" action="">
                    <div className="row">
                      <div className="col-sm-12">
                        <p className="subheading pdbottom-20">I'm Interested in* </p>
                      </div>
                      <div className="col-sm-6">
                        <input name="services" type="checkbox" value="Social Media Marketing" id="socialmediamarketing"/>
                        <label htmlFor="socialmediamarketing"> Social Media Marketing</label>
                      </div>
                      <div className="col-sm-6">
                        <input name="services" type="checkbox" value="Social Media Marketing" id="socialmediamarketing"/>
                        <label htmlFor="socialmediamarketing"> Performance advertising</label>
                      </div>
                      <div className="col-sm-6">
                        <input name="services" type="checkbox" value="Social Media Marketing" id="seomediamarketing"/>
                        <label htmlFor="seomediamarketing"> SEO and content marketing</label>
                      </div>
                      <div className="col-sm-6">
                        <input name="services" type="checkbox" value="Social Media Marketing" id="multimarketing"/>
                        <label htmlFor="multimarketing"> Multilingual marketing</label>
                      </div>
                      <div className="col-sm-6">
                        <input name="services" type="checkbox" value="Social Media Marketing" id="videomediamarketing"/>
                        <label htmlFor="videomediamarketing"> Video creation and marketing</label>
                      </div>
                      <div className="col-sm-6">
                        <input name="services" type="checkbox" value="Social Media Marketing" id="influencemarketing"/>
                        <label htmlFor="influencemarketing"> Influencer Marketing</label>
                      </div>
                      <div className="col-sm-6">
                        <input name="services" type="checkbox" value="Social Media Marketing" id="landingpagecret"/>
                        <label htmlFor="landingpagecret"> Website &amp; Landing Pages</label>
                      </div>
                      <div className="col-sm-6">
                        <input name="services" type="checkbox" value="Social Media Marketing" id="brandindent"/>
                        <label htmlFor="brandindent"> Branding &mp; Identity</label>
                      </div>
                    </div>
                    <div className="row pdtop-20">
                      <div className="col-sm-6">
                        <input type="text" placeholder="Your Name" className="form-control" />
                      </div>
                      <div className="col-sm-6">
                      <input type="text" placeholder="Your Mobile" className="form-control" />
                      </div>
                      <div className="col-sm-6">
                        <input type="email" placeholder="Your Email" className="form-control" />
                      </div>
                      <div className="col-sm-6">
                      <input type="text" placeholder="Your City" className="form-control" />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" placeholder="Your Website URL" className="form-control" />
                      </div>
                      <div className="col-sm-6">
                      <input type="text" placeholder="Your Message" className="form-control" />
                      </div>
                    </div>
                    <div className="row pdtop-20">
                      <div className="col-sm-12 text-center">
                        <input type="submit" value="Submit Query" className="dark-button small-button m-auto" />
                      </div>
                    </div>
                  </form>
                </div>
            </div>
        </div>
        <div className="container-fluid white-bg pd-50 dark-text">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 text-center pdbottom-50">
              <h1 className="section-title uppercase secondary-text">Contact Us</h1>
              <p className="text-muted bigtext">We take the time to understand your organization and customers, and then build a strategy that is aligned and capable of delivering remarkable results.</p>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
          <div className="col-sm-6 col-md-4">
              <img src={careerimage} alt="Contact Us"/>
            </div>
            <div className="col-sm-6 col-md-5">
              <div className="contactus-info grey-bg">
                <p className="bigtext"><BsPinMap/> <span>830 Dixon Road Etobicoke ON, M9W 6Y8 India </span></p>
                <p className="bigtext"><BsTelephoneFill/> <span>+91-9876543210</span></p>
                <p className="bigtext"><BsFillEnvelopeFill/> <span>contact@codorlabs.com</span></p>
              </div>
            </div>
          </div>
        </div>
  </>;
}
