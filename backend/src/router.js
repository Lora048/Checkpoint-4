const express = require("express");

const ProjetController = require("./controllers/ProjetController");
const TechnoController = require("./controllers/TechnoController");

const router = express.Router();

// routes for projects

router.get("/projets", ProjetController.getAll);
router.get("/projet/:projectId", ProjetController.getOne);
router.put("/projet/:projectId", ProjetController.updateOne);
router.post("/projet", ProjetController.createOne);
router.delete("/projet/:projectId", ProjetController.deleteOne);

// routes for projects

router.get("/technos", TechnoController.getAll);
router.get("/techno/:technoId", TechnoController.getOne);
router.put("/techno/:technoId", TechnoController.updateOne);
router.post("/techno", TechnoController.createOne);
router.delete("/techno/:technoId", TechnoController.deleteOne);

module.exports = router;
