/*
  Warnings:

  - Made the column `title` on table `tasks` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `tasks` required. This step will fail if there are existing NULL values in that column.
  - Made the column `attributedTo` on table `tasks` required. This step will fail if there are existing NULL values in that column.
  - Made the column `timeToFinish` on table `tasks` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tasklevel` on table `tasks` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "tasks" ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL,
ALTER COLUMN "attributedTo" SET NOT NULL,
ALTER COLUMN "timeToFinish" SET NOT NULL,
ALTER COLUMN "timeToFinish" SET DATA TYPE TEXT,
ALTER COLUMN "updatedAt" SET DATA TYPE TEXT,
ALTER COLUMN "tasklevel" SET NOT NULL;
