/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_usuarioFilhoId_fkey";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "picProfile" TEXT,
    "name" TEXT NOT NULL,
    "emailTokenTActivate" TEXT NOT NULL,
    "tokenToRedefinePassword" INTEGER,
    "userIsActive" BOOLEAN NOT NULL DEFAULT false,
    "userProfile" TEXT DEFAULT '0',
    "userXP" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "fatherId" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_fatherId_fkey" FOREIGN KEY ("fatherId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
