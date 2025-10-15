/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Membership` table. All the data in the column will be lost.
  - You are about to drop the column `projectId` on the `Membership` table. All the data in the column will be lost.
  - The `role` column on the `Membership` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Workspace` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Workspace` table. All the data in the column will be lost.
  - You are about to drop the `File` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RefreshToken` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProjectMembers` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."File" DROP CONSTRAINT "File_projectId_fkey";

-- DropForeignKey
ALTER TABLE "public"."File" DROP CONSTRAINT "File_uploaderId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Membership" DROP CONSTRAINT "Membership_projectId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Project" DROP CONSTRAINT "Project_workspaceId_fkey";

-- DropForeignKey
ALTER TABLE "public"."RefreshToken" DROP CONSTRAINT "RefreshToken_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."_ProjectMembers" DROP CONSTRAINT "_ProjectMembers_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_ProjectMembers" DROP CONSTRAINT "_ProjectMembers_B_fkey";

-- DropIndex
DROP INDEX "public"."Membership_userId_workspaceId_key";

-- AlterTable
ALTER TABLE "Membership" DROP COLUMN "createdAt",
DROP COLUMN "projectId",
DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'MEMBER';

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password",
DROP COLUMN "role",
DROP COLUMN "updatedAt",
ALTER COLUMN "name" SET NOT NULL;

-- AlterTable
ALTER TABLE "Workspace" DROP COLUMN "description",
DROP COLUMN "updatedAt";

-- DropTable
DROP TABLE "public"."File";

-- DropTable
DROP TABLE "public"."Project";

-- DropTable
DROP TABLE "public"."RefreshToken";

-- DropTable
DROP TABLE "public"."_ProjectMembers";

-- DropEnum
DROP TYPE "public"."WorkspaceRole";
