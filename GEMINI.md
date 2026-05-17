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
- [x] **Database Schema:** Updated tables (`users`, `books`, `chapters`, etc.).
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

## Change Tracking (Git Sync)
| Date       | Description | Changes | Commit |
|------------|-------------|---------|--------|
| 2026-05-17 | UI Cleanup | Removed "Admin" link from NavBar and fixed active state for My Library. | N/A |
| 2026-05-17 | Auth Redirect Fix | Added `callbackUrl: "/dashboard"` to Google signIn calls in both forms. | N/A |
| 2026-05-17 | Auth UI Hints | Added English hints to Login/Register forms to guide users towards Google Auth. | N/A |
| 2026-05-17 | Fix Auth & Schema | Fixed Google Auth Access Denied and synced table names. | 535f7c8 |
| 2026-05-17 | Book Details UI | Redesigned book details with hover navigation and dynamic sidebar. | be91277 |
| 2026-05-17 | Profile Page | Added `profile-page` component. | bbde940 |
| 2026-04-28 | Google Auth | Added manual user creation in NextAuth callbacks for Google provider. | 4f88bbb |

## Checkpoint
- **Current State:** Auth system is functional (visual/Google). DB schema is stable with `users` table. UI hints added.
- **Immediate Next Steps:** 
  1. Implement book search and filtering on the main page.
  2. Add functionality for users to bookmark or "favorite" books.
  3. Set up admin dashboard for managing books and chapters.
