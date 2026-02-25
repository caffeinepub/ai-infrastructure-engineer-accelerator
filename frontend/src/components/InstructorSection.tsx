import { Card, CardContent } from '@/components/ui/card';
import { Award, Briefcase, Users } from 'lucide-react';

export default function InstructorSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Learn From Industry Experts</h2>
            <p className="text-xl text-muted-foreground">
              Taught by engineers who've built infrastructure at scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <img
                src="/assets/generated/instructor-photo.dim_400x400.png"
                alt="Instructor"
                className="rounded-lg shadow-premium"
              />
            </div>
            <div className="space-y-6">
              <Card>
                <CardContent className="flex items-start gap-4 pt-6">
                  <Award className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Certified Professionals</h3>
                    <p className="text-sm text-muted-foreground">
                      AWS, Kubernetes, and cloud security certifications
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 pt-6">
                  <Briefcase className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Real-World Experience</h3>
                    <p className="text-sm text-muted-foreground">
                      10+ years building infrastructure for Fortune 500 companies
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 pt-6">
                  <Users className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Proven Track Record</h3>
                    <p className="text-sm text-muted-foreground">
                      Helped 200+ students land infrastructure engineering roles
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
