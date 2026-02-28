import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, CheckCircle2, XCircle, Bot } from 'lucide-react';

export default function QAOpportunitySection() {
  const aiCanDo = [
    'Generate Selenium scripts',
    'Write test cases',
    'Suggest selectors',
    'Summarize bug reports',
  ];

  const weTeach = [
    'Test strategy (AI cannot replace human risk analysis)',
    'Framework architecture',
    'CI/CD integration',
    'Debugging skills',
    'AI usage responsibly',
    'QA engineering thinking',
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
              Why AI-Augmented QA?
            </h2>
            <p className="text-xl text-muted-foreground">
              The QA market is shifting. Here's how to stay ahead.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* What AI can already do */}
            <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Bot className="h-6 w-6 text-destructive" />
                <h3 className="text-lg font-bold text-destructive">What AI can already do</h3>
              </div>
              <ul className="space-y-3">
                {aiCanDo.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-destructive/20">
                <p className="text-sm font-semibold text-destructive">
                  If your course only teaches scripting → your graduates compete with AI.
                </p>
              </div>
            </div>

            {/* What this program trains instead */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-bold text-primary">What this program trains instead</h3>
              </div>
              <p className="text-sm font-semibold mb-3">AI-Augmented QA Automation Engineers who:</p>
              <ul className="space-y-3">
                {weTeach.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
    </section>
  );
}
