CREATE TYPE "public"."type" AS ENUM('beginner', 'intermediate', 'advance');--> statement-breakpoint
ALTER TABLE "cook-waitlist" ALTER COLUMN "type" SET DATA TYPE "public"."type" USING "type"::"public"."type";--> statement-breakpoint
ALTER TABLE "cook-waitlist" ALTER COLUMN "type" DROP NOT NULL;