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
      answer: 'Yes. No prior coding required. We start from the very basics of software testing and build progressively through the 12 weeks.',
    },
    {
      question: 'Is automation included?',
      answer: 'Yes, at a foundational level in Month 3. We introduce basic Java or Python for QA, Selenium fundamentals, and automation test scripts — gradually and practically.',
    },
    {
      question: 'Can I get hired after 3 months?',
      answer: 'You will be prepared to apply for entry-level QA roles. Hiring depends on individual effort and market conditions. We provide the skills, portfolio, and career support — the rest is up to you.',
    },
    {
      question: 'Is this fully online?',
      answer: 'Yes. Live cohort-based format with weekly live sessions, recorded access, and community support.',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about the QA program
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
