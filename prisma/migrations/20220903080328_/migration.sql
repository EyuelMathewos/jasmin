/*
  Warnings:

  - You are about to drop the column `coding` on the `message` table. All the data in the column will be lost.
  - You are about to drop the column `validity` on the `message` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "message" DROP COLUMN "coding",
DROP COLUMN "validity",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "from" DROP NOT NULL,
ALTER COLUMN "to" DROP NOT NULL,
ALTER COLUMN "originConnector" DROP NOT NULL,
ALTER COLUMN "priority" DROP NOT NULL,
ALTER COLUMN "content" DROP NOT NULL;
DROP SEQUENCE "message_id_seq";
