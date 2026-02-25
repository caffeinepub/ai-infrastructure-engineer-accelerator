import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQSection() {
  const faqs = [
    {
      question: 'Do I need coding experience to join?',
      answer:
        'No! We start from the fundamentals. If you can follow instructions and think logically, you can succeed in this program. We teach you everything you need to know.',
    },
    {
      question: 'What are the prerequisites?',
      answer:
        'Basic computer literacy and a willingness to learn. You should be comfortable using a computer, browsing the web, and installing software. Everything else we teach you.',
    },
    {
      question: 'How much time do I need to commit?',
      answer:
        '10-15 hours per week. The program is designed for working professionals. You can complete coursework on evenings and weekends.',
    },
    {
      question: 'What kind of jobs can I get after completing?',
      answer:
        'Cloud Engineer, DevOps Engineer, Infrastructure Engineer, Site Reliability Engineer (SRE), Platform Engineer, and AI Infrastructure Specialist roles.',
    },
    {
      question: 'Are payment plans available?',
      answer:
        'Yes! We offer flexible payment plans to make the program accessible. Contact our admissions team to discuss options that work for your budget.',
    },
    {
      question: 'How is this different from a bootcamp?',
      answer:
        'Bootcamps rush through material in 12 weeks. We take 8 months to build deep expertise. You get cohort-based learning, mentor support, and career services—not just video lectures.',
    },
    {
      question: 'What if I fall behind?',
      answer:
        'All sessions are recorded, and you have lifetime access. Our mentors provide 1-on-1 support to help you catch up. We want you to succeed, not just complete.',
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
