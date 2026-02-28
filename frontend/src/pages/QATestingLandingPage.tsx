import QAHeroSection from '../components/QAHeroSection';
import QAOutcomesSection from '../components/QAOutcomesSection';
import QATargetAudienceSection from '../components/QATargetAudienceSection';
import QAOpportunitySection from '../components/QAOpportunitySection';
import QACurriculumSection from '../components/QACurriculumSection';
import QAProjectsSection from '../components/QAProjectsSection';
import QACareerServicesSection from '../components/QACareerServicesSection';
import QAProgramStructureSection from '../components/QAProgramStructureSection';
import QAPricingSection from '../components/QAPricingSection';
import QAFAQSection from '../components/QAFAQSection';
import QAFinalCTASection from '../components/QAFinalCTASection';

export default function QATestingLandingPage() {
  return (
    <div className="w-full">
      <QAHeroSection />
      <QAOutcomesSection />
      <QATargetAudienceSection />
      <QAOpportunitySection />
      <QACurriculumSection />
      <QAProjectsSection />
      <QACareerServicesSection />
      <QAProgramStructureSection />
      <QAPricingSection />
      <QAFAQSection />
      <QAFinalCTASection />
    </div>
  );
}
