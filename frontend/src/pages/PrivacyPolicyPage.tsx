export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container max-w-4xl py-16 px-4">
        <h1 className="font-display text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-10">This Privacy Policy was updated on September 22, 2025.</p>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-10 text-foreground">

          <section>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We take your privacy very seriously. Please read this privacy policy carefully as it contains important
              information on who we are, how and why we collect, store, use, and share your personal information. It
              also explains your rights in relation to your personal information and how to contact us or supervisory
              authorities in the event you have a complaint.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We collect, use and are responsible for certain personal information about you. When we do so we are
              subject to various laws in the United States and the General Data Protection Regulation which applies
              across the European Union (including in the United Kingdom), and we are responsible as "controller" of
              that personal information for the purposes of those laws.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">1. Key Terms</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-border text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-4 py-3 text-left font-semibold">Term</th>
                    <th className="border border-border px-4 py-3 text-left font-semibold">Definition</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">We, us, our</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">
                      Stack Teacher Inc.<br />
                      30 N Gould St Ste N<br />
                      Sheridan, WY 82801, USA
                    </td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Our contact details</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">
                      <a href="mailto:support@stackteacher.com" className="text-primary hover:underline">
                        support@stackteacher.com
                      </a>
                    </td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Cookies</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">
                      Cookies are text files containing small amounts of information which are downloaded to your
                      computer or mobile device when you visit a certain webpage.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">2. Personal Information We Collect About You</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect and use the following personal information that identifies, relates to, describes, is
              reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with
              a particular consumer or household. The categories of personal information we collect depend on whether
              you are a customer, user, applicant or visitor, and the requirements of applicable law. We collect most
              of this personal information directly from you—in person, by telephone, text or email and via our
              website. However, we may also collect information from publicly accessible sources (e.g., LinkedIn
              profiles); directly from a third party (with your consent if it is applicable); from cookies on our
              website.
            </p>

            <h3 className="font-display text-xl font-semibold mb-3">Information You Provide to Us</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-border text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-4 py-3 text-left font-semibold">Categories of Personal Information</th>
                    <th className="border border-border px-4 py-3 text-left font-semibold">Specific Types of Personal Information Collected</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Minimum Identification / log-in details and registration on the website</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">
                      Login name; E-mail address; Mobile phone number
                    </td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Rendering Services and Course Application / Payment and Financial Information</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">
                      ID/passport number/photocopy; Social Security number; Relevant card tokens, first 4 and last 4 digits of credit card; Proof of Employment Authorization; signature; address, telephone number; education history and career goals; employment history.
                    </td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Your Communications with Us</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">
                      Email address, phone number, or mailing address when you request information about our Services, register for our newsletter or referral program, request customer or technical support, or otherwise communicate with us.
                    </td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Social Media Content</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">
                      Any content you provide on forums, blogs, or social media pages. Such content is considered "public" and is not subject to privacy protections.
                    </td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Referral Program</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">
                      Full name and surname; Address (state, city, zip code); Social security number; Email address and contact phone number.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-display text-xl font-semibold mb-3">Information Collected Automatically or From Others</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-border text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-4 py-3 text-left font-semibold">Category</th>
                    <th className="border border-border px-4 py-3 text-left font-semibold">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Automatic Data Collection</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">
                      We may collect certain information automatically when you use the Services including your Internet protocol (IP) address, user settings, MAC address, cookie identifiers, mobile carrier, mobile advertising and other unique identifiers, details about your browser, operating system or device, location information, Internet or mobile service provider, pages that you visit before, during and after using the Services, information about the links you click, and other information about how you use the Services.
                    </td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Information from Other Sources</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">
                      We may obtain information about you from other sources, including through third-party services and organizations to supplement information provided by you. For example, if you access our Services through a third-party application, such as an app store, a third-party login service, or a social networking site, we may collect information about you from that third-party application that you have made public via your privacy settings.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-2 font-medium">We do not:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
              <li>collect any sensitive data, such as information about ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, genetic data, biometric data, data concerning health or sex life or sexual orientation, etc.;</li>
              <li>perform regular and systematic monitoring of your data on a large scale.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">3. How and Why We Use Your Personal Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Under data protection law, we can only use your personal information if we have a proper reason for doing
              so. A legitimate interest is when we have a business or commercial reason to use your information, so
              long as this is not overridden by your own rights and interests.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border border-border text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-4 py-3 text-left font-semibold">What we use your personal information for</th>
                    <th className="border border-border px-4 py-3 text-left font-semibold">Our reasons</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">To provide Services to you</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">For the performance of our contract with you or to take steps at your request before entering into a contract.</td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Provide you with additional content and Services</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Providing you with customized materials about offers, products, and Services that may be of interest, including new content or Services.</td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">To prevent and detect fraud against you or Stack Teacher</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">For our legitimate interests or those of a third party, i.e. to minimize fraud that could be damaging for us and for you.</td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Ensuring compliance with applicable regulations</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">For our legitimate interest and to be in compliance with applicable laws and regulations.</td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Ensuring business policies are adhered to</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">For our legitimate interests or those of a third party, i.e. to make sure we are following our own internal procedures so we can deliver the best Service to you.</td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Operational reasons, such as improving efficiency, training and quality control</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">For our legitimate interests or those of a third party, i.e. to be as efficient as we can so we can deliver the best Service for you.</td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Ensuring the confidentiality of commercially sensitive information</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">For our legitimate interests or those of a third party, i.e. to protect trade secrets and other commercially valuable information.</td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Statistical analysis to help us manage our business</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">For our legitimate interests or those of a third party, i.e. to be as efficient as we can so we can deliver the best Service for you.</td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Marketing our services</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">For our legitimate interests or those of a third party, i.e. to promote our business to existing and former customers.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">4. Promotional Communications</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may use your personal information to send you updates (by email, text message, telephone or post)
              about our services, including exclusive offers, promotions or new services.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We have a legitimate interest in processing your personal information for promotional purposes. This
              means we do not usually need your consent to send you promotional communications. However, where consent
              is needed, we will ask for this consent separately and clearly.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We will always treat your personal information with the utmost respect and according to the CAN-SPAM Act
              which is a law that sets the rules for commercial email, establishes requirements for commercial
              messages, gives recipients the right to have emails stopped from being sent to them, and spells out
              tough penalties for violations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">To be in accordance with CAN-SPAM Act, we agree to the following:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 pl-4">
              <li>not to use false or misleading subjects or email addresses;</li>
              <li>identify the message as an advertisement in some reasonable way;</li>
              <li>include the physical address of our business or site headquarters;</li>
              <li>monitor third-party email marketing services for compliance, if one is used;</li>
              <li>honor opt-out/unsubscribe requests quickly;</li>
              <li>allow users to unsubscribe by using the link at the bottom of each email.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              If at any time you would like to unsubscribe from receiving future emails, you can email us at{' '}
              <a href="mailto:compliance@stackteacher.com" className="text-primary hover:underline">
                compliance@stackteacher.com
              </a>{' '}
              and we will promptly remove you from all correspondence.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">5. Who We Share Your Personal Information With</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Except as provided below, we do not share/disclose/sell your personal information. We only allow our
              service providers to handle your personal information if we are satisfied they take appropriate measures
              to protect your personal information. We also impose contractual obligations on service providers
              relating to ensure they can only use your personal information to provide services to us and to you. We
              may also share personal information with external auditors.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may disclose and exchange information with law enforcement agencies and regulatory bodies to comply
              with our legal and regulatory obligations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may also need to share some personal information with other parties, such as potential buyers of some
              or all of our business or during a restructuring. We will typically anonymize information, but this may
              not always be possible. The recipient of the information will be bound by confidentiality obligations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>International Data Transfers.</strong> You agree that all information processed by us may be
              transferred, processed, and stored anywhere in the world, including but not limited to, the United
              States or other countries, which may have data protection laws that are different from the laws where
              you live. We have taken appropriate safeguards to require that your personal information will remain
              protected and require our third-party service providers and partners to have appropriate safeguards as
              well. Further details can be provided upon request.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">6. Personal Information We Disclosed for a Business Purpose</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We have not sold to a third party any personal information that identifies, relates to, describes, is
              capable of being associated with, or could reasonably be linked, directly or indirectly, with a
              particular consumer or household.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              In the preceding 12 months, we have disclosed for a business purpose to one or more third parties the
              following categories of personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
              <li>Identifiers: Name and Other Identifiers such as real name, alias, postal address, unique personal identifier, online identifier, internet protocol address, email address, account name, social security number, driver's license number, passport number, or other similar identifiers.</li>
              <li>Purchase History: Records of products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies.</li>
              <li>Internet or other electronic network activity information (e.g., browsing history, search history, and information regarding a consumer's interaction with an Internet Web site, application, or advertisement).</li>
              <li>Geolocation data.</li>
              <li>Audio, electronic, visual or similar information.</li>
              <li>Professional or employment-related information.</li>
              <li>Education information.</li>
              <li>Inferences drawn from any of the information identified above to create a profile about a consumer reflecting the consumer's preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">7. Where Your Personal Information is Held</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Information may be held at our offices and those of our third party agencies, service providers,
              representatives and agents as described above (see above: "Who We Share Your Personal Information
              with").
            </p>
            <p className="text-muted-foreground leading-relaxed">
              These third parties may be based outside the European Economic Area. If GDPR is applicable to you and
              transfer occurs, we will ensure the transfer complies with data protection law and all personal
              information will be secure.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">8. How Long Your Personal Information Will Be Kept</h2>
            <p className="text-muted-foreground leading-relaxed">
              We will keep your personal information while you have an account with us or while we are providing
              services to you. Thereafter, we will keep your personal information for as long as is necessary. We
              will not retain your personal information for longer than necessary for the purposes set out in this
              policy. When it is no longer necessary to retain your personal information, we will delete or anonymize
              it.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">9. Your Rights Under the GDPR</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">If GDPR is applicable to you, you have the following rights:</p>
            <div className="overflow-x-auto">
              <table className="w-full border border-border text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-4 py-3 text-left font-semibold">Right</th>
                    <th className="border border-border px-4 py-3 text-left font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Right to Access</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">The right to be provided with a copy of your personal information (the right of access).</td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Right to Rectification</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">The right to require us to correct any mistakes in your personal information.</td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Right to be Forgotten</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">The right to require us to delete your personal information—in certain situations.</td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Right to Restriction of Processing</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">The right to require us to restrict processing of your personal information—in certain circumstances, e.g. if you contest the accuracy of the data.</td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Right to Data Portability</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">The right to receive the personal information you provided to us, in a structured, commonly used and machine-readable format and/or transmit that data to a third party—in certain situations.</td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Right to Object</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">
                      The right to object at any time to your personal information being processed for direct marketing (including profiling); and in certain other situations to our continued processing.
                    </td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Right Not to be Subject to Automated Individual Decision-Making</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">The right not to be subject to a decision based solely on automated processing (including profiling) that produces legal effects concerning you or similarly significantly affects you.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">10. Your Rights Under the CCPA and California Privacy Rights Act</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the right under the California Consumer Privacy Act of 2018 (CCPA) and certain other privacy
              and data protection laws (California Online Privacy Protection Act - CalOPPA), California Privacy Rights
              Act, as applicable, to exercise free of charge:
            </p>

            <h3 className="font-display text-xl font-semibold mb-2">Disclosure of Personal Information We Collect About You</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">You have the right to know:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 pl-4">
              <li>The categories of personal information we have collected about you;</li>
              <li>The categories of sources from which the personal information is collected;</li>
              <li>Our business or commercial purpose for collecting personal information;</li>
              <li>The categories of third parties with whom we share personal information, if any; and</li>
              <li>The specific pieces of personal information we have collected about you.</li>
            </ul>

            <h3 className="font-display text-xl font-semibold mb-2">Right to Opt-Out of the Sale or Sharing of Personal Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the right to opt-out of the sale or sharing of your personal information.
            </p>

            <h3 className="font-display text-xl font-semibold mb-2">Right to Limit Use and Disclosure of Sensitive Personal Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the right to opt-out of the use and disclosure of your sensitive personal information for
              anything other than supplying requested goods or services.
            </p>

            <h3 className="font-display text-xl font-semibold mb-2">Right to Deletion and Right to Correct</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Subject to certain exceptions, on receipt of a verifiable request from you, we will delete your
              personal information from our records and direct any service providers to delete your personal
              information from their records.
            </p>

            <h3 className="font-display text-xl font-semibold mb-2">Protection Against Discrimination</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              You have the right to not be discriminated against by us because you exercised any of your rights under
              the CCPA. This means we cannot, among other things:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
              <li>Deny goods or services to you;</li>
              <li>Charge different prices or rates for goods or services;</li>
              <li>Provide a different level or quality of goods or services to you; or</li>
              <li>Suggest that you will receive a different price or rate for goods or services or a different level or quality of goods or services.</li>
            </ul>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">11. Your Rights under Virginia Data Protection Act (CDPA)</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">If Virginia CDPA is applicable to you, you have the following rights:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
              <li><strong>Right to know/access.</strong> You have a right to confirm whether Stack Teacher is processing your personal data and to access such data.</li>
              <li><strong>Right of correction.</strong> You have a right to correct inaccuracies in your personal data.</li>
              <li><strong>Right of deletion.</strong> You have a right to delete personal data provided by or obtained about you.</li>
              <li><strong>Right of portability.</strong> You have a right to obtain a copy of your personal data in a portable and readily usable format.</li>
              <li><strong>Right to opt-out.</strong> You have a right to opt out of the processing of personal data.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Stack Teacher will respond to your request within 45 days of receipt. We can request an extension of
              the 45-day period for an additional 45 days when reasonably necessary.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">12. Your Rights under Colorado Privacy Act (CPA)</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">If Colorado Privacy Act is applicable to you, you have the following rights:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
              <li><strong>Right to know/access.</strong> You have the right to confirm whether Stack Teacher is processing your personal data and to access that data.</li>
              <li><strong>Right of correction.</strong> You have the right to correct inaccuracies in your data.</li>
              <li><strong>Right of deletion.</strong> You have the right to delete personal data provided by or obtained about you.</li>
              <li><strong>Right of portability.</strong> You have the right to obtain your personal data in a portable and readily usable format.</li>
              <li><strong>Right to opt out.</strong> You have the right to opt out of the processing of your personal data for purposes of targeted advertising, the sale of personal data, or profiling in furtherance of solely automated decisions.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Stack Teacher will respond to your request within 45 days of receipt. We can request an extension of
              the 45-day period for an additional 45 days when reasonably necessary.
            </p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">13. Your Rights under Connecticut Data Privacy Act (CTDPA)</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">If Connecticut Data Privacy Act is applicable to you, you have the following rights:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
              <li><strong>Right to access.</strong> You have the right to confirm whether Stack Teacher is processing your personal data and to access that data.</li>
              <li><strong>Right of correction.</strong> You have the right to correct inaccuracies in your personal data.</li>
              <li><strong>Right of deletion.</strong> You have the right to delete your personal data.</li>
              <li><strong>Right of portability.</strong> You have the right, up to two times per calendar year, to obtain your personal data in a portable and readily usable format.</li>
              <li><strong>Right to opt-out.</strong> You have the right to opt out of the processing of your personal data for purposes of targeted advertising, the sale of personal data, and profiling in furtherance of decisions that produce legal or similarly significant effects.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Stack Teacher will respond to your request within 45 days of receipt. We can request an extension of
              the 45-day period for an additional 45 days when reasonably necessary.
            </p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">14. Your Rights under Utah Consumer Privacy Act (UCPA)</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">If Utah Consumer Privacy Act is applicable to you, you have the following rights:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
              <li><strong>Right to know/access.</strong> You have the right to confirm whether Stack Teacher is processing your personal data and to access that data.</li>
              <li><strong>Right of deletion.</strong> You have the right to delete your personal data that you have provided directly to Stack Teacher.</li>
              <li><strong>Right of portability.</strong> You have the right to obtain your personal data in a portable and readily usable format.</li>
              <li><strong>Right to opt-out.</strong> You have the right to opt-out of the processing of your personal data for purposes of targeted advertising or the sale of personal data.</li>
            </ul>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">15. Your Rights under Oregon Consumer Privacy Act (OCPA)</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">If Oregon Consumer Privacy Act is applicable to you, you have the following rights:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
              <li><strong>Right to know/access.</strong> You have the right to confirm whether Stack Teacher is processing your personal data and to access that data.</li>
              <li><strong>Right of correction.</strong> You have the right to correct inaccuracies in your personal data.</li>
              <li><strong>Right of deletion.</strong> You have the right to delete your personal data that you have provided directly to Stack Teacher.</li>
              <li><strong>Right to opt out.</strong> You have the right to opt out of the processing of your personal data for purposes of targeted advertising, the sale of personal data, and profiling in furtherance of decisions that produce legal or similarly significant effects.</li>
              <li><strong>Right of portability.</strong> You have the right to obtain your personal data in a portable and readily usable format.</li>
              <li><strong>Right of nondiscrimination.</strong> Stack Teacher does not discriminate against you for exercising a right under the OCPA.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Stack Teacher will respond to your request without undue delay and not later than 45 days after receipt
              of the request. We may extend the 45-day period by 45 additional days where reasonably necessary.
            </p>
          </section>

          {/* Section 16 */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">16. Texas Data Privacy and Security Act (TDPSA)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Please be advised that the Texas Data Privacy and Security Act (TDPSA), Tex. Bus. &amp; Com. Code §
              541.001 et seq., does not apply to small businesses as defined by the U.S. Small Business
              Administration.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Stack Teacher is qualified as a small business under the U.S. Small Business Administration criteria.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Stack Teacher does not sell your sensitive data without receiving your consent.
            </p>
          </section>

          {/* Section 17 */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">17. How to Exercise Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you would like to exercise any of your rights as described in this Privacy Policy, please:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 pl-4">
              <li>
                Email us at{' '}
                <a href="mailto:support@stackteacher.com" className="text-primary hover:underline">
                  support@stackteacher.com
                </a>
              </li>
              <li>Call us at 1234567890</li>
              <li>Mail your request to: 30 N Gould St Ste N, Sheridan, WY 82801, USA</li>
              <li>
                Or use the following link to our webpage:{' '}
                <a href="https://stackteacher.com/request-form" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  stackteacher.com/request-form
                </a>{' '}
                (for California residents)
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you contact us directly by email or mail, you will need to provide us with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 pl-4">
              <li>Enough information to identify you (e.g., your full name, address and customer or matter reference number);</li>
              <li>Proof of your identity and address (e.g., a copy of your driving license or passport and a recent utility or credit card bill); and</li>
              <li>A description of what right you want to exercise and the information to which your request relates.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We will respond within 45 days of receiving a personal information request.
            </p>
          </section>

          {/* Section 18 */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">18. How to File a GDPR Complaint</h2>
            <p className="text-muted-foreground leading-relaxed">
              We hope that we can resolve any query or concern you raise about our use of your information. The
              General Data Protection Regulation, as applicable, gives you right to lodge a complaint with a
              supervisory authority, in the European Union (or European Economic Area) state where you work, normally
              live, or where any alleged infringement of data protection laws occurred.
            </p>
          </section>

          {/* Section 19 */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">19. Cookies Policy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Stack Teacher uses cookies to help provide, protect and improve Stack Teacher services. This Policy
              describes the cookies we use and explains why we use cookies and how we deal with the collected
              information.
            </p>

            <h3 className="font-display text-xl font-semibold mb-2">What are cookies?</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cookies are text files containing small amounts of information which are downloaded to your computer or
              mobile device when you visit a certain webpage. Cookies are then sent back to the originating webpage
              on each subsequent visit, or to another webpage that recognizes that cookie. Cookies are used in order
              to make Stack Teacher website work, or to work more efficiently.
            </p>

            <h3 className="font-display text-xl font-semibold mb-2">How does Stack Teacher use cookies?</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use different types of cookies to run the Site:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-border text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-4 py-3 text-left font-semibold">Cookie Type</th>
                    <th className="border border-border px-4 py-3 text-left font-semibold">Purpose</th>
                    <th className="border border-border px-4 py-3 text-left font-semibold">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Essential Cookies</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Necessary for the operation of the Site. Used to authenticate users, prevent fraudulent use of user accounts, or offer Site features.</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Session / Persistent</td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Analytical / Performance Cookies</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Allow us to recognize and count the number of visitors and see how visitors move around the Site when using it. Helps us improve the way the Site works.</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Up to 2 years</td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Functionality Cookies</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Used to recognise you when you return to the Site. Enables us to personalize our content for you, greet you by name, and remember your preferences.</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Up to 1 year</td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Targeting Cookies</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Record your visit to the Site, the pages you have visited, and the links you have followed. Used to make the Site and content more relevant to your interests.</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Up to 2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-display text-xl font-semibold mb-3">Stack Teacher Cookie Details</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-border text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-4 py-3 text-left font-semibold">Title</th>
                    <th className="border border-border px-4 py-3 text-left font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Enable user's registration and login process</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Cross-page and cross-subdomain transfer of user authorization; Ensuring secure authorization; Ensuring user-friendly authorization.</td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Source of the website link</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Website or other resource (e.g., mobile application) from which the user accessed stackteacher.com; UTM tags about the advertising company (the source of Internet traffic).</td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">UTM Parameters</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">
                      Collecting standard analytical data about the advertising company from which the user came to the website.
                      <ul className="list-disc list-inside mt-2 space-y-1 pl-2">
                        <li><strong>utm_source</strong> — Identifies which site sent the traffic.</li>
                        <li><strong>utm_medium</strong> — Identifies what type of link was used.</li>
                        <li><strong>utm_campaign</strong> — Identifies a specific product promotion or strategic campaign.</li>
                        <li><strong>utm_term</strong> — Identifies search terms.</li>
                        <li><strong>utm_content</strong> — Identifies what specifically was clicked to bring the user to the site.</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Learning Space Settings Cookies</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Various user account settings that do not include sensitive data.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-display text-xl font-semibold mb-3">Third-Party Cookies</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics
              of the Site and refine marketing efforts.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-border text-sm">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-4 py-3 text-left font-semibold">Service &amp; Domain</th>
                    <th className="border border-border px-4 py-3 text-left font-semibold">Stack Teacher Purpose</th>
                    <th className="border border-border px-4 py-3 text-left font-semibold">Privacy Policy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Google Analytics<br /><span className="text-muted-foreground font-normal">analytics.google.com</span></td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Website visitor analytics; Setting up advertising campaigns based on website audience data in Google Ads.</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground"><a href="https://policies.google.com/privacy?hl=en-US" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Privacy Policy</a></td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Facebook Pixel<br /><span className="text-muted-foreground font-normal">facebook.com</span></td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Website visitor analytics; Setting up advertising campaigns based on Meta audience data.</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground"><a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Facebook Privacy Policy</a></td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Yandex Metrica<br /><span className="text-muted-foreground font-normal">metrica.yandex.com</span></td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Website visitor analytics; User behavior heatmap analysis.</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground"><a href="https://yandex.com/legal/confidential/?lang=en" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Yandex Privacy Policy</a></td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Twitter / X<br /><span className="text-muted-foreground font-normal">ads.twitter.com</span></td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Setting up ad campaigns based on Twitter audience data.</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground"><a href="https://twitter.com/en/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Twitter Privacy Policy</a></td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">ROIStat<br /><span className="text-muted-foreground font-normal">roistat.com</span></td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Analysis of incoming phone calls.</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground"><a href="https://roistat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ROIStat Privacy Policy</a></td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">TikTok Pixel<br /><span className="text-muted-foreground font-normal">ads.tiktok.com</span></td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Website visitor analytics; Setting up advertising campaigns based on TikTok audience data.</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground"><a href="https://ads.tiktok.com/help/article?aid=10005079" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">TikTok Privacy Policy</a></td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">AdRoll<br /><span className="text-muted-foreground font-normal">adroll.com</span></td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Launch display ads, social media ads, and email that engages existing customers, attracts new customers, and grows revenue.</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground"><a href="https://www.nextroll.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">AdRoll Privacy Policy</a></td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">CityAdds<br /><span className="text-muted-foreground font-normal">cityads.com</span></td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Launch display ads, social media ads, and email that engages existing customers, attracts new customers, and grows revenue.</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground"><a href="https://cityads.com/static/documents/privacy-policy/privacy-policy.en.20180525.pdf" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">CityAdds Privacy Policy</a></td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Rakuten<br /><span className="text-muted-foreground font-normal">rakuten.com</span></td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Launch display ads, social media ads, and email that engages existing customers, attracts new customers, and grows revenue.</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground"><a href="https://rakutenadvertising.com/legal-notices/services-privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Rakuten Privacy Policy</a></td>
                  </tr>
                  <tr className="even:bg-muted/50">
                    <td className="border border-border px-4 py-3 font-medium align-top">Admitad<br /><span className="text-muted-foreground font-normal">admitad.com</span></td>
                    <td className="border border-border px-4 py-3 text-muted-foreground">Launch display ads, social media ads, and email that engages existing customers, attracts new customers, and grows revenue.</td>
                    <td className="border border-border px-4 py-3 text-muted-foreground"><a href="https://terms.admitad.com/en/privacy-policy/cookie-policy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Admitad Privacy Policy</a></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Certain content and features in our services depend on cookies to function. Please note, however, that
              if you delete cookies or refuse to accept them, you might not be able to use some or all of the features
              we offer. You may not be able to log in, store your preferences, and some of our pages might not display
              properly.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>"Do Not Track."</strong> California law requires us to let you know how we respond to web
              browser Do Not Track (DNT) signals. Please note that we do not respond to or honor DNT signals or
              similar mechanisms transmitted by web browsers.
            </p>
          </section>

          {/* Section 20 */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">20. Changes to This Privacy Notice</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may change this privacy notice from time to time — when we do, we will publish the updated policy on
              this website.
            </p>
          </section>

          {/* Section 21 */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">21. Children's Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Services are not directed to children under 13. Parents or legal guardians must provide their
              verified consent for the collection, use, or disclosure of a child's personal information. Stack
              Teacher will not collect, use, or disclose any personal information from a child if their parent or
              guardian does not provide such consent.
            </p>
          </section>

          {/* Section 22 */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">22. How to Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Please contact us by mail or email if you have any questions about this privacy policy or the
              information we hold about you.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-2">Our contact details are shown below:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
              <li>
                Contact email address:{' '}
                <a href="mailto:support@stackteacher.com" className="text-primary hover:underline">
                  support@stackteacher.com
                </a>
              </li>
              <li>Stack Teacher Inc.</li>
              <li>30 N Gould St Ste N, Sheridan, WY 82801, USA</li>
            </ul>
          </section>

          {/* Section 23 */}
          <section>
            <h2 className="font-display text-2xl font-bold mb-4">23. Do You Need Extra Help?</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you would like this notice in another format (for example: audio, large print, braille) please
              contact us (see "How to contact us" above).
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
