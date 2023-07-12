-- DropForeignKey
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_authorId_fkey";

-- AlterTable
ALTER TABLE "tasks" ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "attributedTo" DROP NOT NULL,
ALTER COLUMN "authorId" DROP NOT NULL,
ALTER COLUMN "tasklevel" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
