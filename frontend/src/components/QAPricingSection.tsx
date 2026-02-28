import { Card, CardContent } from '@/components/ui/card';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

export default function QAPricingSection() {
  const notThis = [
    "NOT a 'Learn Selenium in 3 months' course",
    'NOT manual testing + basic automation',
    'NOT tool-only training',
  ];

  const isThis = [
    'AI-augmented test engineering',
    'Resilient framework design',
    'CI/CD integration',
    'Prompt engineering for QA',
    'Career strategy layer',
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">
              Investment
            </h2>
            <p className="text-xl text-muted-foreground">
              This is a structured 12-week AI-augmented QA Automation Engineer program — not just a course.
            </p>
          </div>

          <Card className="border-2 border-primary/30">
            <CardContent className="pt-8 pb-8">
              <div className="text-center mb-8">
                <p className="text-6xl font-bold text-primary mb-2">$1,999</p>
                <p className="text-muted-foreground font-medium">One-time investment</p>
                <p className="text-sm text-muted-foreground mt-2">Flexible payment options available</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-2xl mx-auto">
                <div>
                  <p className="text-sm font-semibold text-destructive uppercase tracking-wide mb-3">This is NOT</p>
                  <div className="space-y-3">
                    {notThis.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">This IS</p>
                  <div className="space-y-3">
                    {isThis.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link to="/apply">
                  <Button size="lg" className="w-full sm:w-auto px-12">
                    Apply for the Next Cohort
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
