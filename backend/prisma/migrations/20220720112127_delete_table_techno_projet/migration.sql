/*
  Warnings:

  - You are about to drop the `techno_projet` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[nom]` on the table `techno` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `techno_projet` DROP FOREIGN KEY `techno_projet_projetId_fkey`;

-- DropForeignKey
ALTER TABLE `techno_projet` DROP FOREIGN KEY `techno_projet_technoId_fkey`;

-- DropTable
DROP TABLE `techno_projet`;

-- CreateIndex
CREATE UNIQUE INDEX `techno_nom_key` ON `techno`(`nom`);
