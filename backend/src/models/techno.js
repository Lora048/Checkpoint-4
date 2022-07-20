const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOneTechno = async (techno) => {
  try {
    return await prisma.techno.create({
      data: { ...techno },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getAllTechnos = async () => {
  try {
    return await prisma.techno.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

const getAllTechnosByProject = async (projetId) => {
  try {
    return await prisma.techno.findMany({ where: { projetId } });
  } finally {
    await prisma.$disconnect();
  }
};

const getOneTechno = async (id) => {
  try {
    return await prisma.techno.findFirst({
      where: { id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOneTechnoByProjectId = async (projetId, id) => {
  try {
    return await prisma.techno.findFirst({
      where: { projetId, id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const updateOneTechno = async (id, data) => {
  try {
    const techno = await prisma.techno.update({
      where: { id },
      data: { ...data },
    });
    return techno;
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOneTechno = async (id) => {
  try {
    return await prisma.techno.delete({ where: { id } });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  createOneTechno,
  getAllTechnos,
  getAllTechnosByProject,
  getOneTechno,
  getOneTechnoByProjectId,
  updateOneTechno,
  deleteOneTechno,
};
