const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "mini message board", messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form", { formTitle: "Form" });
});

indexRouter.post("/new", (req, res) => {
  messages.push({
    id: messages.length + 1,
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect("/");
});

indexRouter.get("/openMessage", (req, res) => {
  try {
    const message = req.query.id
      ? messages[req.query.id - 1]
      : messages[messages.length - 1];

    if (!message) {
      throw new Error("message not found");
    }
    res.render("openMessage", { message: message });
  } catch (err) {
    err.statusCode = 404;
    console.error("message not found");
  }
});

module.exports = indexRouter;
