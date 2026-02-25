import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, CheckCircle2 } from 'lucide-react';

export default function QAOpportunitySection() {
  const bullets = [
    'QA roles exist in nearly every tech company',
    'Fintech, healthcare, SaaS, and enterprise firms require strong QA teams',
    'Entry-level QA positions are more accessible than many engineering roles',
    'Automation knowledge increases salary potential',
  ];

  const salaries = [
    { role: 'Entry-Level QA (US)', range: '$60,000 – $80,000' },
    { role: 'Automation QA (with experience)', range: '$90,000+' },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">
              Why QA Is a Smart Entry Path in the US
            </h2>
          </div>

          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-4">
              {bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="flex items-start gap-3 bg-accent/10 border border-accent/20 rounded-lg px-5 py-4"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="bg-muted/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-center mb-6">
                Salary Ranges (United States)
              </h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {salaries.map((item) => (
                  <Card key={item.role}>
                    <CardContent className="pt-6 text-center">
                      <TrendingUp className="h-8 w-8 text-primary mx-auto mb-3" />
                      <h4 className="font-bold text-base mb-2">{item.role}</h4>
                      <p className="text-2xl font-bold text-primary">{item.range}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-sm text-muted-foreground text-center mt-6">
                Results vary by location and performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
