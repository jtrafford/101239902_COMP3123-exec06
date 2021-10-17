const noteModel = require("../models/NotesModel.js");
const express = require("express");
const router = express.Router();

//TODO - Create a new Note

// let n1 = {
//   noteTitle: "My First Note",
//   nodeDescription: "This is my first note",
//   priority: 1,
//   dateAdded: new Date.now(),
// };

//http://mongoosejs.com/docs/api.html#document_Document-save
router.post("/notes", async (req, res) => {
  const note = new noteModel(req.body.content);

  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  }
  //TODO - Write your code here to save the note
  else {
    await note.save();
    res.send(note);
  }
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
router.get("/notes", async (req, res) => {
  // Validate request

  //TODO - Write your code here to returns all note
  try {
    const notes = await noteModel.find({});
    res.json(notes);
  } catch (err) {
    res.status(500).send(err);
  }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
router.get("/notes/:noteId", async (req, res) => {
  //TODO - Write your code here to return onlt one note using noteid
  try {
    const id = req.params.noteId;
    const notes = await noteModel.findOne({ _id: id });
    res.json(notes);
  } catch (error) {
    res.status(500).send(error);
  }
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
router.put("/notes/:noteId", async (req, res) => {
  // Validate request
  if (!req.body.content) {
    return res.status(400).send({
      message: "Note content can not be empty",
    });
  }
  //TODO - Write your code here to update the note using noteid
  else {
    await noteModel.findByIdAndUpdate(req.params.noteId, req.body.content);
    res.send("Updated successfully");
  }
});

//TODO - Delete a Note with noteId

//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
router.delete("/notes/:noteId", async (req, res) => {
  //TODO - Write your code here to delete the note using noteid
  try {
    await noteModel.findByIdAndDelete(req.params.noteId);
    res.send("note Id deleted");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
