import { Card, CardContent } from '@/components/ui/card';
import { FileText, Users, Briefcase, Target, MessageSquare, TrendingUp } from 'lucide-react';

export default function CareerServicesSection() {
  const services = [
    {
      icon: FileText,
      title: 'Resume & Portfolio Review',
      description: 'Professional feedback on your technical resume and GitHub portfolio',
    },
    {
      icon: Users,
      title: 'Mock Interviews',
      description: 'Practice technical and behavioral interviews with industry professionals',
    },
    {
      icon: Briefcase,
      title: 'Job Search Strategy',
      description: 'Personalized guidance on where and how to apply for maximum success',
    },
    {
      icon: Target,
      title: 'LinkedIn Optimization',
      description: 'Make your profile stand out to recruiters and hiring managers',
    },
    {
      icon: MessageSquare,
      title: 'Negotiation Coaching',
      description: 'Learn to negotiate offers and maximize your compensation package',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth Planning',
      description: 'Map out your path from junior to senior infrastructure engineer',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Career Services Included</h2>
            <p className="text-xl text-muted-foreground">
              We don't just teach you—we help you land the job
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title}>
                <CardContent className="pt-6">
                  <service.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg font-medium">
              These services alone are worth $2,000+, but they're included in your program fee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
