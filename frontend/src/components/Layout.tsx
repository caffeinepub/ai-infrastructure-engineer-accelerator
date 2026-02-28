import { Outlet, Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';

export default function Layout() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' ? window.location.hostname : 'unknown-app';
  const caffeineUrl = `https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`;
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center">
            {/* Horizontal logo for md+ screens */}
            <img
              src="/assets/generated/stack-teacher-logo-horizontal.dim_400x100.png"
              alt="Stack Teacher"
              className="hidden sm:block h-10 w-auto object-contain"
            />
            {/* Icon-only logo for small screens */}
            <img
              src="/assets/generated/stack-teacher-icon.dim_128x128.png"
              alt="Stack Teacher"
              className="block sm:hidden h-9 w-9 object-contain"
            />
          </Link>
          <nav className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">Programs</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/infrastructure" className="cursor-pointer">
                    AI Infrastructure Engineer
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/data-analytics" className="cursor-pointer">
                    AI Data &amp; Analytics Engineer
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/qa-testing" className="cursor-pointer">
                    QA &amp; Software Testing
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost">Sign In</Button>
            <Button>Sign Up</Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t bg-muted/50">
        <div className="container py-12">
          <div className="mb-8 max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-2 text-center">Stay informed</h3>
            <p className="text-sm text-muted-foreground mb-4 text-center">
              Monthly industry brief — AI + Data hiring trends, project spotlights, and scholarship alerts.
            </p>
            {subscribed ? (
              <p className="text-center text-sm text-success font-medium">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-6">
            <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Use</Link>
            <span>•</span>
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/refund-policy" className="hover:text-foreground transition-colors">Refund Policy</Link>
            <span>•</span>
            <Link to="/" className="hover:text-foreground transition-colors">Programs</Link>
            <span>•</span>
            <Link to="/" className="hover:text-foreground transition-colors">Syllabus</Link>
            <span>•</span>
            <Link to="/" className="hover:text-foreground transition-colors">FAQ</Link>
            <span>•</span>
            <Link to="/" className="hover:text-foreground transition-colors">Careers</Link>
            <span>•</span>
            <Link to="/" className="hover:text-foreground transition-colors">Contact</Link>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <p className="text-xs text-muted-foreground max-w-2xl">
              Stack Teacher is an education provider. Course outcomes vary and are not guaranteed.
            </p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Stack Teacher. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              Built with <Heart className="h-4 w-4 fill-red-500 text-red-500" /> using{' '}
              <a
                href={caffeineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
