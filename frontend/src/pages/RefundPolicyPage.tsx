import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Home</span>
          </Link>
          <div className="h-4 w-px bg-border" />
          <span className="text-sm font-medium">Refund &amp; Cancellation Policy</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Title */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight mb-3">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="text-muted-foreground text-sm">Last updated: January 1, 2025</p>
        </div>

        {/* Opening Disclaimer */}
        <div className="bg-muted/60 border border-border rounded-lg p-6 mb-10">
          <p className="font-semibold text-foreground leading-relaxed text-sm">
            PLEASE READ THIS DOCUMENT CAREFULLY. BY CONTINUING TO USE THIS WEBSITE AND STACK TEACHER
            SERVICES (THE "SERVICES") YOU WILL BE DEEMED TO HAVE CONFIRMED THAT YOU (A) ARE ABOVE
            THE AGE OF 18 (EXCEPT IF YOU RESIDE IN THE STATE OF ALABAMA AND NEBRASKA YOU MUST BE 19
            YEARS OR OLDER, AND YOU MUST BE 21 YEARS OLD OR OLDER IF YOU RESIDE IN MISSISSIPPI), AND
            (B) HAVE ACCEPTED STACK TEACHER PRIVACY POLICY AS AN INTEGRAL PART OF STACK TEACHER
            CANCELLATION POLICY.
          </p>
        </div>

        <div className="space-y-10 text-sm leading-relaxed">

          {/* Standard Cancellation */}
          <section>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A student who made the payment for the Training Program and who provides a written
              notice of cancellation within seven (7) days from the batch start date after signing
              Enrollment Agreement (Agreement) is entitled to the full refund. Stack Teacher shall
              make the full refund no later than thirty (30) days after receiving the notice of
              cancellation. Students who wish to cancel their enrollment in a program at Stack
              Teacher must do so in writing.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In case a student is enrolled in a Bundle Training Program and student wants to
              withdraw from the course which is a part of the Bundle Training Program, the student
              may be entitled to the refund as follows: refund for the second course is calculated
              as the Total cost of the Agreement minus the first course cost set forth in the
              Agreement. The Student agrees to give Stack Teacher a prompt notice of Student's
              withdrawal from the course of the Bundle Training Program but in any case within seven
              (7) days from the batch start date of the second course included in the Bundled
              Program.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If a student who paid Total cost for the Training Program needs to leave after
              completing the learning part of the program, the Student is entitled to a partial
              refund of 8% (eight percent) of the Total cost of the program upon written justified
              request to{" "}
              <a
                href="mailto:support@stackteacher.com"
                className="text-accent hover:underline"
              >
                support@stackteacher.com
              </a>{" "}
              no later than seven (7) business days from the start date of the internship.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If a student who paid Total cost for the Training Program needs to leave after
              completing the learning part of the program and internship, the Student is entitled to
              a partial refund of 2% (two percent) of the Total cost of the program upon written
              justified request to{" "}
              <a
                href="mailto:support@stackteacher.com"
                className="text-accent hover:underline"
              >
                support@stackteacher.com
              </a>{" "}
              no later than seven (7) business days from the start date of the career coaching
              services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If a student who made the payment for the Training Program needs to leave the program
              during the first thirty (30) days due to health issues, medical emergencies, or death
              of an immediate family member such as parents, siblings, and children, a refund of the
              unused portion of total cost paid by the student shall be issued. Students will need
              to support a claim with appropriate documentation. Students are expected to provide
              full documentation at the time of withdrawal to request a refund.
            </p>
          </section>

          {/* Exceptional Refund Requests */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Exceptional Refund Requests</h2>
            <p className="text-muted-foreground leading-relaxed">
              Stack Teacher may, at its sole discretion, review refund requests that fall outside
              the conditions listed above only in exceptional circumstances. Such reviews are
              conducted at Stack Teacher's absolute discretion and require demonstration of
              extraordinary and unforeseeable circumstances beyond the student's control that
              prevented program completion. Stack Teacher is not obligated to approve such requests,
              and all decisions regarding exceptional refund requests are final and binding.
            </p>
          </section>

          {/* General Refund Process */}
          <section>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All refunds shall be processed by Stack Teacher within thirty (30) days of the
              withdrawal request date. Students will need to support their claims with appropriate
              documentation (proof if writing). Students who wish to request a refund must do so in
              writing. The refund request must include the date of withdrawal and must be dated and
              signed by the student. A request is to be completed and signed. Students are expected
              to provide full documentation at the time of withdrawal to request a refund.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Full and partial refunds upon cancellation or withdrawal may be given only in the
              circumstances, and using the published Policy, applicable to Programs. Other than
              stated in our Refund and Cancellation Policy, Stack Teacher does not guarantee refunds
              on any fees or charges related to Stack Teacher Programs including, without limitation,
              for lack of usage, dissatisfaction or/and in case of Student's violation of Stack
              Teacher Education Terms.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This Refund &amp; Cancellation Policy is not applicable to students who signed an
              Income Share Agreement (the "ISA") with us. Students who signed the ISA with us to
              pay for their Training or other services are not eligible for any refund because they
              have not paid any tuition to Stack Teacher. Any financial relationships between such
              students and Stack Teacher, as well as cancelation or termination procedures are
              governed by the ISA that you signed with us.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Students who pay for the Program using the loan option may be entitled to the full or
              partial refund of their own funds only, if any, under the terms and conditions of this
              Refund and Cancellation Policy.
            </p>
          </section>

          {/* Legal Framework */}
          <section>
            <h2 className="text-xl font-semibold mb-6">Legal Framework</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold mb-2">Governing Law</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Any claim relating to this Cancellation Policy shall be governed by the laws of
                  the State of Florida without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold mb-2">Dispute Resolution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Any disputes arising from this Cancellation Policy shall be resolved through
                  binding arbitration in accordance with the Federal Arbitration Act, with
                  proceedings taking place in Florida, consistent with Stack Teacher's standard
                  legal framework.
                </p>
              </div>
            </div>
          </section>

          {/* Address & Contact */}
          <section className="border-t border-border pt-8">
            <p className="text-muted-foreground leading-relaxed mb-2">
              Stack Teacher is located at:
            </p>
            <address className="not-italic text-muted-foreground mb-4">
              30 N Gould St Ste N<br />
              Sheridan, WY 82801, USA
            </address>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions or concerns, please contact us at{" "}
              <a
                href="mailto:support@stackteacher.com"
                className="text-accent hover:underline"
              >
                support@stackteacher.com
              </a>
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
