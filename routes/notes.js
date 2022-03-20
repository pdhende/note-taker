const note = require('express').Router();
const uuid = require('uuid');
const noteValues = require('../db/db.json');
const fsFunctns = require('../helper/fsUtility');
const filePath = './db/db.json';

// Route to GET notes from the db.json file
note.get('/notes', (req, res) => {
    fsFunctns.readFromFile(filePath).then((data) => res.json(JSON.parse(data)));
  });

// Route to POST a note to the db.json file
note.post('/notes', (req, res) => {
    // console.log(req.body);

    const { title, text } = req.body;

    const newNote = {
        title,
        text,
        id: uuid.v4(),
    };  
    fsFunctns.updateNotes(filePath, newNote);
    res.json(`Your note has been saved!`);
});

// Route to DELETE a note to the db.json file
note.delete('/notes/:id', (req, res) => {
    
    const deleteId = req.params.id;
    fsFunctns.readFromFile(filePath)
    .then((data) => JSON.parse(data))
    .then((objArr) => {
        const newObjArr = objArr.filter((obj) => obj.id !== deleteId);
        fsFunctns.writeFile(filePath, newObjArr, 'DELETE').then(() => {
            console.log("Responding to client");
            res.json(`Your note has been deleted!`);
        });
    });
});

module.exports = note;