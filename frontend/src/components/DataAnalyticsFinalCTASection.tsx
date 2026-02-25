import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

export default function DataAnalyticsFinalCTASection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <h2 className="font-display text-4xl font-bold">
            Data + AI is not a trend.
          </h2>
          <p className="text-2xl font-medium">
            It's becoming the baseline expectation.
          </p>

          <div className="bg-muted/50 rounded-lg p-8 space-y-6">
            <p className="text-xl">
              If you're serious about building a modern analytics career — not just learning SQL — this program is designed for you.
            </p>

            <Link to="/apply">
              <Button size="lg" className="text-lg px-8 py-6">
                Apply for the next cohort
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
