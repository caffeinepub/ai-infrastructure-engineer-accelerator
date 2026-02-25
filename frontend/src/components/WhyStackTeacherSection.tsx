import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function WhyStackTeacherSection() {
  const differentiators = [
    'Project-first curriculum — build 4 portfolio-grade projects employers can verify.',
    'Mentor-led cohorts — weekly 1:1s + live office hours (not just recordings).',
    'Employer-aware interview training — case interviews, system design, and hiring playbooks.',
    'AI-native: modern workflows using LLM APIs, vector stores and production deployments.',
    'Outcome-focused: job strategy & 90-day post-program placement coaching.',
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Why learners pick Stack Teacher
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {differentiators.map((item, index) => (
            <Card key={index} className="border-2">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed">{item}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
