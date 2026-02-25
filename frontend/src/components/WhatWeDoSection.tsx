import { GraduationCap, Briefcase, Sparkles } from 'lucide-react';

export default function WhatWeDoSection() {
  const features = [
    {
      icon: GraduationCap,
      title: 'Cohort-based learning + hands-on labs',
      description: 'Live instructor & weekly labs',
    },
    {
      icon: Briefcase,
      title: 'Career accelerator',
      description: 'Resume + interview training + job outreach playbook',
    },
    {
      icon: Sparkles,
      title: 'AI-integrated curriculum',
      description: 'Cloud + data + AI deployment',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Real skills. Real projects. Real hiring support.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12 max-w-3xl mx-auto">
          Trusted by professionals preparing for roles in Cloud, Data & Analytics, and AI Infrastructure.
        </p>
      </div>
    </section>
  );
}
