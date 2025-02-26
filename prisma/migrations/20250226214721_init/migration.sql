/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Calendar" DROP CONSTRAINT "Calendar_creatorId_fkey";

-- DropForeignKey
ALTER TABLE "OTPCodes" DROP CONSTRAINT "OTPCodes_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserCalendarSubscriptions" DROP CONSTRAINT "UserCalendarSubscriptions_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserCards" DROP CONSTRAINT "UserCards_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserEmails" DROP CONSTRAINT "UserEmails_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserPageSubscriptions" DROP CONSTRAINT "UserPageSubscriptions_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserPreferences" DROP CONSTRAINT "UserPreferences_userId_fkey";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
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

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- AddForeignKey
ALTER TABLE "Calendar" ADD CONSTRAINT "Calendar_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserEmails" ADD CONSTRAINT "UserEmails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPreferences" ADD CONSTRAINT "UserPreferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPageSubscriptions" ADD CONSTRAINT "UserPageSubscriptions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCalendarSubscriptions" ADD CONSTRAINT "UserCalendarSubscriptions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserCards" ADD CONSTRAINT "UserCards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OTPCodes" ADD CONSTRAINT "OTPCodes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
