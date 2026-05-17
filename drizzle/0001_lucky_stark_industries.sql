ALTER TABLE "books" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "chapter_likes" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "chapters" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "comments" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "books" CASCADE;--> statement-breakpoint
DROP TABLE "chapter_likes" CASCADE;--> statement-breakpoint
DROP TABLE "chapters" CASCADE;--> statement-breakpoint
DROP TABLE "comments" CASCADE;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "name" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "email" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "password" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "role" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'user';--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "role" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "created_at" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "updated_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "emailVerified";