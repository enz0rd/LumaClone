-- CreateEnum
CREATE TYPE "CalendarLocationEnum" AS ENUM ('City', 'Global');

-- CreateEnum
CREATE TYPE "UserNotificationMethodEnum" AS ENUM ('EMAIL', 'SMS');

-- CreateEnum
CREATE TYPE "CategoryEnum" AS ENUM ('IA', 'ART', 'CLIMATE', 'FITNESS', 'WELLBEIGN', 'CRIPTO');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT,
    "name" TEXT,
    "bio" TEXT,
    "socialInstagram" TEXT,
    "socialTwitter" TEXT,
    "socialYoutube" TEXT,
    "socialLinkedin" TEXT,
    "socialWebsite" TEXT,
    "socialTiktok" TEXT,
    "phone" TEXT,
    "password" TEXT,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Calendar" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" VARCHAR(140),
    "tone" TEXT NOT NULL DEFAULT '#A337B9',
    "url" TEXT NOT NULL,
    "location" "CalendarLocationEnum" NOT NULL,
    "locationCity" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "creatorId" TEXT NOT NULL,

    CONSTRAINT "Calendar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserEmails" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "main" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserEmails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPreferences" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "language" TEXT NOT NULL DEFAULT 'pt-br',
    "participant_invite" "UserNotificationMethodEnum" NOT NULL DEFAULT 'EMAIL',
    "participant_reminder" "UserNotificationMethodEnum" NOT NULL DEFAULT 'EMAIL',
    "participant_transmission" "UserNotificationMethodEnum" NOT NULL DEFAULT 'EMAIL',
    "participant_updates" "UserNotificationMethodEnum" NOT NULL DEFAULT 'EMAIL',
    "participant_feedback" "UserNotificationMethodEnum" NOT NULL DEFAULT 'EMAIL',
    "host_guest_registration" "UserNotificationMethodEnum" NOT NULL DEFAULT 'EMAIL',
    "host_feedback_answer" "UserNotificationMethodEnum" NOT NULL DEFAULT 'EMAIL',
    "calendar_new_members" "UserNotificationMethodEnum" NOT NULL DEFAULT 'EMAIL',
    "calendar_event_submission" "UserNotificationMethodEnum" NOT NULL DEFAULT 'EMAIL',
    "luma_product_updates" "UserNotificationMethodEnum" NOT NULL DEFAULT 'EMAIL',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserPreferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPageSubscriptions" (
    "id" TEXT NOT NULL,
    "userPreferencesId" TEXT NOT NULL,
    "category" "CategoryEnum" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserPageSubscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserCalendarSubscriptions" (
    "id" TEXT NOT NULL,
    "userPreferencesId" TEXT NOT NULL,
    "calendarId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserCalendarSubscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserCards" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "cardEncrypted" TEXT NOT NULL,
    "main" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserCards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OTPCodes" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OTPCodes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "UserEmails_email_key" ON "UserEmails"("email");

-- CreateIndex
CREATE UNIQUE INDEX "OTPCodes_code_key" ON "OTPCodes"("code");

-- AddForeignKey
ALTER TABLE "Calendar" ADD CONSTRAINT "Calendar_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserEmails" ADD CONSTRAINT "UserEmails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPreferences" ADD CONSTRAINT "UserPreferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPageSubscriptions" ADD CONSTRAINT "UserPageSubscriptions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCalendarSubscriptions" ADD CONSTRAINT "UserCalendarSubscriptions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCalendarSubscriptions" ADD CONSTRAINT "UserCalendarSubscriptions_calendarId_fkey" FOREIGN KEY ("calendarId") REFERENCES "Calendar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCards" ADD CONSTRAINT "UserCards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OTPCodes" ADD CONSTRAINT "OTPCodes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
