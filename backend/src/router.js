const express = require("express");

const ProjetController = require("./controllers/ProjetController");
const TechnoController = require("./controllers/TechnoController");
const ClientController = require("./controllers/ClientController");
const ImageController = require("./controllers/ImageController");
const UserController = require("./controllers/UsersController");

// const { authorization, sessionControl } = require("./middlewares/auth");

const router = express.Router();

router.post("/auth/register", UserController.createOne);
router.post("/auth/login", UserController.login);
router.get(
  "/auth/logout",
  // authorization,
  UserController.logout
);
router.get(
  "/auth/sessionControl"
  // authorization,
  // sessionControl
);
router.post("/auth/login", UserController.login);

// routes for users

router.get("/users", UserController.getAll);
router.get("/users/:id", UserController.getOne);
router.put(
  "/users/",
  // authorization,
  UserController.updateOne
);
router.put(
  "/users/:id",
  // authorization,
  UserController.updateOne
);
router.delete("/users/:id", UserController.deleteOne);

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

// routes for images

router.get("/images", ImageController.getAll);
router.get("/image/:imageId", ImageController.getOne);
router.put("/image/:imageId", ImageController.updateOne);
router.delete("/image/:imageId", ImageController.deleteOne);

router.post("/projet/:projetId/image", ImageController.createOne);
router.get("/projet/:projetId/image/:imageId", ImageController.getOne);
router.get("/projet/:projetId/images", ImageController.getAllByProject);

module.exports = router;
