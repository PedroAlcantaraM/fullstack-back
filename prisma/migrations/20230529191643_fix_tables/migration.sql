/*
  Warnings:

  - Added the required column `createdAt` to the `contacts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "contacts" ADD COLUMN     "createdAt" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "createdAt" TEXT NOT NULL;
