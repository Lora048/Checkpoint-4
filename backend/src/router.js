const express = require("express");

const ProjetController = require("./controllers/ProjetController");
const TechnoController = require("./controllers/TechnoController");
const ClientController = require("./controllers/ClientController");

const router = express.Router();

// routes for projects

router.get("/projets", ProjetController.getAll);
router.get("/projet/:projectId", ProjetController.getOne);
router.put("/projet/:projectId", ProjetController.updateOne);
router.post("/projet", ProjetController.createOne);
router.delete("/projet/:projectId", ProjetController.deleteOne);

// routes for technos

router.get("/technos", TechnoController.getAll);
router.get("/techno/:technoId", TechnoController.getOne);
router.put("/techno/:technoId", TechnoController.updateOne);
router.delete("/techno/:technoId", TechnoController.deleteOne);

router.post("/projet/:projetId/techno", TechnoController.createOne);
router.get("/projet/:projetId/techno/:technoId", TechnoController.getOne);
router.get("/projet/:projetId/technos", TechnoController.getAllByProject);

// routes for clients

router.get("/clients", ClientController.getAll);
router.get("/client/:clientId", ClientController.getOne);
router.put("/client/:clientId", ClientController.updateOne);
router.delete("/client/:clientId", ClientController.deleteOne);

router.post("/projet/:projetId/client", ClientController.createOne);
router.get("/projet/:projetId/client/:clientId", ClientController.getOne);
router.get("/projet/:projetId/clients", ClientController.getAllByProject);

module.exports = router;
