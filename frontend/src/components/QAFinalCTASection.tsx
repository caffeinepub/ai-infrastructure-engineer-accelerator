import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

export default function QAFinalCTASection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <h2 className="font-display text-4xl font-bold">
            Don't Train to Compete with AI — Train to Use It.
          </h2>
          <p className="text-2xl font-medium">
            AI-Augmented QA Automation Engineers are what the market needs next.
          </p>

          <div className="bg-muted/50 rounded-lg p-8 space-y-6">
            <p className="text-xl">
              Apply for the next cohort of the AI-Augmented QA Automation Engineer Program. Seats are limited to maintain mentorship quality. Build the skills, frameworks, and AI workflows that make you indispensable.
            </p>

            <Link to="/apply">
              <Button size="lg" className="text-lg px-8 py-6">
                Apply for the Next Cohort
              </Button>
            </Link>

            <p className="text-sm text-muted-foreground">
              Seats are limited to maintain mentorship quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
