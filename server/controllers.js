const mods = require('./mods.js');

module.exports = {

  getAll: (req, res) => {
    console.log("Path controllers getAll success!");
    mods.getBooks(req.query).then((data) => {
      res.status(200).json(data.rows);
    });
  },

  postBook: (req, res) => {
    console.log("path controller postBook success!");
    mods.postBook(req.body).then((data) => {
      res.status(201).end();
    });
  },

  putRead: (req, res) => {
    mods.putRead(req).then((data) => {
      res.status(204).end();
    });
  },

  putDetails: (req, res) => {
    mods.putDetails(req).then((data) => {
      res.status(204).end();
    });
  },

  deleteBook: (req, res) => {
    mods.deleteBook(req).then((data) => {
      res.status(200).end();
    });
  },
}