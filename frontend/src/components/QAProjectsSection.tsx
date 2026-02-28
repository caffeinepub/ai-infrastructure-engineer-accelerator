import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Server, GitBranch, FileText, Bot, Presentation } from 'lucide-react';

export default function QAProjectsSection() {
  const deliverables = [
    {
      icon: Github,
      title: 'GitHub Automation Framework',
      description: 'A fully structured automation framework published to GitHub — demonstrating real engineering practices.',
    },
    {
      icon: Server,
      title: 'API Test Collection',
      description: 'Postman collections with real API test scenarios, assertions, and authentication flows.',
    },
    {
      icon: GitBranch,
      title: 'CI Pipeline Integration',
      description: 'Automation tests wired into a GitHub Actions CI pipeline — running on every commit.',
    },
    {
      icon: FileText,
      title: 'Test Strategy Documentation',
      description: 'Professional test strategy and planning documents demonstrating QA engineering thinking.',
    },
    {
      icon: Bot,
      title: 'AI-Assisted Workflow Example',
      description: 'A documented example of using AI for test generation, log analysis, and regression coverage — showing you can use AI responsibly.',
    },
    {
      icon: Presentation,
      title: 'Capstone Presentation',
      description: 'Full automation suite: manual test plan, API tests, UI automation, CI integration, AI-generated enhancement layer, and documentation.',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Portfolio Deliverables</h2>
            <p className="text-xl text-muted-foreground">
              Portfolio-ready material that makes you stand out in US interviews.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {deliverables.map((item) => (
              <Card key={item.title} className="border-primary/20">
                <CardHeader>
                  <item.icon className="h-10 w-10 text-primary mb-3" />
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 text-center">
            <p className="font-medium text-lg">
              Each student graduates with a real GitHub portfolio — not just a certificate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
