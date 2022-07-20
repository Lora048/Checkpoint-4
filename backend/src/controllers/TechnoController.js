const {
  createOneTechno,
  getAllTechnos,
  getOneTechno,
  updateOneTechno,
  deleteOneTechno,
} = require("../models/techno");

const createOne = async (req, res) => {
  try {
    const technoCreated = await createOneTechno({
      ...req.body,
    });
    return res.status(201).send(technoCreated);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de création de l'entrée techno" });
  }
};

const updateOne = async (req, res) => {
  const technoId = parseInt(req.params.technoId, 10);

  const techno = await getOneTechno(technoId);

  if (!techno) {
    res.status(404).send("Aucune techno correspondante");
  }

  try {
    const technoUpdated = await updateOneTechno(technoId, req.body);
    return res.status(201).send(technoUpdated);
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de modification de l'entrée techno" });
  }
};

const getOne = async (req, res) => {
  const technoId = parseInt(req.params.technoId, 10);

  try {
    const techno = await getOneTechno(technoId);
    if (!techno) {
      res.status(404).send("Aucune techno trouvée");
    } else {
      return res.status(201).send(techno);
    }
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture de la techno" });
  }
  return null;
};

const getAll = async (req, res) => {
  try {
    const technosList = await getAllTechnos();
    return res.status(201).send(technosList);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Problème de lecture des technos" });
  }
};

const deleteOne = async (req, res) => {
  const technoId = parseInt(req.params.technoId, 10);

  const techno = await getOneTechno(technoId);

  if (!techno) {
    res.status(404).send("Aucune techno correspondante");
  }

  try {
    await deleteOneTechno(technoId);
    return res.status(200).send("La techno a été supprimée avec succès");
  } catch (e) {
    console.error(e);
    return res
      .status(500)
      .json({ error: "Problème de suppression de l'entrée techno" });
  }
};

module.exports = { createOne, updateOne, getOne, getAll, deleteOne };
