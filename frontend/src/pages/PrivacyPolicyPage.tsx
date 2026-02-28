import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Home</span>
          </Link>
          <div className="h-4 w-px bg-border" />
          <span className="text-sm font-medium">Privacy Policy</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Title */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight mb-3">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm">Last updated: January 1, 2025</p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-10 text-sm leading-relaxed">

          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
            <p>
              Stack Teacher ("we," "our," or "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
            <p className="mt-2">
              Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
            <p className="mb-2">We collect information you provide directly to us, such as when you:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Fill out an application or enrollment form</li>
              <li>Create an account or profile</li>
              <li>Contact us for support or inquiries</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Participate in surveys, promotions, or events</li>
            </ul>
            <p className="mt-3 mb-2">The types of personal information we may collect include:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name, email address, phone number</li>
              <li>Billing and payment information</li>
              <li>Educational background and career information</li>
              <li>Communications you send us</li>
              <li>Any other information you choose to provide</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-semibold mb-3">3. Automatically Collected Information</h2>
            <p className="mb-2">When you visit our website, we automatically collect certain information about your device and usage, including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>IP address and approximate location</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referring URLs</li>
              <li>Device identifiers</li>
            </ul>
            <p className="mt-3">
              We collect this information using cookies, web beacons, pixels, and similar tracking technologies. See Section 8 for more details on our cookie practices.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold mb-3">4. How We Use Your Information</h2>
            <p className="mb-2">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Process applications and enrollments</li>
              <li>Provide, maintain, and improve our services</li>
              <li>Send administrative communications (receipts, confirmations, updates)</li>
              <li>Send marketing and promotional communications (with your consent where required)</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyze usage trends</li>
              <li>Detect and prevent fraudulent transactions and abuse</li>
              <li>Comply with legal obligations</li>
              <li>Carry out any other purpose described to you at the time of collection</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-semibold mb-3">5. Legal Bases for Processing (EEA/UK Users)</h2>
            <p className="mb-2">If you are located in the European Economic Area (EEA) or United Kingdom, we process your personal data under the following legal bases:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Contract performance:</strong> Processing necessary to fulfill our agreement with you (e.g., delivering courses).</li>
              <li><strong>Legitimate interests:</strong> Processing for our legitimate business interests, such as improving our services and preventing fraud, where these interests are not overridden by your rights.</li>
              <li><strong>Consent:</strong> Where you have given us explicit consent, such as for marketing emails.</li>
              <li><strong>Legal obligation:</strong> Processing required to comply with applicable laws.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-semibold mb-3">6. Sharing of Information</h2>
            <p className="mb-2">We may share your personal information with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Service providers:</strong> Third-party vendors who perform services on our behalf (payment processors, email platforms, analytics providers, cloud hosting).</li>
              <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred.</li>
              <li><strong>Legal requirements:</strong> When required by law, court order, or governmental authority.</li>
              <li><strong>Protection of rights:</strong> When we believe disclosure is necessary to protect the rights, property, or safety of Stack Teacher, our users, or others.</li>
              <li><strong>With your consent:</strong> For any other purpose with your explicit consent.</li>
            </ul>
            <p className="mt-3">We do not sell your personal information to third parties.</p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-semibold mb-3">7. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
            </p>
            <p className="mt-2">
              For enrolled students, we may retain records of your enrollment and course completion indefinitely to support credential verification requests.
            </p>
          </section>

          {/* Section 8 — Cookies */}
          <section>
            <h2 className="text-xl font-semibold mb-3">8. Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to collect and use personal information about you. Below is a summary of the types of cookies we use and their purposes.
            </p>

            {/* Cookie Types Table */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-4 py-2 text-left font-semibold">Cookie Type</th>
                    <th className="border border-border px-4 py-2 text-left font-semibold">Purpose</th>
                    <th className="border border-border px-4 py-2 text-left font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2 font-medium">Strictly Necessary</td>
                    <td className="border border-border px-4 py-2">Enable core site functionality such as login sessions and security.</td>
                    <td className="border border-border px-4 py-2">Session / Persistent</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border px-4 py-2 font-medium">Performance / Analytics</td>
                    <td className="border border-border px-4 py-2">Collect anonymous data on how visitors use our site to help us improve it.</td>
                    <td className="border border-border px-4 py-2">Up to 2 years</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2 font-medium">Functional</td>
                    <td className="border border-border px-4 py-2">Remember your preferences (language, region, theme) to personalize your experience.</td>
                    <td className="border border-border px-4 py-2">Up to 1 year</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border px-4 py-2 font-medium">Targeting / Advertising</td>
                    <td className="border border-border px-4 py-2">Track your browsing to deliver relevant ads and measure campaign effectiveness.</td>
                    <td className="border border-border px-4 py-2">Up to 2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mb-4">
              You can control cookies through your browser settings. Note that disabling certain cookies may affect the functionality of our website.
            </p>

            {/* Third-Party Cookies Table */}
            <h3 className="text-base font-semibold mb-3">Third-Party Cookies</h3>
            <p className="mb-3">The following third-party services may set cookies on our site:</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-4 py-2 text-left font-semibold">Provider</th>
                    <th className="border border-border px-4 py-2 text-left font-semibold">Purpose</th>
                    <th className="border border-border px-4 py-2 text-left font-semibold">Privacy Policy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2 font-medium">Google Analytics</td>
                    <td className="border border-border px-4 py-2">Website analytics and performance measurement</td>
                    <td className="border border-border px-4 py-2">
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        policies.google.com/privacy
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border px-4 py-2 font-medium">Google Ads</td>
                    <td className="border border-border px-4 py-2">Advertising and remarketing</td>
                    <td className="border border-border px-4 py-2">
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        policies.google.com/privacy
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2 font-medium">Meta (Facebook)</td>
                    <td className="border border-border px-4 py-2">Social media integration and advertising</td>
                    <td className="border border-border px-4 py-2">
                      <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        facebook.com/privacy/policy
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border px-4 py-2 font-medium">LinkedIn</td>
                    <td className="border border-border px-4 py-2">Social media integration and advertising</td>
                    <td className="border border-border px-4 py-2">
                      <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        linkedin.com/legal/privacy-policy
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2 font-medium">Stripe</td>
                    <td className="border border-border px-4 py-2">Payment processing</td>
                    <td className="border border-border px-4 py-2">
                      <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        stripe.com/privacy
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border px-4 py-2 font-medium">HubSpot</td>
                    <td className="border border-border px-4 py-2">CRM and marketing automation</td>
                    <td className="border border-border px-4 py-2">
                      <a href="https://legal.hubspot.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                        legal.hubspot.com/privacy-policy
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl font-semibold mb-3">9. Your Privacy Rights</h2>
            <p className="mb-3">
              Depending on your location, you may have certain rights regarding your personal information. The table below summarizes these rights:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-4 py-2 text-left font-semibold">Right</th>
                    <th className="border border-border px-4 py-2 text-left font-semibold">Description</th>
                    <th className="border border-border px-4 py-2 text-left font-semibold">Applicable Regions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2 font-medium">Access</td>
                    <td className="border border-border px-4 py-2">Request a copy of the personal data we hold about you.</td>
                    <td className="border border-border px-4 py-2">EEA, UK, CA, and others</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border px-4 py-2 font-medium">Rectification</td>
                    <td className="border border-border px-4 py-2">Request correction of inaccurate or incomplete data.</td>
                    <td className="border border-border px-4 py-2">EEA, UK, CA, and others</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2 font-medium">Erasure</td>
                    <td className="border border-border px-4 py-2">Request deletion of your personal data ("right to be forgotten").</td>
                    <td className="border border-border px-4 py-2">EEA, UK, CA</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border px-4 py-2 font-medium">Restriction</td>
                    <td className="border border-border px-4 py-2">Request that we restrict processing of your data in certain circumstances.</td>
                    <td className="border border-border px-4 py-2">EEA, UK</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2 font-medium">Portability</td>
                    <td className="border border-border px-4 py-2">Receive your data in a structured, machine-readable format.</td>
                    <td className="border border-border px-4 py-2">EEA, UK</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border px-4 py-2 font-medium">Objection</td>
                    <td className="border border-border px-4 py-2">Object to processing based on legitimate interests or for direct marketing.</td>
                    <td className="border border-border px-4 py-2">EEA, UK</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2 font-medium">Opt-Out of Sale</td>
                    <td className="border border-border px-4 py-2">Opt out of the sale or sharing of personal information (we do not sell data).</td>
                    <td className="border border-border px-4 py-2">CA (CCPA/CPRA)</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border px-4 py-2 font-medium">Non-Discrimination</td>
                    <td className="border border-border px-4 py-2">Not be discriminated against for exercising your privacy rights.</td>
                    <td className="border border-border px-4 py-2">CA (CCPA/CPRA)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:support@stackteacher.com" className="text-accent hover:underline">
                support@stackteacher.com
              </a>
              . We will respond to your request within the timeframe required by applicable law (generally 30 days).
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl font-semibold mb-3">10. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption in transit (TLS/SSL), access controls, and regular security assessments.
            </p>
            <p className="mt-2">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl font-semibold mb-3">11. International Data Transfers</h2>
            <p>
              Stack Teacher is based in the United States. If you are accessing our services from outside the US, please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located and our central database is operated.
            </p>
            <p className="mt-2">
              For transfers from the EEA or UK to the US, we rely on appropriate safeguards such as Standard Contractual Clauses (SCCs) approved by the European Commission, or other lawful transfer mechanisms.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-xl font-semibold mb-3">12. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that a child under 18 has provided us with personal information, we will take steps to delete such information. If you believe we might have any information from or about a child under 18, please contact us.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-xl font-semibold mb-3">13. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites, plugins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. We encourage you to read the privacy policy of every website you visit.
            </p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-xl font-semibold mb-3">14. California Privacy Rights (CCPA/CPRA)</h2>
            <p className="mb-2">
              If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA), including:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-3">
              <li>The right to know what personal information we collect, use, disclose, and sell.</li>
              <li>The right to delete personal information we have collected from you (subject to exceptions).</li>
              <li>The right to correct inaccurate personal information.</li>
              <li>The right to opt out of the sale or sharing of personal information (we do not sell personal information).</li>
              <li>The right to limit use and disclosure of sensitive personal information.</li>
              <li>The right to non-discrimination for exercising your CCPA rights.</li>
            </ul>
            <p>
              To submit a verifiable consumer request, contact us at{" "}
              <a href="mailto:support@stackteacher.com" className="text-accent hover:underline">
                support@stackteacher.com
              </a>
              .
            </p>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="text-xl font-semibold mb-3">15. Nevada Privacy Rights</h2>
            <p>
              Nevada residents may opt out of the sale of certain personally identifiable information. We do not currently sell personal information as defined under Nevada law. If you have questions, contact us at{" "}
              <a href="mailto:support@stackteacher.com" className="text-accent hover:underline">
                support@stackteacher.com
              </a>
              .
            </p>
          </section>

          {/* Section 16 */}
          <section>
            <h2 className="text-xl font-semibold mb-3">16. Virginia, Colorado, Connecticut, and Other US State Privacy Laws</h2>
            <p className="mb-2">
              Residents of Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), and other states with comprehensive privacy laws may have rights similar to those described in Section 9, including rights to access, correct, delete, and opt out of certain processing activities.
            </p>
            <p>
              To exercise these rights, contact us at{" "}
              <a href="mailto:support@stackteacher.com" className="text-accent hover:underline">
                support@stackteacher.com
              </a>
              .
            </p>
          </section>

          {/* Section 17 */}
          <section>
            <h2 className="text-xl font-semibold mb-3">17. GDPR — Rights for EEA and UK Residents</h2>
            <p className="mb-2">
              If you are located in the EEA or UK, in addition to the rights described in Section 9, you have the right to lodge a complaint with your local data protection authority. A list of EEA supervisory authorities is available at{" "}
              <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                edpb.europa.eu
              </a>
              . The UK supervisory authority is the Information Commissioner's Office (ICO) at{" "}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                ico.org.uk
              </a>
              .
            </p>
            <p>
              Our Data Protection contact for EEA/UK inquiries:{" "}
              <a href="mailto:support@stackteacher.com" className="text-accent hover:underline">
                support@stackteacher.com
              </a>
              .
            </p>
          </section>

          {/* Section 18 */}
          <section>
            <h2 className="text-xl font-semibold mb-3">18. Do Not Track</h2>
            <p>
              Some browsers have a "Do Not Track" feature that signals to websites that you do not want to have your online activity tracked. Our website does not currently respond to "Do Not Track" signals. You may, however, disable certain tracking by adjusting your browser's cookie settings as described in Section 8.
            </p>
          </section>

          {/* Section 19 */}
          <section>
            <h2 className="text-xl font-semibold mb-3">19. Email Marketing and Communications</h2>
            <p>
              With your consent (where required), we may send you promotional emails about our programs, events, and updates. You can opt out of receiving marketing emails at any time by clicking the "unsubscribe" link in any email we send or by contacting us directly. Please note that even after opting out of marketing emails, you may still receive transactional or administrative emails related to your enrollment or account.
            </p>
          </section>

          {/* Section 20 */}
          <section>
            <h2 className="text-xl font-semibold mb-3">20. Automated Decision-Making and Profiling</h2>
            <p>
              We do not use fully automated decision-making processes (including profiling) that produce legal or similarly significant effects on you. Our admissions process involves human review of all applications.
            </p>
          </section>

          {/* Section 21 */}
          <section>
            <h2 className="text-xl font-semibold mb-3">21. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top. For significant changes, we may also send you an email notification. We encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          {/* Section 22 */}
          <section>
            <h2 className="text-xl font-semibold mb-3">22. Accessibility</h2>
            <p>
              We are committed to ensuring this Privacy Policy is accessible to all users. If you need this policy in an alternative format, please contact us at{" "}
              <a href="mailto:support@stackteacher.com" className="text-accent hover:underline">
                support@stackteacher.com
              </a>
              .
            </p>
          </section>

          {/* Section 23 */}
          <section>
            <h2 className="text-xl font-semibold mb-3">23. Contact Us</h2>
            <p className="mb-3">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-muted/40 rounded-lg p-5 space-y-1 text-sm">
              <p className="font-semibold text-base">Stack Teacher</p>
              <p>30 N Gould St Ste N</p>
              <p>Sheridan, WY 82801</p>
              <p>United States</p>
              <p className="mt-2">
                Email:{" "}
                <a href="mailto:support@stackteacher.com" className="text-accent hover:underline">
                  support@stackteacher.com
                </a>
              </p>
              <p>Phone: 1234567890</p>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-xs text-muted-foreground space-y-2">
          <p>© {new Date().getFullYear()} Stack Teacher. All rights reserved.</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Use</Link>
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <a href="mailto:support@stackteacher.com" className="hover:text-foreground transition-colors">support@stackteacher.com</a>
          </div>
          <p>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
