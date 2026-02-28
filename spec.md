# Specification

## Summary
**Goal:** Add a "Terms of Use" link in the footer and a dedicated Terms of Service page at `/terms`.

**Planned changes:**
- Add a new `/terms` route in the router configuration that renders a `TermsOfUsePage` component, using the shared Layout (header/footer visible)
- Create a `TermsOfUsePage` component containing all 14 sections of the Terms of Service verbatim, including the opening bold warning paragraph, bullet lists, sub-sections, ALL-CAPS disclaimer blocks, a clickable `mailto:support@stackteacher.com` link, and the copyright line "Copyright © Stack Teacher. All rights reserved."
- Add a "Terms of Use" footer link next to the existing "About Us" link, navigating to `/terms`, with matching styling

**User-visible outcome:** Users can click "Terms of Use" in the footer to navigate to a full Terms of Service page displaying all legal content for Stack Teacher.
