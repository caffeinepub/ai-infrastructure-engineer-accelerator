import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function TargetAudienceSection() {
  const audiences = [
    'Career switchers looking for high-paying tech roles',
    'Recent graduates wanting to enter AI infrastructure',
    'IT professionals ready to level up',
    'Self-taught learners seeking structured guidance',
    'Anyone curious about cloud and AI systems',
    'Professionals tired of low-growth careers',
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Who This Program Is For</h2>
            <p className="text-xl text-muted-foreground">
              Whether you're starting fresh or leveling up, this program meets you where you are
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {audiences.map((audience) => (
              <Card key={audience}>
                <CardContent className="flex items-start gap-3 pt-6">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="font-medium">{audience}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary/10 border-2 border-primary rounded-lg p-8 text-center">
            <p className="text-2xl font-bold mb-2">No Prior Coding Experience Required</p>
            <p className="text-muted-foreground">
              We start from the fundamentals and build your skills systematically
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
