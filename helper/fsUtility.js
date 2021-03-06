const fs = require('fs');
const util = require('util');

// Function to read notes from the db.json file
const readFromFile = util.promisify(fs.readFile);

//Function to write notes(data) to db.json file
const writeToFile = util.promisify(fs.writeFile);

const writeFile = (filePath, noteVal, methodVal) => {
    const note = JSON.stringify(noteVal, null, 4);
    return writeToFile(filePath, note).then(() => {
        if(methodVal === 'POST') {
            return console.info(`The note has been saved!`);
        }
        else{
            return console.info(`The note has been removed!`);
        }
    });
};


// Function to add notes to the db.json file using POST method
const updateNotes = (filePath, noteVal) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err) {
            console.error(err);
        }
        else {
            const allNotes = JSON.parse(data);
            allNotes.push(noteVal);
            writeFile(filePath, allNotes, 'POST');
        }
    });
}

module.exports = { readFromFile, writeFile, updateNotes };