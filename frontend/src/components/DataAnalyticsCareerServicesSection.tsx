import { Card, CardContent } from '@/components/ui/card';
import { FileText, Linkedin, Code, Briefcase, FolderOpen, Calendar } from 'lucide-react';

export default function DataAnalyticsCareerServicesSection() {
  const services = [
    { icon: FileText, title: 'Resume rewriting for data roles' },
    { icon: Linkedin, title: 'LinkedIn optimization' },
    { icon: Code, title: 'SQL interview preparation' },
    { icon: Briefcase, title: 'Case study interview training' },
    { icon: FolderOpen, title: 'Portfolio guidance' },
    { icon: Calendar, title: '90-day post-program support' },
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
              This is not just a skills course.
            </p>
          </div>

          <div className="space-y-8">
            <p className="text-lg text-center font-medium">You also receive:</p>

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
              <p className="text-2xl font-bold">We guide. You execute.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
