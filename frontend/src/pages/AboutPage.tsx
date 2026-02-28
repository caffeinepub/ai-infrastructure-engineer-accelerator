import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Server,
  Cloud,
  Box,
  GitBranch,
  Shield,
  BarChart2,
  Cpu,
  CheckCircle2,
  FileText,
  Linkedin,
  MessageSquare,
  Search,
  DollarSign,
  Users,
  Target,
  Zap,
  Lock,
  TrendingUp,
  BookOpen,
} from 'lucide-react';

const offerings = [
  { icon: Server, label: 'DevOps & Infrastructure Engineering' },
  { icon: Cloud, label: 'Cloud Engineering (AWS-focused)' },
  { icon: Box, label: 'Kubernetes & Containerization' },
  { icon: GitBranch, label: 'CI/CD & Automation' },
  { icon: Shield, label: 'DevSecOps & Secure Infrastructure' },
  { icon: BarChart2, label: 'AI Data & Analytics Engineering' },
  { icon: Cpu, label: 'Emerging AI-aligned technical roles' },
];

const aiEraCapabilities = [
  { icon: Cloud, text: 'Build and manage scalable cloud systems' },
  { icon: Zap, text: 'Automate workflows and deployments' },
  { icon: Cpu, text: 'Support AI-driven infrastructure' },
  { icon: Lock, text: 'Secure digital environments' },
  { icon: TrendingUp, text: 'Optimize cloud performance and cost' },
];

const audiences = [
  'Beginners entering tech',
  'QA engineers upgrading to DevOps',
  'IT support professionals transitioning to cloud',
  'Developers increasing salary leverage',
  'System administrators modernizing skills',
  'Career switchers committed to structured growth',
];

const careerServices = [
  { icon: FileText, title: 'U.S.-Optimized Resumes', description: 'ATS-compliant resumes built for the U.S. job market.' },
  { icon: Linkedin, title: 'LinkedIn Positioning Strategy', description: 'Profile tuned to attract U.S.-based recruiters and hiring managers.' },
  { icon: MessageSquare, title: 'Mock Interviews', description: 'Technical and behavioral mock interviews to prepare you for real conversations.' },
  { icon: Search, title: 'Job Search Systems', description: 'Structured job search systems tailored for U.S. roles and hiring cycles.' },
  { icon: DollarSign, title: 'Salary Negotiation Guidance', description: 'Strategies to maximize your compensation in U.S. tech roles.' },
];

const approachPoints = [
  'We do not promise shortcuts.',
  'We do not guarantee jobs.',
  'We do not rely on hype.',
];

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero / About Stack Teacher */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(/assets/generated/hero-background.dim_1920x1080.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container relative py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary mb-6">
              U.S.-Focused · AI-Era · Career Acceleration
            </div>
            <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              About <span className="text-primary">Stack Teacher</span>
            </h1>
            <p className="mt-8 text-xl text-muted-foreground md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Stack Teacher is a U.S.-focused career acceleration platform helping professionals build
              high-income, AI-resilient technology careers.
            </p>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              In an era where automation and artificial intelligence are reshaping industries, we prepare
              candidates to stay relevant, competitive, and employable in modern tech ecosystems.
            </p>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We specialize in practical, market-aligned training designed for real-world execution —
              not just theoretical knowledge.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link to="/apply">
                <Button size="lg" className="w-full sm:w-auto">
                  Apply Now
                </Button>
              </Link>
              <Link to="/">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-muted/20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-bold mb-4">What We Offer</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Structured career programs across high-demand technology domains, built around real U.S.
                job market requirements and evolving AI-driven industry trends.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {offerings.map(({ icon: Icon, label }) => (
                <Card key={label} className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="pt-6 flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="font-semibold leading-snug pt-1">{label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Designed for the AI Era */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-4xl font-bold mb-6">
                  Designed for the <span className="text-primary">AI Era</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  The tech landscape is changing rapidly. Companies today need professionals who can
                  grow alongside AI — not get replaced by it.
                </p>
                <div className="space-y-4">
                  {aiEraCapabilities.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-base font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-primary/20">
                  <img
                    src="/assets/generated/ai-cloud-integration.dim_800x600.png"
                    alt="AI Cloud Integration"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-primary/10 border border-primary/20 rounded-xl px-5 py-3">
                  <p className="text-sm font-semibold text-primary">AI-Resilient Careers</p>
                  <p className="text-xs text-muted-foreground">Built for the modern tech economy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-muted/20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-bold mb-4">Who We Serve</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We cater to professionals at different stages. Whether you are starting fresh or
                advancing your career, our programs align your skillset with current U.S. employer
                expectations.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {audiences.map((audience) => (
                <div
                  key={audience}
                  className="flex items-center gap-3 bg-background border border-border rounded-xl px-5 py-4 hover:border-primary/40 transition-colors"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-sm">{audience}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career-Focused Support */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-bold mb-4">Career-Focused Support</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Beyond technical training, Stack Teacher provides comprehensive career support to help
                you land stable, high-growth, AI-aligned technology roles.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careerServices.map((service) => (
                <Card key={service.title} className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="pt-6 text-center">
                    <service.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                    <p className="font-semibold mb-2">{service.title}</p>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-xl font-bold text-primary">
                Our objective is simple:
              </p>
              <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
                Help serious professionals transition into stable, high-growth, and AI-aligned
                technology careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-muted/20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-bold mb-4">Our Approach</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {approachPoints.map((point) => (
                <div
                  key={point}
                  className="bg-destructive/5 border border-destructive/20 rounded-xl px-6 py-5 text-center"
                >
                  <p className="font-semibold text-destructive">{point}</p>
                </div>
              ))}
            </div>
            <div className="bg-background border border-primary/20 rounded-2xl px-8 py-10 text-center">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="text-xl font-semibold mb-4 leading-relaxed">
                We believe in structured learning, disciplined execution, and long-term earning potential.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Stack Teacher exists to prepare professionals for the realities of the modern tech
                economy — where adaptability, automation, and systems thinking define success.
              </p>
            </div>
            <div className="mt-10 text-center">
              <Link to="/apply">
                <Button size="lg">
                  Start Your Career Journey
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
