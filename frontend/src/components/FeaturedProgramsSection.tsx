import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';

export default function FeaturedProgramsSection() {
  const programs = [
    {
      title: 'AI Infrastructure Engineer Accelerator',
      description: 'Cloud, Kubernetes, CI/CD, Terraform — scale and deploy AI systems.',
      badge: 'Advanced',
      link: '/infrastructure',
      cohort: 'Next cohort intake — limited seats.',
    },
    {
      title: 'AI Data & Analytics Engineer Accelerator',
      description: 'SQL → pipelines → AI-assisted analytics → dashboards that influence decisions.',
      badge: 'Mid-Level',
      link: '/data-analytics',
      cohort: 'Next cohort intake — limited seats.',
    },
    {
      title: 'AI-Augmented QA Automation Engineer Program',
      description: 'Test strategy + automation frameworks + AI-powered workflows — build skills that AI cannot replace.',
      badge: 'AI-Integrated | 12 Weeks',
      link: '/qa-testing',
      cohort: 'Next cohort intake — limited seats.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Programs
          </h2>
          <p className="text-lg text-muted-foreground">
            From entry-level gateway to advanced engineering — find your path.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {programs.map((program) => (
            <Card key={program.title} className="border-2 hover:shadow-premium transition-shadow flex flex-col">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">{program.badge}</Badge>
                <CardTitle className="text-xl">{program.title}</CardTitle>
                <CardDescription className="text-base mt-2">{program.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <p className="text-xs text-muted-foreground mb-4">{program.cohort}</p>
                <Link to={program.link}>
                  <Button variant="outline" className="w-full group">
                    View syllabus
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
