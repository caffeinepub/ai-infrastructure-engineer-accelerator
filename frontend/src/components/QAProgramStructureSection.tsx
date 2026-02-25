import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Video, Code, Clock, Users, MessageSquare, Shield } from 'lucide-react';

export default function QAProgramStructureSection() {
  const features = [
    { icon: Calendar, label: 'Duration: 3 Months (12 Weeks)' },
    { icon: Video, label: 'Weekly Live Sessions' },
    { icon: Code, label: 'Hands-On Projects' },
    { icon: Clock, label: '10–15 hours per week' },
    { icon: Users, label: 'Cohort-Based' },
    { icon: MessageSquare, label: '60-Day Post-Program Support' },
    { icon: Shield, label: 'Selective Admission' },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">
              Program Format & Time Commitment
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {features.map((feature) => (
              <Card key={feature.label} className="border-primary/20">
                <CardContent className="pt-6 text-center">
                  <feature.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                  <p className="font-medium">{feature.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center space-y-2">
            <p className="font-bold text-lg">This is not passive learning.</p>
            <p className="text-muted-foreground">Live sessions + assignments + project work required.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
