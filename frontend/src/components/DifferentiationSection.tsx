import { Card, CardContent } from '@/components/ui/card';
import { X, Check } from 'lucide-react';

export default function DifferentiationSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">What This Program Is NOT</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-destructive/50">
              <CardContent className="pt-6">
                <X className="h-8 w-8 text-destructive mb-4" />
                <h3 className="font-bold text-lg mb-2">NOT a Bootcamp</h3>
                <p className="text-sm text-muted-foreground">
                  No rushed 12-week crash course. We take 8 months to build real expertise.
                </p>
              </CardContent>
            </Card>

            <Card className="border-destructive/50">
              <CardContent className="pt-6">
                <X className="h-8 w-8 text-destructive mb-4" />
                <h3 className="font-bold text-lg mb-2">NOT Generic IT Training</h3>
                <p className="text-sm text-muted-foreground">
                  Focused specifically on AI-era infrastructure, not outdated IT concepts.
                </p>
              </CardContent>
            </Card>

            <Card className="border-destructive/50">
              <CardContent className="pt-6">
                <X className="h-8 w-8 text-destructive mb-4" />
                <h3 className="font-bold text-lg mb-2">NOT Self-Paced Videos</h3>
                <p className="text-sm text-muted-foreground">
                  Cohort-based with live mentorship, not just watching videos alone.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-primary">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Check className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-2xl mb-3">
                    This IS a Structured AI-Era Infrastructure Program
                  </h3>
                  <p className="text-muted-foreground">
                    Designed for the modern cloud and AI landscape, with hands-on projects, expert mentorship, and a clear path to employment.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
