const { Router } = require("express");

const delRouter = Router();
const deleteController = require("../controllers/deleteController");

delRouter.get("/:id", deleteController);

module.exports = delRouter;
