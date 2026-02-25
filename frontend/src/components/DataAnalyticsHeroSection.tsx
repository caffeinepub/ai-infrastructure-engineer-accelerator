import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { Database, GitBranch, BarChart3, Brain, MessageSquare } from 'lucide-react';

export default function DataAnalyticsHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(/assets/generated/hero-background.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="container relative py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            AI Data & Analytics Engineer{' '}
            <span className="text-primary">Accelerator™</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground md:text-2xl">
            Build Real-World Data Skills. Integrate AI. Launch a Modern Analytics Career.
          </p>

          <div className="mt-8 space-y-4">
            <p className="text-lg text-muted-foreground">
              Data is no longer just dashboards and spreadsheets.
            </p>
            <p className="text-lg font-medium">Modern companies need professionals who can:</p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {[
              { icon: Database, label: 'Extract and clean data' },
              { icon: GitBranch, label: 'Build data pipelines' },
              { icon: BarChart3, label: 'Design dashboards' },
              { icon: Brain, label: 'Integrate AI into analytics workflows' },
              { icon: MessageSquare, label: 'Translate business questions into data-driven decisions' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm font-medium">
                <Icon className="h-5 w-5 text-primary" />
                <span>{label}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-lg font-medium">This program is built for that.</p>
          <p className="mt-2 text-muted-foreground">No hype. No shortcuts. Just structured, practical skill development.</p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link to="/apply">
              <Button size="lg" className="w-full sm:w-auto">
                Apply for the Next Cohort
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
