// backend set up
const express = require("express");
const app = express();
const notes = require("./routes/note");
const path = require("path")

// every line except for 10 and 12 are middleware functions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api/notes", notes);
const PORT = process.env.PORT || 3000;
// line 14-18 is used only when you don't have express.static but since you have it on line you don't need the following codes
// app.get("/", (req,res)=>{
//     console.log ("welcome to Homepage");
//     //res.send("Hello Faiza");
//     res.sendFile(path.join(__dirname,"/public/index.html"));
// })

app.listen(PORT, () => {
    console.log(`listening on http://127.0.0.1:${PORT}`)


});
