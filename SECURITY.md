# Security Policy

## Scope

This repository is a **static, single-page portfolio website** (Vite + React,
deployed to Vercel). It has:

- No backend, server-side code, database, or API of its own
- No authentication, user accounts, or sessions
- No user input processing, forms, cookies, or client-side storage
- No secrets in the source (everything shipped is public by design)

As a result most server-side vulnerability classes do not apply. The relevant
surface is limited to client-side concerns (XSS), transport security, HTTP
security headers, and dependency supply chain.

## Reporting a Vulnerability

If you believe you have found a security issue (for example, a way to inject
script into the page, a misconfigured header, or a vulnerable dependency),
please report it privately:

- Email: **bakreankur@gmail.com**

Please include steps to reproduce and, where relevant, a proof of concept.
I aim to acknowledge reports within a few days. Good-faith research is
welcome; please avoid denial-of-service, spam, or accessing data that is not
yours while testing.

## Hardening in place

- **Transport:** HTTPS enforced by the host + HSTS (`Strict-Transport-Security`).
- **Headers:** `Content-Security-Policy`, `X-Frame-Options: DENY`,
  `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`,
  `Cross-Origin-Opener-Policy`, and `Cross-Origin-Resource-Policy`
  (see `vercel.json`).
- **XSS:** React auto-escapes all rendered content; there is no
  `dangerouslySetInnerHTML`. The ESLint rule `react/no-danger` fails the build
  if it is ever introduced, and `react/jsx-no-target-blank` enforces
  `rel="noopener noreferrer"` on external links.
- **Dependencies:** `npm audit` gate in CI, CodeQL scanning, and Dependabot
  updates.

### Known/accepted configuration

The CSP uses `style-src 'unsafe-inline'`. This is required because
`framer-motion` and inline `style={{ ... }}` attributes (the cursor glow and
typing terminal) apply inline styles. Script execution remains strict
(`script-src 'self'`), which is where the meaningful XSS risk would be.
