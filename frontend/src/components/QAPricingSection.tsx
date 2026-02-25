import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

export default function QAPricingSection() {
  const included = [
    '12-week structured curriculum',
    'Live mentor-led sessions',
    'Hands-on project portfolio',
    'Career accelerator layer',
    'Mock interviews & resume support',
    '60-day post-program support',
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">
              Investment
            </h2>
            <p className="text-xl text-muted-foreground">
              A focused, structured 12-week career launch program — not just a course.
            </p>
          </div>

          <Card className="border-2 border-primary/30">
            <CardContent className="pt-8 pb-8">
              <div className="text-center mb-8">
                <p className="text-6xl font-bold text-primary mb-2">$1,999</p>
                <p className="text-muted-foreground font-medium">One-time investment</p>
                <p className="text-sm text-muted-foreground mt-2">Flexible payment options available</p>
              </div>

              <div className="space-y-3 mb-8 max-w-sm mx-auto">
                {included.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
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
