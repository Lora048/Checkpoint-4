/*
  Warnings:

  - You are about to drop the `documents` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `image` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `image` to the `projet` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `documents` DROP FOREIGN KEY `documents_projetId_fkey`;

-- DropForeignKey
ALTER TABLE `image` DROP FOREIGN KEY `image_projetId_fkey`;

-- AlterTable
ALTER TABLE `projet` ADD COLUMN `image` VARCHAR(255) NOT NULL;

-- DropTable
DROP TABLE `documents`;

-- DropTable
DROP TABLE `image`;
