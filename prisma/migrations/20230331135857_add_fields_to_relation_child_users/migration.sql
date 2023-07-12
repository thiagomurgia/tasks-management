/*
  Warnings:

  - You are about to drop the column `predecessorId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[childUserId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_predecessorId_fkey";

-- DropIndex
DROP INDEX "User_predecessorId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "predecessorId",
ADD COLUMN     "childUserId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_childUserId_key" ON "User"("childUserId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_childUserId_fkey" FOREIGN KEY ("childUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
