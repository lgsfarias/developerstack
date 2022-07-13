/*
  Warnings:

  - You are about to drop the column `description` on the `answers` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `questions` table. All the data in the column will be lost.
  - Added the required column `answer` to the `answers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `question` to the `questions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "answers" DROP COLUMN "description",
ADD COLUMN     "answer" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "questions" DROP COLUMN "description",
ADD COLUMN     "question" TEXT NOT NULL;
