import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function DataAnalyticsCurriculumSection() {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Data Foundations',
      topics: [
        'SQL from beginner to advanced',
        'Data cleaning techniques',
        'Relational databases',
        'Real-world datasets',
        'Problem-solving with data',
      ],
      outcome: 'You will build query fluency, not just memorize syntax.',
    },
    {
      phase: 'Phase 2',
      title: 'Python for Data',
      topics: [
        'Python basics',
        'Pandas and NumPy',
        'Data transformation',
        'API data extraction',
        'Automation scripts',
      ],
      outcome: 'You will learn to manipulate real data, not toy examples.',
    },
    {
      phase: 'Phase 3',
      title: 'Data Engineering Fundamentals',
      topics: [
        'ETL vs ELT',
        'Data pipelines',
        'Airflow basics',
        'Cloud data architecture',
        'Data warehousing concepts',
      ],
      outcome: 'You will build an end-to-end data pipeline project.',
    },
    {
      phase: 'Phase 4',
      title: 'AI + Analytics Integration',
      topics: [
        'Using AI APIs for analytics',
        'Auto-generating business insights',
        'AI-assisted reporting',
        'Building AI-powered dashboards',
        'Practical prompt usage for analysts',
      ],
      outcome: 'You will build an AI-enhanced analytics tool.',
      highlight: true,
    },
    {
      phase: 'Phase 5',
      title: 'Visualization & BI',
      topics: [
        'Tableau or Power BI',
        'KPI development',
        'Executive reporting',
        'Data storytelling',
      ],
      outcome: 'Your final dashboard projects will be portfolio-ready.',
    },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">What You Will Master</h2>
            <p className="text-xl text-muted-foreground">
              Five comprehensive phases from foundations to AI integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {phases.map((phase) => (
              <Card key={phase.phase} className={phase.highlight ? 'border-primary/40 bg-primary/5' : 'border-primary/20'}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={phase.highlight ? 'default' : 'outline'}>{phase.phase}</Badge>
                    {phase.highlight && (
                      <Badge variant="secondary" className="bg-primary/20 text-primary">
                        AI Focus
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-2xl">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {phase.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t">
                    <p className="text-sm font-medium text-primary">{phase.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
