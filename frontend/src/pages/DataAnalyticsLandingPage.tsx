import DataAnalyticsHeroSection from '../components/DataAnalyticsHeroSection';
import DataAnalyticsWhySection from '../components/DataAnalyticsWhySection';
import DataAnalyticsOpportunitySection from '../components/DataAnalyticsOpportunitySection';
import DataAnalyticsTargetAudienceSection from '../components/DataAnalyticsTargetAudienceSection';
import DataAnalyticsCurriculumSection from '../components/DataAnalyticsCurriculumSection';
import DataAnalyticsProjectsSection from '../components/DataAnalyticsProjectsSection';
import DataAnalyticsCareerServicesSection from '../components/DataAnalyticsCareerServicesSection';
import DataAnalyticsPricingSection from '../components/DataAnalyticsPricingSection';
import DataAnalyticsProgramStructureSection from '../components/DataAnalyticsProgramStructureSection';
import DataAnalyticsFAQSection from '../components/DataAnalyticsFAQSection';
import DataAnalyticsFinalCTASection from '../components/DataAnalyticsFinalCTASection';

export default function DataAnalyticsLandingPage() {
  return (
    <div className="w-full">
      <DataAnalyticsHeroSection />
      <DataAnalyticsWhySection />
      <DataAnalyticsOpportunitySection />
      <DataAnalyticsTargetAudienceSection />
      <DataAnalyticsCurriculumSection />
      <DataAnalyticsProjectsSection />
      <DataAnalyticsCareerServicesSection />
      <DataAnalyticsPricingSection />
      <DataAnalyticsProgramStructureSection />
      <DataAnalyticsFAQSection />
      <DataAnalyticsFinalCTASection />
    </div>
  );
}
