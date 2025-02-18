const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleString("en-US"),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleString("en-US"),
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
    added: new Date().toLocaleString("hIN"),
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
    res.status(404).send("Not found");
    console.error("message not found");
  }
});

module.exports = indexRouter;
