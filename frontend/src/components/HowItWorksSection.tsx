import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { UserCheck, Wrench, Rocket } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      icon: UserCheck,
      title: 'Apply & interview',
      description: 'Small cohorts keep mentoring personal.',
    },
    {
      number: 2,
      icon: Wrench,
      title: 'Learn & build',
      description: 'Live classes, labs, and mentor feedback.',
    },
    {
      number: 3,
      icon: Rocket,
      title: 'Launch',
      description: 'Portfolio, mock interviews, targeted job outreach.',
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            How the program works
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto mb-12">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="mb-4 inline-flex items-center justify-center">
                <div className="absolute -top-2 -left-2 font-display text-6xl font-bold text-primary/10">
                  {step.number}
                </div>
                <div className="relative rounded-full bg-primary/10 p-6">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link to="/apply">
            <Button size="lg" className="w-full sm:w-auto">
              Apply now
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            Schedule a free call
          </Button>
        </div>
      </div>
    </section>
  );
}
