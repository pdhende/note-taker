const note = require('express').Router();
const uuid = require('uuid');
const noteValues = require('../db/db.json');
const fsFunctns = require('../helper/fsUtility');
const filePath = './db/db.json';

// Route to GET notes from the db.json file
note.get('/notes', (req, res) => res.json(noteValues));

// Rout to POST a note to the db.json file
note.post('/notes', (req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    const newNote = {
        title,
        text,
        noteId: uuid.v4(),
    };  
    console.log(newNote);
    // console.log("This is filepath:" +filePath);
    fsFunctns.updateNotes(filePath, newNote);
    res.json(`Your note has been saved!`);
});

// const randomVal = `The random value is ${uuid.v4()}`;
// console.log(randomVal);

module.exports = note;