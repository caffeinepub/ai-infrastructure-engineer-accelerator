import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, Database, Cpu, Network, GitBranch } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      icon: Cloud,
      title: 'Multi-Region Cloud Architecture',
      description: 'Design and deploy a fault-tolerant application across multiple AWS regions',
    },
    {
      icon: Database,
      title: 'Scalable Data Pipeline',
      description: 'Build an ETL pipeline that processes millions of records efficiently',
    },
    {
      icon: Cpu,
      title: 'AI Model Deployment System',
      description: 'Create a production-ready ML model serving infrastructure',
    },
    {
      icon: Network,
      title: 'Kubernetes Cluster Management',
      description: 'Set up and manage a production Kubernetes cluster with monitoring',
    },
    {
      icon: GitBranch,
      title: 'Full CI/CD Pipeline',
      description: 'Implement automated testing, building, and deployment workflows',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Real-World Projects</h2>
            <p className="text-xl text-muted-foreground">
              Build a portfolio that proves you can do the job
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <img
                src="/assets/generated/cloud-architecture.dim_800x600.png"
                alt="Cloud architecture diagram"
                className="rounded-lg shadow-premium"
              />
            </div>
            <div>
              <img
                src="/assets/generated/ai-cloud-integration.dim_800x600.png"
                alt="AI cloud integration"
                className="rounded-lg shadow-premium"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.title}>
                <CardHeader>
                  <project.icon className="h-10 w-10 text-primary mb-3" />
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-lg px-6 py-4">
              <GitBranch className="h-5 w-5 text-primary" />
              <p className="font-medium">All projects published to your GitHub portfolio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
