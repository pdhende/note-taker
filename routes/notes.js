const note = require('express').Router();
const uuid = require('uuid');
const noteValues = require('../db/db.json');

// Route to GET notes from the db.json file
note.get('/notes', (req, res) => res.json(noteValues));

// Rout to POST a note to the db.json file
// app.post('/notes')

const randomVal = `The random value is ${uuid.v4()}`;
console.log(randomVal);

module.exports = note;