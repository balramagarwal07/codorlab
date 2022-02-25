import React, { Component } from "react";
import Slider from "react-slick";
import user1 from '../Images/PP_01.jpg';


export default class Responsive extends Component {
    render() {
      var reviewsettings = {
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 300,
        cssEase: "linear",
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div className="container-fluid pd-50">
            <div className="row">
                <div className="col-md-7 col-lg-7">
                    <div className="narrow-width-heading">
                        <h1 className="section-title"><span className="light-text">Client Reviews</span> About The Quality Of Our Work</h1>
                    </div>
                </div>
            </div>
            <div className="row pdtop-50">
                <Slider {...reviewsettings}>
                    <div className="reviews-item">
                        <p><img src={user1} alt="CodorLabs"/></p>
                        <h4>Balram Agarwal</h4>
                        <p className="review-designation">UX/UI Developer</p>
                        <p className="reviews-content"><span className="light-text">"</span> 
                            They bring a very intelligent and dynamic approach of engagement into your project that you don’t get with other vendors. Their user experience focus and excellence is better than anyone I’ve ever worked with.
                        </p>
                    </div>
                    <div className="reviews-item">
                        <p><img src={user1} alt="CodorLabs"/></p>
                        <h4>Balram Agarwal</h4>
                        <p className="review-designation">UX/UI Developer</p>
                        <p className="reviews-content"><span className="light-text">"</span> 
                            One of the biggest values they bring to the table is the way of thinking critically during the whole development process. They’re not just building software, they’re effectively solving your business problem.
                        </p>
                    </div>
                    <div className="reviews-item">
                        <p><img src={user1} alt="CodorLabs"/></p>
                        <h4>Balram Agarwal</h4>
                        <p className="review-designation">UX/UI Developer</p>
                        <p className="reviews-content"><span className="light-text">"</span> They bring a very intelligent and dynamic approach of engagement into your project that you don’t get with other vendors. Their user experience focus and excellence is better than anyone I’ve ever worked with.</p>
                    </div>
                    <div className="reviews-item">
                        <p><img src={user1} alt="CodorLabs"/></p>
                        <h4>Balram Agarwal</h4>
                        <p className="review-designation">UX/UI Developer</p>
                        <p className="reviews-content"><span className="light-text">"</span> They bring a very intelligent and dynamic approach of engagement into your project that you don’t get with other vendors. Their user experience focus and excellence is better than anyone I’ve ever worked with.</p>
                    </div>
                </Slider>
            </div>
        </div>
      );
    }
  }