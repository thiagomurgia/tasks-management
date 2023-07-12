/*
  Warnings:

  - A unique constraint covering the columns `[predecessorId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "predecessorId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_predecessorId_key" ON "User"("predecessorId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_predecessorId_fkey" FOREIGN KEY ("predecessorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
