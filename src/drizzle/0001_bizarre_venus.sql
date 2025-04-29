ALTER TABLE "resumes" ALTER COLUMN "data" SET DATA TYPE json;--> statement-breakpoint
ALTER TABLE "resumes" ALTER COLUMN "data" SET DEFAULT '{}'::json;--> statement-breakpoint
ALTER TABLE "account" ADD CONSTRAINT "account_provider_providerAccountId_pk" PRIMARY KEY("provider","providerAccountId");--> statement-breakpoint
ALTER TABLE "authenticator" ADD CONSTRAINT "authenticator_userId_credentialID_pk" PRIMARY KEY("userId","credentialID");--> statement-breakpoint
ALTER TABLE "verificationToken" ADD CONSTRAINT "verificationToken_identifier_token_pk" PRIMARY KEY("identifier","token");--> statement-breakpoint
ALTER TABLE "resumes" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "credits" integer DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "customerId" text;--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_customerId_unique" UNIQUE("customerId");