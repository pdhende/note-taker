const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// To serve static files from the public folder.
app.use(express.static('public'));

// Route to serve the notes.html page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//WIldcard route to serve the index.html page
app.get('/*', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () => 
    console.log(`App listening at http://localhost:${PORT}`)
);