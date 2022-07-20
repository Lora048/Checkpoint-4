const { getOneProject } = require("../models/projet");
const {
  createOneImage,
  getAllImages,
  getAllImagesByProject,
  getOneImage,
  getOneImageByProjectId,
  updateOneImage,
  deleteOneImage,
} = require("../models/image");

const createOne = async (req, res) => {
  const projetId = parseInt(req.params.projetId, 10);
  const projet = await getOneProject(projetId);
  if (!projet) {
    return res.status(404).send(`Projet #${projetId} not found.`);
  }
  try {
    const imageCreated = await createOneImage({
      ...req.body,
      projetId,
    });
    return res.status(201).send(imageCreated);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de création de l'entrée image" });
  }
};

const updateOne = async (req, res) => {
  const imageId = parseInt(req.params.imageId, 10);

  const image = await getOneImage(imageId);

  if (!image) {
    res.status(404).send("Aucune image correspondante");
  }

  try {
    const imageUpdated = await updateOneImage(imageId, req.body);
    return res.status(201).send(imageUpdated);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de modification de l'entrée image" });
  }
};

const getOne = async (req, res) => {
  const imageId = parseInt(req.params.imageId, 10);

  try {
    const image = await getOneImage(imageId);
    if (!image) {
      res.status(404).send("Aucune image trouvée");
    } else {
      return res.status(201).send(image);
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture de l'image" });
  }
  return null;
};

const getOneByProject = async (req, res) => {
  const projetId = parseInt(req.params.projetId, 10);
  const imageId = parseInt(req.params.imageId, 10);

  try {
    const image = await getOneImageByProjectId(projetId, imageId);
    if (!image) {
      res.status(404).send("Aucune image trouvée pour ce projet");
    } else {
      return res.status(201).send(image);
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture de l'image" });
  }
  return null;
};

const getAll = async (req, res) => {
  try {
    const imagesList = await getAllImages();
    return res.status(201).send(imagesList);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture des images" });
  }
};

const getAllByProject = async (req, res) => {
  const projetId = parseInt(req.params.projetId, 10);
  try {
    const imagesList = await getAllImagesByProject(projetId);
    return res.status(201).send(imagesList);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture des images" });
  }
};

const deleteOne = async (req, res) => {
  const imageId = parseInt(req.params.imageId, 10);

  const image = await getOneImage(imageId);

  if (!image) {
    res.status(404).send("Aucune image correspondante");
  }

  try {
    await deleteOneImage(imageId);
    return res.status(200).send("L'image a été supprimée avec succès");
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de suppression de l'entrée image" });
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
