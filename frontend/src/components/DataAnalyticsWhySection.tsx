import { Card, CardContent } from '@/components/ui/card';
import { X } from 'lucide-react';

export default function DataAnalyticsWhySection() {
  const problems = [
    'Overwhelming math-heavy content',
    'Outdated curriculum not aligned with AI tools',
    'Too much theory, not enough applied projects',
    'No job preparation support',
    'Confusing path between analyst vs engineer',
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">
              Why This Program Exists
            </h2>
            <p className="text-xl text-muted-foreground">
              The Problem with Most Data Courses
            </p>
          </div>

          <div className="space-y-4 mb-8">
            <p className="text-lg text-center text-muted-foreground">
              Most beginners face one of these issues:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {problems.map((problem) => (
                <Card key={problem}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <p className="text-muted-foreground">{problem}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold">We built this program to fix that.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
