import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, CheckCircle2 } from 'lucide-react';

export default function DataAnalyticsOpportunitySection() {
  const skills = [
    'SQL',
    'Data modeling',
    'Cloud data tools',
    'Automation',
    'Business context',
  ];

  const salaries = [
    { role: 'Data Analyst', range: '$75,000 – $95,000' },
    { role: 'Analytics Engineer', range: '$100,000 – $140,000' },
    { role: 'Data Engineer', range: '$110,000 – $150,000' },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">
              The Opportunity
            </h2>
          </div>

          <div className="space-y-8">
            <div className="text-center space-y-4">
              <p className="text-xl font-bold">AI is transforming how companies use data.</p>
              <p className="text-lg text-muted-foreground">
                But AI doesn't replace data professionals.
              </p>
              <p className="text-lg">
                It amplifies the ones who understand:
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-lg px-4 py-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">{skill}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg font-medium mb-2">Modern analytics roles now require AI literacy.</p>
            </div>

            <div className="bg-muted/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-center mb-6">
                Average Salary Ranges (United States)
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {salaries.map((item) => (
                  <Card key={item.role}>
                    <CardContent className="pt-6 text-center">
                      <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h4 className="font-bold text-lg mb-2">{item.role}</h4>
                      <p className="text-2xl font-bold text-primary">{item.range}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-sm text-muted-foreground text-center mt-6">
                Canada ranges are slightly lower depending on province.
              </p>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
              <p className="font-medium text-lg">
                We do not promise outcomes. We prepare you for the roles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
