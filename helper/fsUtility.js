const fs = require('fs');
const util = require('util');

// Function to read notes from the db.json file
const readFromFile = util.promisify(fs.readFile);

//Function to write notes(data) to db.json file
const writeFile = (filePath, noteVal, methodVal) => {
    const note = JSON.stringify(noteVal, null, 4);
    fs.writeFile(filePath, note, (err) => {
        if(err) {
            console.error(err);
        }
        else {
            if(methodVal === 'POST') {
                console.info(`The note has been saved!`);
            }
            else{
                console.info(`The note has been removed!`);
            }
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
            // console.log(allNotes);
            allNotes.push(noteVal);
            console.log(allNotes);
            writeFile(filePath, allNotes, 'POST');
        }
    });
}

module.exports = { readFromFile, writeFile, updateNotes };