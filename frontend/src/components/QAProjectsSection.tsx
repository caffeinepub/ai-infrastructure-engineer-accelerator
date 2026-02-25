import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FolderOpen, Bug, Server, Code, FileText } from 'lucide-react';

export default function QAProjectsSection() {
  const deliverables = [
    {
      icon: FolderOpen,
      title: 'Complete Test Case Repository',
      description: 'A structured library of test cases covering functional, regression, and UAT scenarios.',
    },
    {
      icon: Bug,
      title: 'Defect Tracking Sample Portfolio',
      description: 'Documented bug reports and defect lifecycle examples using Jira.',
    },
    {
      icon: Server,
      title: 'API Test Collection',
      description: 'Postman collections with real API test scenarios and assertions.',
    },
    {
      icon: Code,
      title: 'Basic Automation Scripts',
      description: 'Selenium-based automation scripts demonstrating foundational test automation.',
    },
    {
      icon: FileText,
      title: 'Capstone Documentation',
      description: 'End-to-end project documentation combining manual, API, and automation testing.',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">Hands-On Project Experience</h2>
            <p className="text-xl text-muted-foreground">
              By the end of the program, you will have:
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
              Portfolio-ready material for interviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
