import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function FutureProofSection() {
  const aiCannotDo = [
    'Design complex multi-region architectures',
    'Debug production incidents under pressure',
    'Make security and compliance decisions',
    'Optimize costs across cloud providers',
    'Lead infrastructure strategy discussions',
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Future-Proof Your Career</h2>
            <p className="text-xl text-muted-foreground">
              AI can't replace infrastructure engineers—it makes them more valuable
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card className="border-primary">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mb-6" />
                <h3 className="font-bold text-2xl mb-4">What AI Cannot Do</h3>
                <ul className="space-y-3">
                  {aiCannotDo.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <p className="text-lg">
                While AI automates routine tasks, infrastructure engineering requires:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🧠</span>
                  <div>
                    <p className="font-bold">Strategic Thinking</p>
                    <p className="text-sm text-muted-foreground">
                      Understanding business needs and translating them into technical solutions
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🔧</span>
                  <div>
                    <p className="font-bold">Problem-Solving</p>
                    <p className="text-sm text-muted-foreground">
                      Diagnosing and fixing issues that AI tools can't understand
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🤝</span>
                  <div>
                    <p className="font-bold">Collaboration</p>
                    <p className="text-sm text-muted-foreground">
                      Working with teams to align infrastructure with company goals
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
