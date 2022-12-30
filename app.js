require("dotenv").config();
var express = require('express');
var app = express();
var taskManagerTasksRoute = require("./api/taskManager/routes/tasksRoute.js");
var classManagerStudentRoute = require("./api/classManager/routes/student.js");
var classManagerClassRoute = require("./api/classManager/routes/class.js");
var classManagerPaymentRoute = require("./api/classManager/routes/payment.js");
var dailyJournalNotesRoute = require("./api/dailyJournal/routes/notesRoute.js");
var questSystemQuestsRoute = require("./api/questSystem/routes/quests.js");
var taskManagerReactTasksRoute = require("./api/taskManagerReact/routes/tasks.js");
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Allows any origin to request to this API
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/api/taskManager/tasks", taskManagerTasksRoute);
app.use("/api/classManager/students", classManagerStudentRoute);
app.use("/api/classManager/classes", classManagerClassRoute);
app.use("/api/classManager/payments", classManagerPaymentRoute);
app.use("/api/dailyJournal/notes", dailyJournalNotesRoute);
app.use("/api/questSystem/quests", questSystemQuestsRoute);
app.use("/api/taskManagerReact/tasks", taskManagerReactTasksRoute);
app.all("*", function (req, res) {
    res.status(404).send("resource not found");
});
var port = 5000;
app.listen(port, function () {
    console.log("Server is listening on port: " + port);
});
//tsc --module commonjs ./app.ts
