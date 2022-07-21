-- CreateTable
CREATE TABLE `documents` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `documentLink` VARCHAR(300) NOT NULL,
    `projetId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `documents` ADD CONSTRAINT `documents_projetId_fkey` FOREIGN KEY (`projetId`) REFERENCES `projet`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
