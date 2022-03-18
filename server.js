const express = require('express');
const path = require('path');
// const noteValues = require('./db/db.json');
const api = require('./routes/notes');

const app = express();
const PORT = process.env.PORT || 3001;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', api);

// To serve static files from the public folder.
app.use(express.static('public'));

// Route to serve the notes.html page /public/
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//Wildcard route to serve the index.html page
app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)
);