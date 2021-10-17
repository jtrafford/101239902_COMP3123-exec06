const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated


const NoteSchema = new mongoose.Schema({
    noteTitle: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    noteDescription: {
      type: String,
      trim: false,
      lowercase: true,
    },
    priority: {
      type: Number,
      default: 0.0,
      validate(value) {
        if (value < 0.0) throw new Error("Negative Salary aren't values");
      },
    },
    dateAdded: {
      type: Date,
      default: Date.now,
    },
    dateUpdated: {
      type: Date,
      default: Date.now,
    },
  });
  
  const Note = mongoose.model("Note", NoteSchema);
  module.exports = Note;