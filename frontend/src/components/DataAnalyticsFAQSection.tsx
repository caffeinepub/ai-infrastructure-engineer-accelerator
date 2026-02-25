import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function DataAnalyticsFAQSection() {
  const faqs = [
    {
      question: 'Is this beginner-friendly?',
      answer: 'Yes. We start from fundamentals and build progressively.',
    },
    {
      question: 'Do I need advanced math?',
      answer: 'No. This is not a theoretical data science program.',
    },
    {
      question: 'Is job placement guaranteed?',
      answer: 'No. We provide structured career support. Outcomes depend on effort and market conditions.',
    },
    {
      question: 'How many hours per week?',
      answer: 'Expect 12–15 hours per week.',
    },
    {
      question: 'Can I work full-time while enrolled?',
      answer: 'Yes, if you can commit consistently to the schedule.',
    },
    {
      question: 'What makes this different from cheaper courses?',
      answer: 'Live mentorship, structured roadmap, AI integration, and career strategy layer.',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about the program
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg border px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
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
