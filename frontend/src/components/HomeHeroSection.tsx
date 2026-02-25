import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

export default function HomeHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(/assets/generated/hero-cohort.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="container relative py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
            Break into a $100K+ Tech Career —{' '}
            <span className="text-primary">Without a CS Degree</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground md:text-2xl">
            Stack Teacher trains working people and career switchers for real jobs in Cloud, Data & AI. 
            Live cohorts, hands-on projects, 1:1 mentors — no fluff, just outcomes.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>8 months</span>
            <span>•</span>
            <span>Live cohorts</span>
            <span>•</span>
            <span>Portfolio projects</span>
            <span>•</span>
            <span>US & Canada focused</span>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link to="/apply">
              <Button size="lg" className="w-full sm:w-auto">
                Apply for the Next Cohort →
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Download Course Brochure (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
