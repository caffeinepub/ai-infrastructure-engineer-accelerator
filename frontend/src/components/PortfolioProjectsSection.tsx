import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github } from 'lucide-react';

export default function PortfolioProjectsSection() {
  const projects = [
    {
      title: 'End-to-end AI SaaS deployment',
      description: 'Docker → Kubernetes → CI/CD',
      image: '/assets/generated/project-ai-saas.dim_600x400.png',
    },
    {
      title: 'Data pipeline + dashboard',
      description: 'Raw ingestion → ETL → BI',
      image: '/assets/generated/project-data-pipeline.dim_600x400.png',
    },
    {
      title: 'AI insights assistant',
      description: 'Vector search + prompt templates for executives',
      image: '/assets/generated/project-ai-insights.dim_600x400.png',
    },
    {
      title: 'Capstone: Production-ready system',
      description: 'With docs & interview walkthrough',
      image: '/assets/generated/project-capstone.dim_600x400.png',
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Portfolio projects you'll finish
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden hover:shadow-premium transition-shadow">
              <div className="aspect-[3/2] overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Github className="h-4 w-4" />
                  <span>GitHub link included</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
