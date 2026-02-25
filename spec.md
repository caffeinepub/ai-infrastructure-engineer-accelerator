# Specification

## Summary
**Goal:** Add a QA & Software Testing Career Launch Program ($1,999) as a third program to the Stack Teacher platform, with a full landing page, navigation integration, home page card, and application form support.

**Planned changes:**
- Add `/qa-testing` route in App.tsx rendering a new QA landing page component
- Build QA landing page with the following sections matching the existing design system:
  - Hero: headline "QA & Software Testing Career Launch Program™", badge "12-Week Intensive | US Market Focused", subheadline, no-degree/no-coding-required copy, and CTA linking to /apply
  - "Who This Program Is For" with six target profiles and tagline
  - "Why QA Is a Smart Entry Path in the US" with market bullet points, salary ranges ($60k–$80k entry, $90k+ automation), and disclaimer
  - "What You Will Learn (12-Week Roadmap)" with three monthly phases, project callouts, and "light coding gradually" note
  - "Hands-On Project Experience" listing five portfolio deliverables and tagline
  - "Career Accelerator Layer" listing career services and interview prep messaging
  - "Program Format & Time Commitment" with duration, hours/week, cohort details, and "not passive learning" note
  - Pricing/Investment section showing $1,999, flexible payment note, and CTA
  - FAQ section with four expandable questions/answers
  - Final CTA section with limited seats urgency messaging
- Add "QA & Software Testing" as a third link in the navigation Programs dropdown (Layout.tsx)
- Add a QA program card to the Featured Programs section on the home page with "Entry-Level Gateway" badge and link to /qa-testing
- Add "QA & Software Testing Career Launch Program" as a third option (value: `qa-testing`) in the program dropdown on /apply
- Update backend Motoko ApplicationForm type to include a `#qaTestingProgram` variant

**User-visible outcome:** Users can browse the new QA & Software Testing landing page via the nav dropdown or home page program cards, explore the full curriculum and pricing, and apply for the program through the existing /apply form with QA as a selectable option.
