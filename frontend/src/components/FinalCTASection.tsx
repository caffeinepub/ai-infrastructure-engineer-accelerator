import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold mb-6 md:text-5xl">
            Ready to Launch Your $100K+ Career?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Limited seats available. Applications are reviewed on a rolling basis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/apply">
              <Button size="lg" className="w-full sm:w-auto">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Schedule a Call
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Don't wait. The AI infrastructure boom is happening now, and companies are hiring fast.
          </p>
        </div>
      </div>
    </section>
  );
}
