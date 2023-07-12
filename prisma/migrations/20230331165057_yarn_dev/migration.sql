/*
  Warnings:

  - You are about to drop the column `childUserId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_childUserId_fkey";

-- DropIndex
DROP INDEX "User_childUserId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "childUserId",
ADD COLUMN     "usuarioFilhoId" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_usuarioFilhoId_fkey" FOREIGN KEY ("usuarioFilhoId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
