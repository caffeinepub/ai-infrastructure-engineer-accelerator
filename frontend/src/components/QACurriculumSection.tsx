import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function QACurriculumSection() {
  const phases = [
    {
      month: 'Month 1',
      title: 'Foundations of Software Testing',
      topics: [
        'SDLC & Agile methodology',
        'Role of QA in modern teams',
        'Types of testing (functional, regression, UAT, smoke)',
        'Writing test cases & test scenarios',
        'Bug lifecycle & defect tracking',
        'Jira hands-on',
      ],
      outcome: 'You will practice writing real test documentation.',
    },
    {
      month: 'Month 2',
      title: 'Manual + API Testing',
      topics: [
        'Web application testing',
        'Mobile testing fundamentals',
        'Cross-browser testing',
        'API testing using Postman',
        'JSON basics',
        'Test execution reporting',
      ],
      outcome: 'You will practice writing real test documentation.',
      project: 'Complete testing cycle for a demo SaaS application.',
    },
    {
      month: 'Month 3',
      title: 'Automation & Job Preparation',
      topics: [
        'Basic Java or Python for QA',
        'Selenium fundamentals',
        'Automation test scripts',
        'Introduction to CI/CD',
        'Git basics',
      ],
      note: 'We introduce light coding gradually.',
      capstone: 'Manual + API + Automation mini framework.',
      highlight: true,
    },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">What You Will Learn (12-Week Roadmap)</h2>
            <p className="text-xl text-muted-foreground">
              Three focused months from foundations to automation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {phases.map((phase) => (
              <Card
                key={phase.month}
                className={phase.highlight ? 'border-primary/40 bg-primary/5' : 'border-primary/20'}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={phase.highlight ? 'default' : 'outline'}>{phase.month}</Badge>
                    {phase.highlight && (
                      <Badge variant="secondary" className="bg-primary/20 text-primary">
                        Automation
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {phase.note && (
                    <p className="text-sm font-medium text-primary italic">{phase.note}</p>
                  )}
                  <ul className="space-y-2">
                    {phase.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                  {phase.project && (
                    <div className="pt-4 border-t">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Project</p>
                      <p className="text-sm font-medium text-primary">{phase.project}</p>
                    </div>
                  )}
                  {phase.capstone && (
                    <div className="pt-4 border-t">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Capstone Project</p>
                      <p className="text-sm font-medium text-primary">{phase.capstone}</p>
                    </div>
                  )}
                  {phase.outcome && !phase.project && !phase.capstone && (
                    <div className="pt-4 border-t">
                      <p className="text-sm font-medium text-primary">{phase.outcome}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
