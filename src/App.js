import './App.css';
import './style.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import DotRing from "./MyComponents/DotRing/DotRing";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import HomePage from './MyComponents/HomePage';
import About from "./MyComponents/About";
import OurServices from "./MyComponents/OurServices";
import CaseStudiesList from "./MyComponents/CaseStudy/CaseStudiesList";
import CaseStudyDetails from './MyComponents/CaseStudy/CaseStudyDetails';
import ContactUs from "./MyComponents/ContactUs";
import ConsultingAndAdvisory from './MyComponents/Ourservices/ConsultingAndAdvisory';
import AdOperations from './MyComponents/Ourservices/AdOperations';
import BrandAdvisory from './MyComponents/Ourservices/BrandAdvisory';
import BussinessPlaning from './MyComponents/Ourservices/BussinessPlaning';
import PerformanceMarketing from './MyComponents/Ourservices/PerformanceMarketing';
import ProjectManagement from './MyComponents/Ourservices/ProjectManagement';
import TacticalAnalytical from './MyComponents/Ourservices/TacticalAnalytical';
import MarketingTechnology from './MyComponents/Ourservices/MarketingTechnology';
import MeasurementsExperiments from './MyComponents/Ourservices/MeasurementsExperiments';
import EcommerceSetup from './MyComponents/Ourservices/EcommerceSetup';
import MediaHealthConsulting from './MyComponents/Ourservices/MediaHealthConsulting';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <DotRing />
        <Header />
        <div className="cursor-dot-outline"></div>
        <div className="cursor-dot"></div>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/about" >
            <About />
          </Route>
          <Route exact path="/casestudies" >
            <CaseStudiesList />
          </Route>
          <Route exact path="/services" >
            <OurServices />
          </Route>
          <Route exact path="/services/consulting-advisory-services" >
            <ConsultingAndAdvisory/>
          </Route>
          <Route exact path="/services/ad-operations-services" >
            <AdOperations/>
          </Route>
          <Route exact path="/services/marketing-technology-services" >
            <MarketingTechnology/>
          </Route>
          <Route exact path="/services/measurements-experiments-services" >
            <MeasurementsExperiments/>
          </Route>
          <Route exact path="/services/brand-advisory" >
            <BrandAdvisory/>
          </Route>
          <Route exact path="/services/bussiness-planing-services" >
            <BussinessPlaning/>
          </Route>
          <Route exact path="/services/performance-marketing-services" >
            <PerformanceMarketing/>
          </Route>
          <Route exact path="/services/project-management-services" >
            <ProjectManagement/>
          </Route>
          <Route exact path="/services/tactical-and-analytical-services" >
            <TacticalAnalytical/>
          </Route>
          <Route exact path="/services/ecommerce-setup" >
            <EcommerceSetup/>
          </Route>
          <Route exact path="/services/media-health-consulting" >
            <MediaHealthConsulting/>
          </Route>
          <Route exact path="/contact" >
            <ContactUs />
          </Route>
          <Route exact path="/casestudies/casestudydetails" >
            <CaseStudyDetails/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
