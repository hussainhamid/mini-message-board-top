const { Router } = require("express");

const openRouter = Router();
const { openOneMessage } = require("../controllers/renderController");

openRouter.get("/:id", openOneMessage);

module.exports = openRouter;
