import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function HomeFAQSection() {
  const faqs = [
    {
      question: 'Is this really beginner-friendly?',
      answer: 'Yes — our curriculum starts from fundamentals (no prior CS required). Expect 10–15 hours/week.',
    },
    {
      question: 'Do you guarantee job placement?',
      answer: 'No guarantees — we provide structured job support, projects, and interview coaching. Outcomes depend on the student\'s effort and the market.',
    },
    {
      question: 'What language & timezone do cohorts use?',
      answer: 'All cohorts run in English. We run multiple cohort times (US-friendly evenings and weekend intensives).',
    },
    {
      question: 'What makes Stack Teacher different from low-cost courses?',
      answer: 'Live mentors, verified projects, and focused career support — not just recordings.',
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
