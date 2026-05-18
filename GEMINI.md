# GEMINI.md - The Reader's Club Project Context

## Architecture & Tech Stack
- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Database:** PostgreSQL (via [Neon](https://neon.tech/))
- **ORM:** [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication:** [NextAuth.js] (Google & Credentials)
- **Security:** [bcryptjs] for password hashing
- **Styling:** [Tailwind CSS 4], [Shadcn UI]
- **Forms & Validation:** React Hook Form, Zod

## Feature Log
- [x] **Project Initialization:** Next.js + TS setup.
- [x] **Database Schema:** Updated tables (`users`, `books`, `chapters`, `comments`, etc.).
- [x] **Google Auth Integration:** Implemented `signIn` callback to save Google users to the DB.
- [x] **Credentials Auth:** Full registration/login with bcrypt hashing.
- [x] **Enhanced Logging:** Added detailed try-catch blocks in NextAuth to debug "Access Denied" errors.
- [x] **Database Migrations:** Renamed `user` to `users`, updated foreign keys.
- [x] **Profile Page:** Added user profile management component.
- [x] **Book Details Redesign:** Implemented hover navigation and dynamic sidebar for book chapters.
- [x] **Auth Fix:** Synchronized schema names and fixed Google Auth "Access Denied" issues.
- [x] **UX Improvements:** Added informational hints to Login and Register forms regarding Google Auth priority (English version).
- [x] **Navigation Fix:** Ensured automatic redirection to `/dashboard` (My Library) after successful Google login.
- [x] **UI Cleanup:** Removed "Admin" link from the navigation bar.
- [x] **Build Fix:** Resolved TypeScript error in `auth-options.ts` by using `crypto.randomUUID()` for IDs and providing a random password for Google users.
- [x] **Chapters Functionality:** Starting work on dynamic chapters and content rendering.
- [x] **Chapters Landing Page:** Implemented a visually rich "Sacred Archive" page at `/chapters` to showcase books and encourage engagement.
- [x] **Dynamic UX:** Added session-based buttons on Chapters page (Join/Sign In for guests, Browse Library for users).
- [x] **Dashboard Revamp:** Updated the user library (dashboard) with real book data fetched from the database and improved UI.
- [x] **Interactive Book Preview:** Implemented a snippet-based preview system for "Lawyer on Lincoln" on the dedicated book details page.
- [x] **Dashboard Integrity:** Restored clean dashboard UI while linking "View Book" to the interactive story preview.
- [x] **Discussion System:** Implemented "The Forbidden Testimonies" (comments) system with database persistence, Server Actions, and a specialized UI for book discussions.
- [x] **Auth Robustness:** Improved comment submission by adding a fallback DB lookup for user IDs.
- [x] **Auth Config Fix:** Synchronized `route.ts` with `auth-options.ts` to ensure consistent auth behavior.
- [x] **Schema Fix:** Removed `updatedAt` field from `usersTable`.
- [x] **Home Page UX:** Maintained a clean, atmospheric Hero section with dynamic session-based CTA.
- [x] **Simplified Structure:** Removed separate chapters landing and reader pages. Integrated story snippets directly into the book details page for better immersion.
- [ ] **Library Search:** Implement book search and filtering directly in the Dashboard (My Library).
- [x] **Database Stability:** Switched to `postgres.js` driver to prevent `fetch failed` errors during server-side session checks.

## Change Tracking (Git Sync)
| Date       | Description | Changes | Commit |
|------------|-------------|---------|--------|
| 2026-05-18 | Dashboard Revamp | Transformed Dashboard into a Server Component with real DB data and fixed Auth config. | - |
| 2026-05-18 | Finalized Discussion | Integrated discussion system with schema fixes and DB stability. | 06e2c56 |
| 2026-05-17 | Discussion Feature | Implemented comments system with DB storage and specialized UI at `/comments`. | 06e2c56 |
| 2026-05-17 | Stability Fix | Returned to `postgres.js` driver for reliable DB connection. | 06e2c56 |
| 2026-05-17 | Dynamic Home CTA | Main button now redirects to `/dashboard` for logged-in users. | 06e2c56 |
| 2026-05-17 | Book Preview UI | Moved interactive snippets to `books/[id]` page for a better user journey. | 1613a4b |
| 2026-05-17 | Chapters UI | Created atmospheric `/chapters` landing page with featured volumes and CTAs. | 6806ce2 |
| 2026-05-17 | Deployment Ready | Finalized deployment setup for Vercel. | da089c7 |
| 2026-05-17 | Auth Refactor | Moved authOptions to lib and synced Google sign-in with usersTable. | b45faf8 |

## Checkpoint
- **Current State:** Functional auth, dynamic dashboard with real data, stable DB connection. Home page returned to minimalist design.
- **Immediate Next Steps:** 
  1. Add search and filtering functionality to the Dashboard.
  2. Add functionality for users to bookmark or "favorite" books.
  3. Set up admin dashboard for managing books and chapters.
