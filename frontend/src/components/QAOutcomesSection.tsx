import { CheckCircle2 } from 'lucide-react';

const outcomes = [
  'Design test strategy',
  'Build resilient automation frameworks',
  'Use AI to generate and maintain tests',
  'Integrate testing into CI/CD pipelines',
  'Perform API + UI automation',
  'Interpret AI-generated test insights',
  'Prepare for US-based QA interviews',
];

export default function QAOutcomesSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Program Outcomes</h2>
            <p className="text-xl text-muted-foreground">
              By the end of 12 weeks, you will be able to:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {outcomes.map((outcome) => (
              <div
                key={outcome}
                className="flex items-start gap-3 bg-background border border-primary/20 rounded-lg px-5 py-4"
              >
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-medium">{outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
