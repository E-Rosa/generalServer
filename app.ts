require("dotenv").config();
const express = require('express');
const app = express();
const taskManagerTasksRoute = require("./api/taskManager/routes/tasksRoute.js");
const classManagerStudentRoute: any = require("./api/classManager/routes/student.js");
const dailyJournalNotesRoute: any = require("./api/dailyJournal/routes/notesRoute.js");
const questSystemQuestsRoute: any = require("./api/questSystem/routes/quests.js");

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/taskManager/tasks", taskManagerTasksRoute);
app.use("/api/classManager/students", classManagerStudentRoute);
app.use("/api/dailyJournal/notes", dailyJournalNotesRoute);
app.use("/api/questSystem/quests", questSystemQuestsRoute);


app.all("*", (req: any, res: any) => {
    res.status(404).send("resource not found");
  });
  
const port = 5000;
app.listen(port, () => {
    console.log("Server is listening on port: " + port);
});

//tsc --module commonjs ./app.ts