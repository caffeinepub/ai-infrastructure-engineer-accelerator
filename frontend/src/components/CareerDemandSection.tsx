import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp } from 'lucide-react';

export default function CareerDemandSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">
              The AI Infrastructure Boom is Here
            </h2>
            <p className="text-xl text-muted-foreground">
              Companies are scrambling to hire engineers who can build and maintain AI infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="/assets/generated/career-growth.dim_800x600.png"
                alt="Career growth chart"
                className="rounded-lg shadow-premium"
              />
            </div>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <TrendingUp className="h-8 w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">US/Canada Salaries</h3>
                      <p className="text-3xl font-bold text-primary mb-2">$95K - $180K</p>
                      <p className="text-sm text-muted-foreground">
                        Entry to senior level positions in AI infrastructure
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                <p className="font-medium text-lg mb-2">No Coding Experience Required</p>
                <p className="text-muted-foreground">
                  We teach you everything from scratch. If you can follow instructions and think logically, you can succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
