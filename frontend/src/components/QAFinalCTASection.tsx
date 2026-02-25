import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

export default function QAFinalCTASection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <h2 className="font-display text-4xl font-bold">
            Your First Step Into Tech Starts Here
          </h2>
          <p className="text-2xl font-medium">
            QA is the accessible entry path — and this program is built for it.
          </p>

          <div className="bg-muted/50 rounded-lg p-8 space-y-6">
            <p className="text-xl">
              Apply for the next QA cohort. Seats are limited to maintain mentorship quality. Break into tech the accessible way — with structure, support, and real skills.
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
