import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function CurriculumSection() {
  const phases = [
    {
      phase: 'Phase 1',
      duration: '2 months',
      title: 'Tech Foundations',
      topics: [
        'Linux command line mastery',
        'Networking fundamentals',
        'Version control with Git',
        'Scripting basics (Bash, Python)',
      ],
    },
    {
      phase: 'Phase 2',
      duration: '2 months',
      title: 'Cloud Engineering',
      topics: [
        'AWS core services (EC2, S3, RDS)',
        'Infrastructure as Code (Terraform)',
        'CI/CD pipelines',
        'Monitoring and logging',
      ],
    },
    {
      phase: 'Phase 3',
      duration: '2 months',
      title: 'Kubernetes & Scaling',
      topics: [
        'Container orchestration',
        'Kubernetes architecture',
        'Auto-scaling strategies',
        'Service mesh basics',
      ],
    },
    {
      phase: 'Phase 4',
      duration: '2 months',
      title: 'AI + Cloud Integration',
      topics: [
        'GPU infrastructure setup',
        'Model deployment pipelines',
        'Vector databases',
        'AI workload optimization',
      ],
    },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">8-Month Curriculum</h2>
            <p className="text-xl text-muted-foreground">
              Four phases that take you from beginner to job-ready
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {phases.map((phase) => (
              <Card key={phase.phase} className="border-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{phase.phase}</Badge>
                    <span className="text-sm text-muted-foreground">{phase.duration}</span>
                  </div>
                  <CardTitle className="text-2xl">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
