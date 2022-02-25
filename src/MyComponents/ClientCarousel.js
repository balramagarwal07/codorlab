import React, { Component } from "react";
import Slider from "react-slick";
import beachbody from '../Images/beachbody.png';
import bigbaskt from '../Images/big-basket.png';
import cred from '../Images/cred.png';
import creditkarma from '../Images/credit_karma.png';
import efficientfrontier from '../Images/Efficient-Frontier.png';
import eloan from '../Images/eLoan.png';
import munchery from '../Images/munchery.png';
import Oyo from '../Images/Oyo.png';
import prosper from '../Images/prosper.png';
import tutorvista from '../Images/Tutorvista.png';
import vetted from '../Images/Vetted.png';
import portea from '../Images/portea.png';


export default class Responsive extends Component {
    render() {
      var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };
      
      var settingsreverse = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        rtl: true,
        speed: 2000,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div className="grey-bg dark-text client-slider">
          <div className="container">
              <div className="row">
                  <div className="col-sm-12 text-center">
                      <h2 className="dark-text section-title">Partners & Clients</h2>
                      <p className="subheading light-text">20,000+ employees across 150+ organizations and counting...</p>
                  </div>
              </div>
              <div className="row pdtop-50">
                  <Slider {...settings}>
                      <div className="client-item">
                          <img src={beachbody} alt="CodorLabs"/>
                      </div>
                      <div className="client-item">
                          <img src={bigbaskt} alt="CodorLabs"/>
                      </div>
                      <div className="client-item">
                          <img src={cred} alt="CodorLabs"/>
                      </div>
                      <div className="client-item">
                          <img src={creditkarma} alt="CodorLabs"/>
                      </div>
                      <div className="client-item">
                          <img src={efficientfrontier} alt="CodorLabs"/>
                      </div>
                      <div className="client-item">
                          <img src={eloan} alt="CodorLabs"/>
                      </div>
                      <div className="client-item">
                          <img src={munchery} alt="CodorLabs"/>
                      </div>
                      <div className="client-item">
                          <img src={Oyo} alt="CodorLabs"/>
                      </div>
                  </Slider>
              </div>
              <div className="row">
                  <Slider {...settingsreverse}>
                      <div className="client-item">
                          <img src={munchery} alt="CodorLabs"/>
                      </div>
                      <div className="client-item">
                          <img src={portea} alt="CodorLabs"/>
                      </div>
                      <div className="client-item">
                          <img src={prosper} alt="CodorLabs"/>
                      </div>
                      <div className="client-item">
                          <img src={tutorvista} alt="CodorLabs"/>
                      </div>
                      <div className="client-item">
                          <img src={vetted} alt="CodorLabs"/>
                      </div>
                      <div className="client-item">
                          <img src={beachbody} alt="CodorLabs"/>
                      </div>
                      <div className="client-item">
                          <img src={bigbaskt} alt="CodorLabs"/>
                      </div>
                      <div className="client-item">
                          <img src={cred} alt="CodorLabs"/>
                      </div>
                  </Slider>
              </div>
            </div>
        </div>
      );
    }
  }