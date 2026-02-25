import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Video, FlaskConical, FolderKanban, Users, MessageCircle, PlayCircle } from 'lucide-react';

export default function DataAnalyticsProgramStructureSection() {
  const features = [
    { icon: Calendar, label: 'Duration: 8 Months' },
    { icon: Video, label: 'Weekly Live Sessions' },
    { icon: FlaskConical, label: 'Hands-On Labs' },
    { icon: FolderKanban, label: 'Portfolio Projects' },
    { icon: Users, label: 'Limited Cohort Size' },
    { icon: MessageCircle, label: 'Community Access' },
    { icon: PlayCircle, label: 'Recorded Access' },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">
              Program Format
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

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
            <p className="font-bold text-lg">Selective admission.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
