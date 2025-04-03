const db = require("../db/queries");

async function createMessageGet(req, res) {
  await res.render("form");
}

async function createMessagePost(req, res) {
  const { username, message } = req.body;

  await db.createMessages(username, message);

  res.redirect("/");
}

module.exports = {
  createMessageGet,
  createMessagePost,
};
