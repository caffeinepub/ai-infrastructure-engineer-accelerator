import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw, GraduationCap, Globe, Briefcase, Monitor, Users, Lightbulb } from 'lucide-react';

export default function QATargetAudienceSection() {
  const audiences = [
    { icon: RefreshCw, label: 'Career switchers entering tech' },
    { icon: GraduationCap, label: 'Business or non-technical graduates' },
    { icon: Globe, label: 'International students in the US' },
    { icon: Briefcase, label: 'Professionals impacted by layoffs' },
    { icon: Monitor, label: 'IT support professionals seeking transition' },
    { icon: Lightbulb, label: 'Beginners looking for a structured pathway' },
    { icon: Users, label: 'Anyone ready to take their first step into tech' },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">
              Who This Program Is For
            </h2>
            <p className="text-xl text-muted-foreground">
              This program is designed for:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {audiences.map(({ icon: Icon, label }) => (
              <Card key={label}>
                <CardContent className="pt-6 text-center">
                  <Icon className="h-10 w-10 text-primary mx-auto mb-3" />
                  <p className="font-medium">{label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-accent/10 border-2 border-accent/30 rounded-lg p-8 text-center">
            <p className="text-2xl font-bold text-primary">
              This program is focused, fast-paced, and practical.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
