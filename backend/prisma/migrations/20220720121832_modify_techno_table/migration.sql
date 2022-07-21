/*
  Warnings:

  - Added the required column `projetId` to the `techno` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `techno` ADD COLUMN `projetId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `techno` ADD CONSTRAINT `techno_projetId_fkey` FOREIGN KEY (`projetId`) REFERENCES `projet`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
