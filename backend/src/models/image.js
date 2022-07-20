const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOneImage = async (image) => {
  try {
    return await prisma.image.create({
      data: { ...image },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getAllImages = async () => {
  try {
    return await prisma.image.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

const getAllImagesByProject = async (projetId) => {
  try {
    return await prisma.image.findMany({ where: { projetId } });
  } finally {
    await prisma.$disconnect();
  }
};

const getOneImage = async (id) => {
  try {
    return await prisma.image.findFirst({
      where: { id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOneImageByProjectId = async (projetId, id) => {
  try {
    return await prisma.image.findFirst({
      where: { projetId, id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const updateOneImage = async (id, data) => {
  try {
    const image = await prisma.image.update({
      where: { id },
      data: { ...data },
    });
    return image;
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOneImage = async (id) => {
  try {
    return await prisma.image.delete({ where: { id } });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  createOneImage,
  getAllImages,
  getAllImagesByProject,
  getOneImage,
  getOneImageByProjectId,
  updateOneImage,
  deleteOneImage,
};
