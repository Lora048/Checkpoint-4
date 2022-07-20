const express = require("express");

const ProjetController = require("./controllers/ProjetController");

const router = express.Router();

router.get("/projets", ProjetController.getAll);
router.get("/projet/:projectId", ProjetController.getOne);
router.put("/projet/:projectId", ProjetController.updateOne);
router.post("/projet", ProjetController.createOne);
router.delete("/projet/:projectId", ProjetController.deleteOne);

module.exports = router;
