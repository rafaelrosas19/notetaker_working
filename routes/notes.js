const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Note = require("../models/Note");

router.get("/", (req, res) =>
  Note.findAll()
    .then((notes) => {
      res.render("notes", {
        notes,
      });
    })
    .catch((err) => console.log(err))
);

// Display add note form
router.get("/add", (req, res) => res.render("add"));

router.post("/add", (req, res) => {
  let { title, description, contact_email } = req.body;
  let errors = [];

  // Validate fields
  if (!title) {
    errors.push({ text: "Please add a title" });
  }
  if (!description) {
    errors.push({ text: "Please add a description" });
  }
  if (!contact_email) {
    errors.push({ text: "Please add a contact email" });
  }

  // Check for errors

  if (errors.length > 0) {
    res.render("add", {
      errors,
      title,
      description,
      contact_email,
    });
  } else {
    Note.create({
      title,
      description,
      contact_email,
    })
      .then((note) => res.redirect("/notes"))
      .catch((err) => console.log(err));
  }

  // Insert into table
});

module.exports = router;
