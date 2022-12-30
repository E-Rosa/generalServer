"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.getAllTasks = void 0;
const database = require('../configurations/db.js');
function getAllTasks() {
    return database.client.query("SELECT * FROM tasks");
}
exports.getAllTasks = getAllTasks;
function updateTask(text, id) {
    let str = '';
    database.client.query("UPDATE tasks SET text=$1 WHERE id=$2", [text, id]).
        then((data) => {
        console.log(data);
        str = data.toString();
    })
        .catch((err) => {
        str = err.toString();
    });
    return str;
}
exports.updateTask = updateTask;
