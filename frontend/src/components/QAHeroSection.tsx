import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { CheckCircle2, Bug, TestTube2, Code2 } from 'lucide-react';

export default function QAHeroSection() {
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
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary mb-6">
            12-Week Intensive | US Market Focused
          </div>

          <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            QA & Software Testing{' '}
            <span className="text-primary">Career Launch Program™</span>
          </h1>

          <p className="mt-6 text-xl text-muted-foreground md:text-2xl">
            Break into the tech industry through one of the most accessible entry paths: Quality Assurance.
          </p>

          <p className="mt-4 text-lg text-muted-foreground">
            This 3-month structured program is designed for beginners who want to build practical testing skills and prepare for entry-level QA roles in the United States.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {[
              { icon: CheckCircle2, label: 'No Computer Science degree required' },
              { icon: CheckCircle2, label: 'No prior coding experience required' },
              { icon: Bug, label: 'Manual & API Testing' },
              { icon: TestTube2, label: 'Automation Fundamentals' },
              { icon: Code2, label: 'Job Readiness Accelerator' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm font-medium">
                <Icon className="h-5 w-5 text-primary" />
                <span>{label}</span>
              </div>
            ))}
          </div>

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
