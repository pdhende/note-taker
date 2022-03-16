const express = require('express');
const path = require('path');
const notes = require('./db/db.json');

const app = express();
const PORT = 3001;

// To serve static files from the public folder.
app.use(express.static('public'));

// Default route 
app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Route to serve the notes.html page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//Wildcard route to serve the index.html page
app.get('/*', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Route to get notes from the db.json file
app.get('/api/notes', (req, res) => res.json(notes));


app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)
);