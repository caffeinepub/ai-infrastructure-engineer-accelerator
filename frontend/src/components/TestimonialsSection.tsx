import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Stack Teacher's capstone was the reason I got my first cloud role — the mock interviews and code review prepared me.",
      name: 'Anita R.',
      role: 'Cloud Associate',
      image: '/assets/generated/testimonial-anita.dim_400x400.png',
      initials: 'AR',
    },
    {
      quote: 'From Excel to SQL and a portfolio dashboard — this program gave me a real path to analytics.',
      name: 'Carlos V.',
      role: 'Analytics Engineer',
      image: '/assets/generated/testimonial-carlos.dim_400x400.png',
      initials: 'CV',
    },
    {
      quote: 'Mentor sessions were the difference. Real humans who understood US hiring.',
      name: 'Priya S.',
      role: 'Data Engineer',
      image: '/assets/generated/testimonial-priya.dim_400x400.png',
      initials: 'PS',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What learners say
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-2">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-sm leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
