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
- [ ] **Chapters Functionality:** Starting work on dynamic chapters and content rendering.
- [x] **Chapters Landing Page:** Implemented a visually rich "Sacred Archive" page at `/chapters` to showcase books and encourage engagement.
- [x] **Dynamic UX:** Added session-based buttons on Chapters page (Join/Sign In for guests, Browse Library for users).
- [ ] **Dashboard Revamp:** Updating the user library (dashboard) with real book data and improved UI.
- [x] **Interactive Book Preview:** Implemented a snippet-based preview system for "Lawyer on Lincoln" on the dedicated book details page.
- [x] **Dashboard Integrity:** Restored clean dashboard UI while linking "View Book" to the interactive story preview.
- [x] **Discussion System:** Implemented "The Forbidden Testimonies" (comments) system with database persistence, Server Actions, and a specialized UI for book discussions.
- [x] **Auth Robustness:** Improved comment submission by adding a fallback DB lookup for user IDs.
- [x] **Schema Fix:** Removed `updatedAt` field from `usersTable`.
- [x] **Home Page UX:** Made the main CTA button dynamic based on user session (Join vs Enter the Void).
- [x] **Database Stability:** Switched to `postgres.js` driver to prevent `fetch failed` errors during server-side session checks.

## Change Tracking (Git Sync)
| Date       | Description | Changes | Commit |
|------------|-------------|---------|--------|
| 2026-05-17 | Discussion Feature | Implemented comments system with DB storage and specialized UI at `/comments`. | N/A |
| 2026-05-17 | Stability Fix | Returned to `postgres.js` driver for reliable DB connection. | N/A |
| 2026-05-17 | Dynamic Home CTA | Main button now redirects to `/dashboard` for logged-in users. | N/A |
| 2026-05-17 | New Branch: Discuss | Created `discuss-feature` branch to work on comments and community discussions. | N/A |
| 2026-05-17 | Book Preview UI | Moved interactive snippets to `books/[id]` page for a better user journey. | 1613a4b |
| 2026-05-17 | Dashboard Revert | Restored original Dashboard layout as per user preference. | N/A |
| 2026-05-17 | New Branch: Dashboard | Created `dashboard-update` branch to work on user library and book management. | N/A |
| 2026-05-17 | Dynamic Chapters UI | Integrated `useSession` to Chapters page for personalized CTAs. | N/A |
| 2026-05-17 | Chapters UI | Created atmospheric `/chapters` landing page with featured volumes and CTAs. | 6806ce2 |
| 2026-05-17 | New Branch: Chapters | Created `the-chapters` branch to work on book content and navigation. | N/A |
| 2026-05-17 | Robust Auth Fix | Used `crypto.randomUUID()` to satisfy Drizzle types and added error handling. | N/A |
| 2026-05-17 | Auth Build Fix | Fixed missing `password` property in `db.insert` for Google Auth. | N/A |
| 2026-05-17 | UI Cleanup | Removed "Admin" link from NavBar and fixed active state for My Library. | N/A |
| 2026-05-17 | Auth Redirect Fix | Added `callbackUrl: "/dashboard"` to Google signIn calls in both forms. | N/A |
| 2026-05-17 | Auth UI Hints | Added English hints to Login/Register forms to guide users towards Google Auth. | N/A |
| 2026-05-17 | Fix Auth & Schema | Fixed Google Auth Access Denied and synced table names. | 535f7c8 |
| 2026-05-17 | Book Details UI | Redesigned book details with hover navigation and dynamic sidebar. | be91277 |
| 2026-05-17 | Profile Page | Added `profile-page` component. | bbde940 |
| 2026-04-28 | Google Auth | Added manual user creation in NextAuth callbacks for Google provider. | 4f88bbb |

## Checkpoint
- **Current State:** Functional auth, interactive book previews, and a complete discussion system with DB integration.
- **Immediate Next Steps:** 
  1. Implement book search and filtering on the main page.
  2. Add functionality for users to bookmark or "favorite" books.
  3. Set up admin dashboard for managing books and chapters.
