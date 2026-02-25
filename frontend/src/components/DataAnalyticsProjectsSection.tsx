import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, TrendingUp, GitBranch, Brain, Presentation } from 'lucide-react';

export default function DataAnalyticsProjectsSection() {
  const projects = [
    {
      icon: BarChart3,
      title: 'Sales Analytics Dashboard',
      description: 'Build comprehensive sales performance tracking with KPIs and visualizations',
    },
    {
      icon: TrendingUp,
      title: 'Marketing Performance Analytics',
      description: 'Analyze campaign effectiveness and ROI across multiple channels',
    },
    {
      icon: GitBranch,
      title: 'End-to-End Data Pipeline',
      description: 'Design and implement automated ETL workflows with cloud tools',
    },
    {
      icon: Brain,
      title: 'AI-Assisted Reporting Tool',
      description: 'Create intelligent reporting system that generates insights automatically',
    },
    {
      icon: Presentation,
      title: 'Business Insights Presentation',
      description: 'Deliver executive-level data storytelling with actionable recommendations',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Real Projects You Build</h2>
            <p className="text-xl text-muted-foreground">
              Portfolio-ready work that demonstrates your capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {projects.map((project) => (
              <Card key={project.title} className="border-primary/20">
                <CardHeader>
                  <project.icon className="h-10 w-10 text-primary mb-3" />
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
            <p className="font-medium text-lg">
              All projects documented for portfolio and interviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
