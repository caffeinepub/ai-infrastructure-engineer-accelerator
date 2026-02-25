import { Card, CardContent } from '@/components/ui/card';
import { Users, Briefcase, TrendingUp, Megaphone, Laptop, RefreshCw, GraduationCap } from 'lucide-react';

export default function DataAnalyticsTargetAudienceSection() {
  const audiences = [
    { icon: GraduationCap, label: 'Business graduates' },
    { icon: Briefcase, label: 'MBA professionals' },
    { icon: TrendingUp, label: 'Finance and accounting professionals' },
    { icon: Megaphone, label: 'Marketing professionals' },
    { icon: Laptop, label: 'IT support professionals' },
    { icon: RefreshCw, label: 'Career switchers into tech' },
    { icon: Users, label: 'International students in US/Canada' },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">
              Who This Program Is For
            </h2>
            <p className="text-xl text-muted-foreground">
              This program is designed for:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {audiences.map(({ icon: Icon, label }) => (
              <Card key={label}>
                <CardContent className="pt-6 text-center">
                  <Icon className="h-10 w-10 text-primary mx-auto mb-3" />
                  <p className="font-medium">{label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-accent/10 border-2 border-accent/30 rounded-lg p-8 text-center space-y-4">
            <p className="text-xl font-bold text-destructive">No advanced math required.</p>
            <p className="text-xl font-bold text-destructive">No prior coding required.</p>
            <p className="text-2xl font-bold text-primary mt-6">Commitment and consistency are required.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
