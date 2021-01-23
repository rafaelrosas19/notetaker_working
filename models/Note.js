const Sequelize = require("sequelize");
const db = require("../config/database");

const Note = db.define("note", {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  contact_email: {
    type: Sequelize.STRING,
  },
});

module.exports = Note;
