const express = require("express");
const app = express();
const path = require("node:path");
const indexRouter = require("./router/indexRouter");
const PORT = 6969;
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`listening to ${PORT}`);
});
