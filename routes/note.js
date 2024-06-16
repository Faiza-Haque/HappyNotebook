
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
    newNote.id = getNewId();
    newData.push(newNote);
    data = JSON.stringify(newData);
    saveNewNote(data);
    //console.log(message)
    res.json(newNote);
});
note.delete("/:id", (req, res) => {
    const currentData = JSON.parse(data);
    const id = req.params.id;
    const newData = currentData.filter(data => data.id !== id);
    data = JSON.stringify(newData);
    saveNewNote(data);
    res.json("data is removed");

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
const getNewId = () => {
    const id = Math.floor((Math.random()*9000)+1000);
    return `${id}`;
}
module.exports = note;