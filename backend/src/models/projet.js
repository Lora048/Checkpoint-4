const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOneProject = async (project) => {
  try {
    return await prisma.projet.create({
      data: { ...project },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getAllProjects = async () => {
  try {
    return await prisma.projet.findMany({
      include: {
        techno: true,
        client: true,
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOneProject = async (id) => {
  try {
    return await prisma.projet.findFirst({
      where: { id },
      include: {
        techno: true,
        client: true,
      },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const updateOneProject = async (id, data) => {
  try {
    const projet = await prisma.projet.update({
      where: { id },
      data: { ...data },
    });
    return projet;
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOneProject = async (id) => {
  try {
    return await prisma.projet.delete({ where: { id } });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  createOneProject,
  updateOneProject,
  getAllProjects,
  getOneProject,
  deleteOneProject,
};
