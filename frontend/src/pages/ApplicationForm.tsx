import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useApplicationForm } from '../hooks/useApplicationForm';
import { CareerStatus, Program } from '../backend';
import { Loader2 } from 'lucide-react';

export default function ApplicationForm() {
  const navigate = useNavigate();
  const { submitApplication, isSubmitting } = useApplicationForm();

  const [formData, setFormData] = useState({
    program: '' as Program | '',
    name: '',
    email: '',
    careerStatus: '' as CareerStatus | '',
    motivationStatement: '',
    preferredStartDate: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.program) {
      alert('Please select a program');
      return;
    }

    if (!formData.careerStatus) {
      alert('Please select your career status');
      return;
    }

    try {
      await submitApplication(
        formData.program,
        formData.name,
        formData.email,
        formData.careerStatus,
        formData.motivationStatement,
        formData.preferredStartDate
      );
      navigate({ to: '/apply/success' });
    } catch (error) {
      console.error('Application submission failed:', error);
      alert('Failed to submit application. Please try again.');
    }
  };

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Apply to the Program</CardTitle>
            <CardDescription>
              We review applications carefully to ensure the program is a good fit. Tell us about yourself and why you want to join.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="program">Select Program *</Label>
                <Select
                  value={formData.program}
                  onValueChange={(value) =>
                    setFormData({ ...formData, program: value as Program })
                  }
                >
                  <SelectTrigger id="program">
                    <SelectValue placeholder="Choose your program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={Program.aiInfrastructureEngineerAccelerator}>
                      AI Infrastructure Engineer Accelerator
                    </SelectItem>
                    <SelectItem value={Program.aiDataAndAnalyticsEngineerAccelerator}>
                      AI Data & Analytics Engineer Accelerator
                    </SelectItem>
                    <SelectItem value={Program.qaTestingProgram}>
                      QA & Software Testing Career Launch Program
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="careerStatus">Current Career Status *</Label>
                <Select
                  value={formData.careerStatus}
                  onValueChange={(value) =>
                    setFormData({ ...formData, careerStatus: value as CareerStatus })
                  }
                >
                  <SelectTrigger id="careerStatus">
                    <SelectValue placeholder="Select your status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={CareerStatus.student}>Student</SelectItem>
                    <SelectItem value={CareerStatus.youngProfessional}>
                      Young Professional (0-3 years)
                    </SelectItem>
                    <SelectItem value={CareerStatus.transitioning}>
                      Career Switcher
                    </SelectItem>
                    <SelectItem value={CareerStatus.other}>Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="motivation">Why do you want to join this program? *</Label>
                <Textarea
                  id="motivation"
                  required
                  value={formData.motivationStatement}
                  onChange={(e) =>
                    setFormData({ ...formData, motivationStatement: e.target.value })
                  }
                  placeholder="Tell us about your goals and why this program interests you..."
                  rows={6}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="startDate">Preferred Start Date *</Label>
                <Input
                  id="startDate"
                  type="date"
                  required
                  value={formData.preferredStartDate}
                  onChange={(e) =>
                    setFormData({ ...formData, preferredStartDate: e.target.value })
                  }
                />
              </div>

              <div className="bg-muted rounded-lg p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> This is a selective program. We review each application carefully to ensure mutual fit. You'll hear back within 5 business days.
                </p>
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
