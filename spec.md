# Specification

## Summary
**Goal:** Add a Privacy Policy page with Stack Teacher branding, a styled cookies table, a dedicated route, and a footer link.

**Planned changes:**
- Create a new `PrivacyPolicyPage.tsx` component with full privacy policy content using "Stack Teacher" and "stackteacher.com" branding (support@stackteacher.com, compliance@stackteacher.com, address: 30 N Gould St Ste N, Sheridan, WY 82801, USA, phone: 1234567890), styled to match the existing `TermsOfUsePage`
- Include a styled Tailwind CSS table in the Cookies section with columns for Cookie Name/Type, Purpose, and Duration, wrapped in an `overflow-x-auto` container
- Register a `/privacy-policy` route in `App.tsx` rendering the new page, consistent with existing routing patterns
- Add a "Privacy Policy" footer link in `Layout.tsx` alongside the existing "Terms of Use" link

**User-visible outcome:** Users can navigate to `/privacy-policy` or click the footer "Privacy Policy" link to view a fully branded Stack Teacher privacy policy page with a styled cookies table.
