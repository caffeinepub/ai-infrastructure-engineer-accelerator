import HeroSection from '../components/HeroSection';
import CareerDemandSection from '../components/CareerDemandSection';
import TargetAudienceSection from '../components/TargetAudienceSection';
import DifferentiationSection from '../components/DifferentiationSection';
import CurriculumSection from '../components/CurriculumSection';
import ProjectsSection from '../components/ProjectsSection';
import ProgramStructureSection from '../components/ProgramStructureSection';
import InstructorSection from '../components/InstructorSection';
import FutureProofSection from '../components/FutureProofSection';
import CareerServicesSection from '../components/CareerServicesSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import FinalCTASection from '../components/FinalCTASection';

export default function LandingPage() {
  return (
    <div className="w-full">
      <HeroSection />
      <CareerDemandSection />
      <TargetAudienceSection />
      <DifferentiationSection />
      <CurriculumSection />
      <ProjectsSection />
      <ProgramStructureSection />
      <InstructorSection />
      <FutureProofSection />
      <CareerServicesSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}
