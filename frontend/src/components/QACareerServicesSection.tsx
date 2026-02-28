import { Card, CardContent } from '@/components/ui/card';
import { FileText, Linkedin, MessageSquare, Code2, Users, Map } from 'lucide-react';

export default function QACareerServicesSection() {
  const services = [
    {
      icon: FileText,
      title: 'US-Format Resume Writing',
      description: 'Positioned for QA Automation Engineer roles in the US market.',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn Optimization',
      description: 'Profile tuned to attract US-based recruiters and hiring managers.',
    },
    {
      icon: MessageSquare,
      title: 'QA Interview Question Bank',
      description: 'Curated bank of real QA Automation interview questions with model answers.',
    },
    {
      icon: Code2,
      title: 'Automation Coding Mock Interviews',
      description: 'Live mock interviews with automation coding challenges — not just behavioral prep.',
    },
    {
      icon: Users,
      title: 'Behavioral Interview Training',
      description: 'STAR-method coaching for US-style behavioral and situational interviews.',
    },
    {
      icon: Map,
      title: '60-Day Job Strategy Plan',
      description: 'A structured 60-day post-program action plan to maximize your job search momentum.',
    },
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
              We prepare AI-augmented engineers for interviews — not just tool operators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="border-primary/20">
                <CardContent className="pt-6 text-center">
                  <service.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                  <p className="font-semibold mb-2">{service.title}</p>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-2xl font-bold">We prepare you for interviews — not just tools.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
