const { Router } = require("express");

const formRouter = Router();

const {
  createMessageGet,
  createMessagePost,
} = require("../controllers/createMessageContoller");

formRouter.get("/", createMessageGet);

formRouter.post("/", createMessagePost);

module.exports = formRouter;
