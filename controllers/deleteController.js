const db = require("../db/queries");

async function deleteController(req, res) {
  const { id } = req.params;

  await db.deleteMessage(id);

  res.redirect("/");
}

module.exports = deleteController;
