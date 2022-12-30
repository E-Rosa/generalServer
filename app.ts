require("dotenv").config();
const express = require('express');
const app = express();
const taskManagerTasksRoute = require("./api/taskManager/routes/tasksRoute.js");
const classManagerStudentRoute: any = require("./api/classManager/routes/student.js");
const classManagerClassRoute: any = require("./api/classManager/routes/class.js");
const classManagerPaymentRoute: any = require("./api/classManager/routes/payment.js");
const dailyJournalNotesRoute: any = require("./api/dailyJournal/routes/notesRoute.js");
const questSystemQuestsRoute: any = require("./api/questSystem/routes/quests.js");
const taskManagerReactTasksRoute: any = require("./api/taskManagerReact/routes/tasks.js");

app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Allows any origin to request to this API
app.use((req: any, res:any , next:any) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/api/taskManager/tasks", taskManagerTasksRoute);
app.use("/api/classManager/students", classManagerStudentRoute);
app.use("/api/classManager/classes", classManagerClassRoute);
app.use("/api/classManager/payments", classManagerPaymentRoute);
app.use("/api/dailyJournal/notes", dailyJournalNotesRoute);
app.use("/api/questSystem/quests", questSystemQuestsRoute);
app.use("/api/taskManagerReact/tasks", taskManagerReactTasksRoute);

app.all("*", (req: any, res: any) => {
    res.status(404).send("resource not found");
  });
  
const port = 5000;
app.listen(port, () => {
    console.log("Server is listening on port: " + port);
});

//tsc --module commonjs ./app.ts