
const { readFile } = require("node:fs/promises"); // Import the 'readFile' function from 'fs/promises' module for reading files asynchronously
const express = require("express"); // Import the 'express' module
const fs = require("fs"); // Import the 'fs' (file system) module for interacting with the file system
const note = express.Router(); // Create a new router object
const file = "./db/db.json"; // Define the path to the JSON file that stores the data
let data = ""; // Initialize a variable to hold the data

// GET request handler for the root path of the 'note' router
note.get("/", async (req, res) => {
    data = await getData(); // Fetch data from the file

    res.json(JSON.parse(data));
});// Send the parsed data as a JSON response

// POST request handler for the root path of the 'note' router
note.post("/", (req, res) => {
    let newNote = req.body; // Get the new note data from the request body
    const newData = JSON.parse(data); // Parse the current data
    newNote.id = getNewId(); // Assign a new unique ID to the new note
    newData.push(newNote); // Add the new note to the data
    data = JSON.stringify(newData); // Convert the updated data back to a JSON string
    saveNewNote(data); // Save the updated data to the file
    res.json(newNote); // Send the new note as a JSON response
});

// DELETE request handler for the root path of the 'note' router
note.delete("/:id", (req, res) => {
    const currentData = JSON.parse(data); // Parse the current data
    const id = req.params.id; // Get the ID of the note to be deleted from the request parameters
    const newData = currentData.filter(data => data.id !== id); // Filter out the note with the specified ID
    data = JSON.stringify(newData); // Convert the updated data back to a JSON string
    saveNewNote(data); // Save the updated data to the file
    res.json("data is removed"); // Send a confirmation response

})
// This function reads data from the file
const getData = async () => {
    const data = await readFile(file, { encoding: "utf8" }); // Read the file content as a UTF-8 encoded string
    //console.log (data);
    return data; // Return the file content
}
// Function to save data to the file
const saveNewNote = async (data) => {
    await fs.writeFile(file, data, error => { // Write the data to the file
        if (error) {
            console.log("error occurs while writing file") // Log an error message if writing fails
            //return "error occurs while writing file";
        }
        //return "new is saved"
        console.log("new data is saved") // Log a success message if writing succeeds
    })
}
// Function to generate a new unique ID
const getNewId = () => {
    const id = Math.floor((Math.random() * 9000) + 1000); // Generate a random number between 1000 and 9999
    return `${id}`; // Return the ID as a string
}
module.exports = note; // Export the 'note' router module