const express = require('express');
const path = require('path');
const noteValues = require('./db/db.json');

const app = express();
const PORT = process.env.PORT || 3001;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// To serve static files from the public folder.
app.use(express.static('public'));

// // Default route 
// app.get('/', (req, res) => 
//     res.sendFile(path.join(__dirname, '/public/index.html'))
// );

// Route to serve the notes.html page /public/
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, 'notes.html'))
);


// Route to get notes from the db.json file
app.get('/api/notes', (req, res) => res.json(noteValues));

//Wildcard route to serve the index.html page
app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)
);