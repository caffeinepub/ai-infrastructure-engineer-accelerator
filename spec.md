# Specification

## Summary
**Goal:** Add a Refund & Cancellation Policy page to the Stack Teacher site and link it from the footer.

**Planned changes:**
- Add a "Refund Policy" link in the footer navigation alongside existing links (Terms, Privacy Policy, etc.)
- Create a new `/refund-policy` route and `RefundPolicyPage` component containing the full Refund & Cancellation Policy text, with all "Careerist" references replaced by "Stack Teacher", `compliance@careerist.com` replaced by `support@stackteacher.com`, and address references replaced with "30 N Gould St Ste N, Sheridan, WY 82801, USA"
- Register the `/refund-policy` route in App.tsx following the same pattern as `/terms` and `/privacy-policy`

**User-visible outcome:** Users can click "Refund Policy" in the footer to navigate to a dedicated refund and cancellation policy page branded as Stack Teacher with the correct contact email and address.
