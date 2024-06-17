# HappyNotebook


## Table of Contents
1. Project Description
2. Motivation for my Project
3. What I Learned
4. What I would do Differently 
5. User Story
6. Acceptance Criteria
7. Additional Requirements
8. Links for Project
9. Acknowledgements
10. Contact Information


## Project Description
The Happy Notebook is an application that generates simple notes and saves them for the user. It also has a feature to trash the note once it is completed or no longer needed.This application uses a db.json file on the back end to store and retrieve notes using the fs module.

The following HTML routes were already created:
GET /notes should return the notes.html file.
GET * should return the index.html file.
DELETE /api/notes/:id should receive a note id from the params, read the db.json

The following API routes were already created:
GET /api/notes should read the db.json file and return all saved notes as JSON.
POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. User needs to give each note a unique id when it's saved.


## What was my motivation?
I wanted to create a digital note taker that allows users to write down their daily task or todo list and cross it off when it is completed.
I wanted to make it a place where users can put all of their tasks where they put the title of the tasks and details of it as well.
I also wanted to add a feature that allows users to have a friendly access all around.
I wanted to make it easy to use and visually appealing.
I wanted to make it a place where users can feel happy and organized.
I wanted to make it a place where users can have a sense of accomplishment when they.complete their tasks.
I wanted to make it a place where users can have a sense of control over their tasks.
I wanted to make it a place where users can have a sense of relief when they complete their tasks.

## What did I learn?
I learned how to create a full-stack application using Node.js, Express.js, and JavaScript.
I learned how to create a database using JSON and how to interact with it using the fs module.
I learned how to create routes for the application using Express.js.
I learned how to use the GET, POST, and DELETE methods to interact with the database.
I learned how to use the req and res objects to interact with the client.
I learned how to use the params object to get the id of the note to be deleted.
I learned how to use the body-parser middleware to parse the request body.
I learned how to use the express.static middleware to serve static files.
I learned how to use the path module to get the path of the current directory.
I learned how to use the fs module to read and write to the database.
I learned how to use the JSON.parse and JSON.stringify methods to convert JSON data.
I learned how to use the GitHub platform to host the repository.
I learned how to use the Render platform to deploy the application.
I learned how to use the Chrome DevTools to debug the application.
I learned how to use the console.log method to debug the application.


## What would I do differently?
I would add more features to the application such as the ability to edit notes, add tags to notes
I would add a search feature to the application to allow users to search for specific notes.
I would add a feature to allow users to sort notes by date, title, or priority.
I would add a feature to allow users to set reminders for notes.
I would add a feature to allow users to share notes with others.
I would add a feature to allow users to print notes.
I would add a feature to allow users to export notes to a CSV file.
I would add a feature to allow users to import notes from a CSV file.
I would add a feature to allow users to add images to notes.
I would add a feature to allow users to add audio recordings to notes.
I would add a feature to allow users to add videos to notes.


## User Story
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete


## Acceptance Criteria
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
WHEN I click on the "New Note" button in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears


## Additional Requirements
The delete button feature was a bonus requirement that I included. 
The DELETE route to the application was used by the following guideline:

DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete.
 In order to delete a note, I had  to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.


## GitHub Link/ Render Link
[renderlink] https://happynotebook-1.onrender.com
[githublink] (https://github.com/Faiza-Haque/HappyNotebook)


## Acknowledgments 
- Tutors and TAs
- Thinh, Marissa, Anna
- My Instructor
- My Friends
Everyone listed above helped me complete this project. I would like to thank them for their support.


## Contact Information
Thanks for exploring my Repo!

If you would like to know more please feel free to contact me:
Email: faizahaque90@gmail.com
GitHub URL: https://github.com/Faiza-Haque
LinkedIn URL: https://www.linkedin.com/authwall 
