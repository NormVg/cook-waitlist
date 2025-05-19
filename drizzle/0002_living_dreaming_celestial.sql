ALTER TYPE "public"."type" RENAME TO "user_level";--> statement-breakpoint
ALTER TABLE "cook-waitlist" ALTER COLUMN "type" SET NOT NULL;