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

## Change Tracking (Git Sync)
| Date       | Description | Changes | Commit |
|------------|-------------|---------|--------|
| 2026-04-28 | Google Auth & DB Sync | Added manual user creation in NextAuth callbacks for Google provider. | N/A |
| 2026-04-28 | Debugging Auth | Added verbose logging for database operations in `[...nextauth]/route.ts`. | N/A |

## Checkpoint
- **Current State:** Auth system is functional but requires debugging for Google provider (Access Denied). DB schema is updated to `users` table.
- **Immediate Next Steps:** 
  1. Restart the server and apply migrations (`npm run db:migrate`).
  2. Test Google login and monitor server logs for detailed DB errors.
  3. Verify that Google user ID and email are correctly stored.
