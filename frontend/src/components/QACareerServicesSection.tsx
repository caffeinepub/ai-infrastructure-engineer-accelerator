import { Card, CardContent } from '@/components/ui/card';
import { FileText, Linkedin, MessageSquare, Video, Users, TrendingUp, Calendar } from 'lucide-react';

export default function QACareerServicesSection() {
  const services = [
    { icon: FileText, title: 'US-format resume writing' },
    { icon: Linkedin, title: 'LinkedIn optimization' },
    { icon: MessageSquare, title: 'QA interview question bank' },
    { icon: Video, title: 'Mock interviews' },
    { icon: Users, title: 'Behavioral interview training' },
    { icon: TrendingUp, title: 'Job search strategy guidance' },
    { icon: Calendar, title: '60-day post-program support' },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">
              Career Accelerator Layer
            </h2>
            <p className="text-xl text-muted-foreground">
              This is critical for US market positioning.
            </p>
          </div>

          <div className="space-y-8">
            <p className="text-lg text-center font-medium">Included:</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card key={service.title} className="border-primary/20">
                  <CardContent className="pt-6 text-center">
                    <service.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                    <p className="font-medium">{service.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center space-y-2">
              <p className="text-2xl font-bold">We prepare you for interviews — not just tools.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
