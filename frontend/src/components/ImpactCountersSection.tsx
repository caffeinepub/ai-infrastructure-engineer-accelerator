export default function ImpactCountersSection() {
  const metrics = [
    { label: 'Students enrolled', value: '500+' },
    { label: 'Projects built', value: '2,000+' },
    { label: '1:1 hours delivered', value: '5,000+' },
    { label: 'Interview-ready grads', value: '300+' },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our impact
          </h2>
          <p className="text-muted-foreground mt-2">(real numbers build trust)</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="font-display text-5xl font-bold text-primary mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto">
          Numbers are verified — we publish alumni success stories on request.
        </p>
      </div>
    </section>
  );
}
