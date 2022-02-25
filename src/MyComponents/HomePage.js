import React from 'react';
import AnimationBanner from './AnimationBanner';
import ServiceTabs from './ServiceTabs';
import WhyWeAre from './WhyWeAre';
import OurTrackRecord from './OurTrackRecord';
import WhatWeAreNot from './WhatWeAreNot';
import ClientCarousel from './ClientCarousel';
import CaseStudySection from './CaseStudy/CaseStudySection';

export default function HomePage() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return <>
  <div>
            <AnimationBanner/>
            <ServiceTabs/>
            <WhyWeAre/>
            <OurTrackRecord/>
            <WhatWeAreNot/>
            <ClientCarousel/>
            <CaseStudySection/>
            </div>
  </>;
}
