import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function QAFAQSection() {
  const faqs = [
    {
      question: 'Is this beginner-friendly?',
      answer:
        'Yes — we start from QA fundamentals. No prior coding required. Month 1 builds thinking before tools.',
    },
    {
      question: 'Is automation included?',
      answer:
        'Yes — automation is a core focus from Month 2. You will build real frameworks, not just run scripts.',
    },
    {
      question: 'What role does AI play in this program?',
      answer:
        'AI is integrated throughout as a productivity multiplier. You will learn prompt engineering for QA, AI-assisted test generation, log summarization, and automated regression tools — while developing the human judgment AI cannot replace.',
    },
    {
      question: 'Can I get hired after 12 weeks?',
      answer:
        'You will be prepared to apply for QA Automation Engineer roles. Hiring depends on individual effort and market conditions.',
    },
    {
      question: 'How is this different from a Selenium bootcamp?',
      answer:
        'We teach test strategy, framework architecture, CI/CD integration, AI-augmented workflows, and career readiness — not just scripting tools.',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about the AI-Augmented QA program
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-lg border px-6"
              >
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
