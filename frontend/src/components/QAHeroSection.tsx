import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { Brain, Zap, GitBranch, Bot, Target } from 'lucide-react';

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
            12 Weeks | US Market Aligned | AI-Integrated
          </div>

          <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            AI-Augmented QA Automation{' '}
            <span className="text-primary">Engineer Program™</span>
          </h1>

          <p className="mt-6 text-xl text-muted-foreground md:text-2xl">
            Build automation skills + learn to use AI as a productivity multiplier — not a replacement.
          </p>

          <div className="mt-6 bg-destructive/10 border border-destructive/20 rounded-lg px-6 py-4 max-w-2xl mx-auto text-left space-y-2">
            <p className="text-sm font-semibold text-destructive uppercase tracking-wide">The old model is dying</p>
            <p className="text-sm text-muted-foreground">
              AI can already generate Selenium scripts, write test cases, suggest selectors, and summarize bug reports.
              If your course only teaches scripting — <strong>your graduates compete with AI.</strong>
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {[
              { icon: Brain, label: 'Test Strategy Design' },
              { icon: GitBranch, label: 'Resilient Automation Frameworks' },
              { icon: Bot, label: 'AI-Augmented Workflows' },
              { icon: Zap, label: 'CI/CD Integration' },
              { icon: Target, label: 'US Interview Readiness' },
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
