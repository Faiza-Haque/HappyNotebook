const { readFile } = require("node:fs/promises");
const express = require("express");
const fs = require("fs");
const note = express.Router();
const file = "./db/db.json";
let data = "";

note.get("/", async (req, res) => {
    data = await getData();

    res.json(JSON.parse(data));
});
note.post("/", (req, res) => {
    let newNote = req.body;
    const newData = JSON.parse(data);
    newNote.id = `${newData.length}`;// remove this later
    newData.push(newNote);
    data = JSON.stringify(newData);
    saveNewNote(data);
    //console.log(message)
    res.json(newNote);
})
const getData = async () => {
    const data = await readFile(file, { encoding: "utf8" });
    //console.log (data);
    return data;
}
const saveNewNote = async (data) => {
    await fs.writeFile(file, data, error => {
        if (error) {
            console.log("error occurs while writing file")
            //return "error occurs while writing file";
        }
        //return "new is saved"
        console.log("new data is saved")
    })
}
module.exports = note;