/*
  Warnings:

  - You are about to drop the column `childUserId` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `childUserId` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the `ChildUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ChildUser" DROP CONSTRAINT "ChildUser_userId_fkey";

-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_childUserId_fkey";

-- DropForeignKey
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_childUserId_fkey";

-- AlterTable
ALTER TABLE "comments" DROP COLUMN "childUserId";

-- AlterTable
ALTER TABLE "tasks" DROP COLUMN "childUserId";

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "fatherId" TEXT;

-- DropTable
DROP TABLE "ChildUser";

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_fatherId_fkey" FOREIGN KEY ("fatherId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
