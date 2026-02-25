import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { Cloud, Database, Network, Shield, Cpu } from 'lucide-react';

export default function HeroSection() {
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
            Launch Your $100K+ Career in{' '}
            <span className="text-primary">AI Infrastructure Engineering</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground md:text-2xl">
            Master the 5 core skills companies desperately need. No coding experience required.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {[
              { icon: Cloud, label: 'Cloud Architecture' },
              { icon: Database, label: 'Data Systems' },
              { icon: Network, label: 'Networking' },
              { icon: Shield, label: 'Security' },
              { icon: Cpu, label: 'AI Integration' },
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
                Apply Now
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Download Curriculum
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
