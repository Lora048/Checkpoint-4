const {
  createOneProject,
  updateOneProject,
  getAllProjects,
  getOneProject,
  deleteOneProject,
} = require("../models/projet");

const createOne = async (req, res) => {
  try {
    const projectCreated = await createOneProject({
      ...req.body,
    });
    return res.status(201).send(projectCreated);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de création de l'entrée projet" });
  }
};

const updateOne = async (req, res) => {
  const projectId = parseInt(req.params.projectId, 10);

  const project = await getOneProject(projectId);

  if (!project) {
    res.status(404).send("Aucun projet correspondant");
  }

  try {
    const projectUpdated = await updateOneProject(projectId, req.body);
    return res.status(201).send(projectUpdated);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de modification de l'entrée projet" });
  }
};

const getOne = async (req, res) => {
  const projectId = parseInt(req.params.projectId, 10);

  try {
    const project = await getOneProject(projectId);
    if (!project) {
      res.status(404).send("Aucun projet trouvé");
    } else {
      return res.status(201).send(project);
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture du project" });
  }
  return null;
};

const getAll = async (req, res) => {
  try {
    const projectsList = await getAllProjects();
    return res.status(201).send(projectsList);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture des projets" });
  }
};

const deleteOne = async (req, res) => {
  const projectId = parseInt(req.params.projectId, 10);

  const project = await getOneProject(projectId);

  if (!project) {
    res.status(404).send("Aucun projet correspondant");
  }

  try {
    await deleteOneProject(projectId);
    return res.status(200).send("Le projet a été supprimé avec succès");
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de suppression de l'entrée projet" });
  }
};

module.exports = { createOne, updateOne, getOne, getAll, deleteOne };
