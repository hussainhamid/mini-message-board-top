const db = require("../db/queries");

async function getMessages(req, res) {
  const messages = await db.getAllMessages();

  res.render("index", { messages });
}

async function openOneMessage(req, res) {
  const { id } = req.params;

  const message = await db.openMessage(id);

  res.render("openMessage", {
    username: message.rows[0].username,
    message: message.rows[0].message,
    added: message.rows[0].added,
  });
}

module.exports = { getMessages, openOneMessage };
