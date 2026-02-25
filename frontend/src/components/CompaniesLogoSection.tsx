import { Building2 } from 'lucide-react';

export default function CompaniesLogoSection() {
  const companies = [
    'Amazon Web Services',
    'Microsoft Azure',
    'Google Cloud',
    'Deloitte',
    'Accenture',
    'IBM',
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Companies where our grads have interviewed
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto items-center">
          {companies.map((company) => (
            <div
              key={company}
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
            >
              <Building2 className="h-8 w-8 text-muted-foreground mb-2" />
              <span className="text-xs text-center text-muted-foreground font-medium">
                {company}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8 max-w-2xl mx-auto">
          Logos represent types of companies where alumni have sought opportunities.
        </p>
      </div>
    </section>
  );
}
