# Security policy

If you find a security problem on this site, please email aditya8251358@gmail.com
with the details. Please don't open a public issue for it. I'll reply within 7 days.

What's in place:
- Strict Content Security Policy: scripts, styles, fonts and images load only from this domain; Trusted Types enforced.
- No third-party scripts, fonts, analytics or trackers.
- HSTS, frame blocking, nosniff, strict referrer policy, Permissions-Policy denying device APIs, COOP/CORP.
- The AI endpoint (`/api/ask`) checks the request origin, accepts only small JSON bodies, rate-limits per IP,
  times out, filters its output, and never stores questions. The API key lives only in Vercel environment variables.
