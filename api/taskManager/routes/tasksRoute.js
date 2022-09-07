const expressTasks = require('express');
const { builtinModules } = require('module');
const tasksRouter = expressTasks.Router();
const db = require('../controllers/tasksController.js');


tasksRouter.route('/').post((req, res) => {
    console.log(req.body.task_title);
    db.InsertTask([req.body.task_title]);
}).get((req, res) => {
    //db.SelectAll();
    db.SelectAll().then((data) => {
      res.json(data);
    });
  });
  
tasksRouter.delete("/:task_title", (req, res) => {
    console.log(req.params);
    console.log('api hit');
db.deleteTask([req.params.task_title]);
});
  
module.exports = tasksRouter;
  
  