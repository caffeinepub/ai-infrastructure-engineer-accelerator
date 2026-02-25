import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export default function PricingSection() {
  const included = [
    '8 months of structured curriculum',
    'Live cohort-based learning',
    'Expert mentor support',
    '5 portfolio-ready projects',
    'Career services & job prep',
    'Lifetime alumni community',
    'Recorded session access',
    'Certificate of completion',
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Investment in Your Future</h2>
            <p className="text-xl text-muted-foreground">
              One payment, lifetime value
            </p>
          </div>

          <Card className="border-primary shadow-premium-lg">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-5xl font-bold mb-2">$2,999</CardTitle>
              <p className="text-muted-foreground">One-time payment or flexible payment plans available</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 mb-8">
                {included.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="bg-muted rounded-lg p-6 mb-6">
                <p className="text-center font-medium mb-2">
                  Average salary increase after completion: <span className="text-primary text-2xl font-bold">$45,000</span>
                </p>
                <p className="text-center text-sm text-muted-foreground">
                  Your investment pays for itself in less than 2 months
                </p>
              </div>

              <Link to="/apply">
                <Button size="lg" className="w-full">
                  Apply Now
                </Button>
              </Link>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Payment plans available. Speak with admissions for details.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
