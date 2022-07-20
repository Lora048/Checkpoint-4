const { getOneProject } = require("../models/projet");
const {
  createOneClient,
  getAllClients,
  getAllClientsByProject,
  getOneClient,
  getOneClientByProjectId,
  updateOneClient,
  deleteOneClient,
} = require("../models/client");

const createOne = async (req, res) => {
  const projetId = parseInt(req.params.projetId, 10);
  const projet = await getOneProject(projetId);
  if (!projet) {
    return res.status(404).send(`Projet #${projetId} not found.`);
  }
  try {
    const clientCreated = await createOneClient({
      ...req.body,
      projetId,
    });
    return res.status(201).send(clientCreated);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de création de l'entrée client" });
  }
};

const updateOne = async (req, res) => {
  const clientId = parseInt(req.params.clientId, 10);

  const client = await getOneClient(clientId);

  if (!client) {
    res.status(404).send("Aucun client correspondant");
  }

  try {
    const clientUpdated = await updateOneClient(clientId, req.body);
    return res.status(201).send(clientUpdated);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de modification de l'entrée client" });
  }
};

const getOne = async (req, res) => {
  const clientId = parseInt(req.params.clientId, 10);

  try {
    const client = await getOneClient(clientId);
    if (!client) {
      res.status(404).send("Aucun client trouvé");
    } else {
      return res.status(201).send(client);
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture du client" });
  }
  return null;
};

const getOneByProject = async (req, res) => {
  const projetId = parseInt(req.params.projetId, 10);
  const clientId = parseInt(req.params.clientId, 10);

  try {
    const client = await getOneClientByProjectId(projetId, clientId);
    if (!client) {
      res.status(404).send("Aucun client trouvé pour ce projet");
    } else {
      return res.status(201).send(client);
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture du client" });
  }
  return null;
};

const getAll = async (req, res) => {
  try {
    const clientsList = await getAllClients();
    return res.status(201).send(clientsList);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture des clients" });
  }
};

const getAllByProject = async (req, res) => {
  const projetId = parseInt(req.params.projetId, 10);
  try {
    const clientsList = await getAllClientsByProject(projetId);
    return res.status(201).send(clientsList);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture des clients" });
  }
};

const deleteOne = async (req, res) => {
  const clientId = parseInt(req.params.clientId, 10);

  const client = await getOneClient(clientId);

  if (!client) {
    res.status(404).send("Aucun client correspondant");
  }

  try {
    await deleteOneClient(clientId);
    return res.status(200).send("Le client a été supprimé avec succès");
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de suppression de l'entrée client" });
  }
};

module.exports = {
  createOne,
  updateOne,
  getOne,
  getOneByProject,
  getAll,
  getAllByProject,
  deleteOne,
};
