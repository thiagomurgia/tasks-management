/*
  Warnings:

  - You are about to drop the column `fatherId` on the `user` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_fatherId_fkey";

-- AlterTable
ALTER TABLE "comments" ADD COLUMN     "childUserId" TEXT;

-- AlterTable
ALTER TABLE "tasks" ADD COLUMN     "childUserId" TEXT;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "fatherId";

-- CreateTable
CREATE TABLE "ChildUser" (
    "id" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "picProfile" TEXT,
    "profileColor" TEXT DEFAULT '#487f8a',
    "name" TEXT NOT NULL,
    "emailTokenTActivate" TEXT NOT NULL,
    "responsibleEmail" TEXT,
    "tokenToRedefinePassword" INTEGER,
    "userIsActive" BOOLEAN NOT NULL DEFAULT false,
    "userProfile" TEXT DEFAULT '0',
    "userXP" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TEXT,
    "userId" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "ChildUser_id_key" ON "ChildUser"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ChildUser_email_key" ON "ChildUser"("email");

-- AddForeignKey
ALTER TABLE "ChildUser" ADD CONSTRAINT "ChildUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("email") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_childUserId_fkey" FOREIGN KEY ("childUserId") REFERENCES "ChildUser"("email") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_childUserId_fkey" FOREIGN KEY ("childUserId") REFERENCES "ChildUser"("email") ON DELETE SET NULL ON UPDATE CASCADE;
