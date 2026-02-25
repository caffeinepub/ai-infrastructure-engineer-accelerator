import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Users, Award, MessageCircle, Video, Globe } from 'lucide-react';

export default function ProgramStructureSection() {
  const features = [
    {
      icon: Calendar,
      title: '8 Months',
      description: 'Comprehensive learning timeline',
    },
    {
      icon: Users,
      title: 'Cohort-Based',
      description: 'Learn with peers, not alone',
    },
    {
      icon: Award,
      title: 'Limited Seats',
      description: 'Selective admission process',
    },
    {
      icon: MessageCircle,
      title: 'Mentor Support',
      description: '1-on-1 guidance when needed',
    },
    {
      icon: Video,
      title: 'Recorded Access',
      description: 'Review sessions anytime',
    },
    {
      icon: Globe,
      title: 'Community',
      description: 'Lifetime alumni network',
    },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Program Structure</h2>
            <p className="text-xl text-muted-foreground">
              Designed for working professionals who want to transition careers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardContent className="pt-6 text-center">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <img
              src="/assets/generated/phase-icons.dim_512x512.png"
              alt="Program phases"
              className="mx-auto rounded-lg shadow-premium max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
