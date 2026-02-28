import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, Wrench } from 'lucide-react';

interface Week {
  week: string;
  title: string;
  topics: string[];
  aiLab?: string;
  project?: string;
  capstone?: boolean;
}

interface Month {
  month: string;
  subtitle: string;
  tagline: string;
  weeks: Week[];
  highlight?: boolean;
}

const months: Month[] = [
  {
    month: 'Month 1',
    subtitle: 'QA Foundations + Test Engineering Thinking',
    tagline: 'We build thinking first. Tools later.',
    weeks: [
      {
        week: 'Week 1',
        title: 'Modern QA in the AI Era',
        topics: [
          'SDLC & Agile (US company workflow)',
          'Role of QA in DevOps',
          'Why manual-only QA is shrinking',
          'AI impact on testing',
          'Introduction to AI-assisted QA tools',
        ],
      },
      {
        week: 'Week 2',
        title: 'Test Design & Strategy',
        topics: [
          'Test types (functional, regression, exploratory, performance)',
          'Risk-based testing',
          'Boundary value analysis',
          'Equivalence partitioning',
          'Writing high-quality test cases',
          'Requirement analysis practice',
        ],
        aiLab: 'Use AI to generate test cases from user stories — then refine manually. AI assists. Humans validate.',
      },
      {
        week: 'Week 3',
        title: 'Bug Reporting & Root Cause Thinking',
        topics: [
          'Bug lifecycle',
          'Writing professional defect reports',
          'Severity vs priority',
          'Reproduction clarity',
          'Reading logs',
          'Basic debugging mindset',
        ],
        aiLab: 'Use AI to summarize logs and identify probable failure causes.',
      },
      {
        week: 'Week 4',
        title: 'API Testing (Modern Standard)',
        topics: [
          'REST fundamentals',
          'JSON structure',
          'Postman hands-on',
          'Authentication & tokens',
          'API test automation basics',
        ],
        aiLab: 'Generate API test scenarios using AI prompt templates.',
        project: 'Project 1: API Test Collection for SaaS Application',
      },
    ],
  },
  {
    month: 'Month 2',
    subtitle: 'Automation Engineering + AI Integration',
    tagline: 'Now we build real automation engineers.',
    weeks: [
      {
        week: 'Week 5',
        title: 'Programming Fundamentals for QA',
        topics: [
          'Java OR Python (Python recommended for AI synergy)',
          'Variables, functions, loops',
          'OOP basics',
          'Error handling',
        ],
      },
      {
        week: 'Week 6',
        title: 'Selenium / Playwright Automation',
        topics: [
          'Locators & assertions',
          'Page Object Model',
          'Wait strategies',
          'Handling dynamic elements',
        ],
        aiLab: 'Use AI to generate base automation scripts, then refactor for quality.',
      },
      {
        week: 'Week 7',
        title: 'Self-Healing & Resilient Test Design',
        topics: [
          'Flaky test problems',
          'Smart locator strategies',
          'Dynamic selector handling',
          'Retry mechanisms',
          'Self-healing test tools overview',
        ],
      },
      {
        week: 'Week 8',
        title: 'Framework Design + CI/CD',
        topics: [
          'Automation framework structure',
          'TestNG / PyTest',
          'Reporting',
          'Git basics',
          'GitHub Actions',
          'Running tests in CI pipeline',
        ],
        project: 'Project 2: Build automation framework + integrate into CI pipeline',
      },
    ],
    highlight: true,
  },
  {
    month: 'Month 3',
    subtitle: 'AI-Augmented Testing + Job Readiness',
    tagline: 'Now we differentiate from basic QA bootcamps.',
    weeks: [
      {
        week: 'Week 9',
        title: 'AI-Assisted Test Engineering',
        topics: [
          'Prompt engineering for QA',
          'Generating edge case tests',
          'AI test coverage analysis',
          'Automated regression suggestion',
          'Smart test prioritization concepts',
        ],
        aiLab: 'Build an AI-assisted test planning workflow.',
      },
      {
        week: 'Week 10',
        title: 'AI for Test Maintenance & Debugging',
        topics: [
          'Root cause detection using AI',
          'Log summarization',
          'Code review assistance',
          'Refactoring automation scripts with AI',
          'Performance anomaly detection concepts',
        ],
        aiLab: 'AI becomes assistant, not crutch.',
      },
      {
        week: 'Week 11',
        title: 'Observability & Modern QA Ecosystem',
        topics: [
          'Monitoring basics',
          'Logs interpretation',
          'QA in DevOps culture',
          'Release gates',
          'Quality metrics',
          'Basic performance testing overview',
        ],
      },
      {
        week: 'Week 12',
        title: 'Capstone Project + Interview Prep',
        topics: [
          'Manual test plan',
          'API tests',
          'UI automation',
          'CI integration',
          'AI-generated enhancement layer',
          'Documentation',
        ],
        capstone: true,
        project: 'Career Module: US-format resume, QA interview question bank, automation coding mock interviews, behavioral interview training, LinkedIn optimization, 60-day job strategy plan',
      },
    ],
  },
];

export default function QACurriculumSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold mb-4">12-Week Curriculum</h2>
            <p className="text-xl text-muted-foreground">
              Three focused months from QA foundations to AI-augmented engineering
            </p>
          </div>

          <div className="space-y-16">
            {months.map((month) => (
              <div key={month.month}>
                <div className={`rounded-xl p-6 mb-6 ${month.highlight ? 'bg-primary/10 border border-primary/30' : 'bg-muted/40 border border-border'}`}>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <Badge variant={month.highlight ? 'default' : 'outline'} className="text-sm px-3 py-1">
                      {month.month}
                    </Badge>
                    {month.highlight && (
                      <Badge variant="secondary" className="bg-primary/20 text-primary text-sm">
                        Automation Focus
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-1">{month.subtitle}</h3>
                  <p className="text-muted-foreground italic">{month.tagline}</p>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
                  {month.weeks.map((week) => (
                    <Card
                      key={week.week}
                      className={`flex flex-col ${week.capstone ? 'border-primary/40 bg-primary/5' : 'border-primary/20'}`}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-1">
                          <Badge variant="outline" className="text-xs">{week.week}</Badge>
                          {week.capstone && (
                            <Badge variant="default" className="text-xs">Capstone</Badge>
                          )}
                        </div>
                        <CardTitle className="text-base leading-snug">{week.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1 space-y-3">
                        <ul className="space-y-1.5">
                          {week.topics.map((topic) => (
                            <li key={topic} className="flex items-start gap-2">
                              <span className="text-primary mt-1 text-xs">•</span>
                              <span className="text-xs text-muted-foreground">{topic}</span>
                            </li>
                          ))}
                        </ul>

                        {week.aiLab && (
                          <div className="bg-primary/10 border border-primary/20 rounded-md p-3">
                            <div className="flex items-center gap-1.5 mb-1">
                              <Bot className="h-3.5 w-3.5 text-primary" />
                              <span className="text-xs font-semibold text-primary uppercase tracking-wide">AI Lab</span>
                            </div>
                            <p className="text-xs text-muted-foreground">{week.aiLab}</p>
                          </div>
                        )}

                        {week.project && (
                          <div className="bg-accent/10 border border-accent/20 rounded-md p-3">
                            <div className="flex items-center gap-1.5 mb-1">
                              <Wrench className="h-3.5 w-3.5 text-accent-foreground" />
                              <span className="text-xs font-semibold uppercase tracking-wide">
                                {week.capstone ? 'Career Module' : 'Project'}
                              </span>
                            </div>
                            <p className="text-xs font-medium">{week.project}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
