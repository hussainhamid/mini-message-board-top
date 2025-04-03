const { Router } = require("express");

const renderRouter = Router();
const { getMessages } = require("../controllers/renderController");

renderRouter.get("/", getMessages);

module.exports = renderRouter;
