const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createOneClient = async (client) => {
  try {
    return await prisma.client.create({
      data: { ...client },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getAllClients = async () => {
  try {
    return await prisma.client.findMany();
  } finally {
    await prisma.$disconnect();
  }
};

const getAllClientsByProject = async (projetId) => {
  try {
    return await prisma.client.findMany({ where: { projetId } });
  } finally {
    await prisma.$disconnect();
  }
};

const getOneClient = async (id) => {
  try {
    return await prisma.client.findFirst({
      where: { id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const getOneClientByProjectId = async (projetId, id) => {
  try {
    return await prisma.client.findFirst({
      where: { projetId, id },
    });
  } finally {
    await prisma.$disconnect();
  }
};

const updateOneClient = async (id, data) => {
  try {
    const client = await prisma.client.update({
      where: { id },
      data: { ...data },
    });
    return client;
  } finally {
    await prisma.$disconnect();
  }
};

const deleteOneClient = async (id) => {
  try {
    return await prisma.client.delete({ where: { id } });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = {
  createOneClient,
  getAllClients,
  getAllClientsByProject,
  getOneClient,
  getOneClientByProjectId,
  updateOneClient,
  deleteOneClient,
};
