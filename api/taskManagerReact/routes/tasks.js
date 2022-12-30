"use strict";
const tasksRouteExpress = require('express');
const tasksRouter = tasksRouteExpress.Router();
const { getAllTasks } = require("../repository/tasks.js");
tasksRouter.route('/')
    .get((req, res) => {
    console.log('/api/taskManagerReact/tasks was hit');
    getAllTasks().then((data) => { res.send(data.rows); });
})
    .put((req, res) => {
    console.log(req.body);
});
module.exports = tasksRouter;
