/*
  Warnings:

  - You are about to drop the column `title` on the `answers` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `questions` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "answers" DROP COLUMN "title";

-- AlterTable
ALTER TABLE "questions" DROP COLUMN "title";
