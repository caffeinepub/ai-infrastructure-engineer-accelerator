import { Card, CardContent } from '@/components/ui/card';
import { X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

export default function DataAnalyticsPricingSection() {
  const notIncluded = [
    'A self-paced video bundle',
    'A random SQL tutorial',
    'A theory-heavy data science crash course',
  ];

  const included = [
    'Structured 8-month roadmap',
    'Live mentor-led sessions',
    'Real-world applied projects',
    'AI integration training',
    'Career support layer',
    'Cohort-based accountability',
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">
              Why Pay $2,999?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-6 text-center">Because this is not:</h3>
              <div className="space-y-4">
                {notIncluded.map((item) => (
                  <Card key={item}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">{item}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-center">This is:</h3>
              <div className="space-y-4">
                {included.map((item) => (
                  <Card key={item} className="border-primary/30">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="font-medium">{item}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold mb-8">
              You're investing in structured career progression.
            </p>
            <Link to="/apply">
              <Button size="lg">Apply for the Next Cohort</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
