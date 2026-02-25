import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@tanstack/react-router';
import { CheckCircle2, Mail, Calendar, FileCheck } from 'lucide-react';

export default function ApplicationSuccess() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-2xl">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
              <CheckCircle2 className="h-10 w-10 text-success" />
            </div>
            <CardTitle className="text-3xl">Application Submitted!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-center text-muted-foreground">
              Thank you for applying to the AI Infrastructure Engineer Accelerator. We're excited to review your application!
            </p>

            <div className="space-y-4">
              <h3 className="font-bold text-lg">What Happens Next?</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">1. Application Review</p>
                    <p className="text-sm text-muted-foreground">
                      Our admissions team will carefully review your application within 5 business days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">2. Interview Invitation</p>
                    <p className="text-sm text-muted-foreground">
                      If selected, we'll invite you to a 30-minute video interview to discuss your goals and answer questions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                    <FileCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">3. Admission Decision</p>
                    <p className="text-sm text-muted-foreground">
                      You'll receive your admission decision and next steps via email.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-4">
              <p className="text-sm text-muted-foreground">
                <strong>Check your email:</strong> We've sent a confirmation to the email address you provided. If you don't see it, check your spam folder.
              </p>
            </div>

            <Link to="/">
              <Button className="w-full">Return to Home</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
