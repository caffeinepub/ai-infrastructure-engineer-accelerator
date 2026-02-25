import HomeHeroSection from '../components/HomeHeroSection';
import WhatWeDoSection from '../components/WhatWeDoSection';
import WhyStackTeacherSection from '../components/WhyStackTeacherSection';
import FeaturedProgramsSection from '../components/FeaturedProgramsSection';
import PortfolioProjectsSection from '../components/PortfolioProjectsSection';
import ImpactCountersSection from '../components/ImpactCountersSection';
import CompaniesLogoSection from '../components/CompaniesLogoSection';
import TestimonialsSection from '../components/TestimonialsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import LeadCaptureSection from '../components/LeadCaptureSection';
import HomeFAQSection from '../components/HomeFAQSection';

export default function HomePage() {
  return (
    <div className="w-full">
      <HomeHeroSection />
      <WhatWeDoSection />
      <WhyStackTeacherSection />
      <FeaturedProgramsSection />
      <PortfolioProjectsSection />
      <ImpactCountersSection />
      <CompaniesLogoSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <LeadCaptureSection />
      <HomeFAQSection />
    </div>
  );
}
