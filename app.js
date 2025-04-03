const express = require("express");
const app = express();
const path = require("node:path");
const PORT = 6969;

const renderRouter = require("./router/getUsernamesRouter");
const formRouter = require("./router/formRouter");
const openRouter = require("./router/openMessageRouter");
const delRouter = require("./router/deleteRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", renderRouter);
app.use("/new", formRouter);
app.use("/openMessage", openRouter);
app.use("/deleteMessage", delRouter);

app.use((req, res) => {
  res.render("error.ejs");
});

app.listen(PORT, () => {
  console.log(`listening to ${PORT}`);
});
