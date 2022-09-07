const {taskManagerClient} = require('../db/db.js');
//Select function
async function SelectAll() {
  try {
    const res = await taskManagerClient.query("SELECT * FROM tasks");
    //console.log(res.rows);
    return res.rows;
  } catch (err) {
    console.log(err);
  }
}

SelectAll();

//Insert Function
async function InsertTask(taskTitle) {
  try {
    const res = await taskManagerClient.query(
      "INSERT INTO tasks (task_title) VALUES($1)",
      taskTitle
    );
    console.log(res.rows);
  } catch (err) {
    console.log(err);
  }
}

//Delete Function
async function deleteTask(taskTitle) {
  console.log('deleteTask');
  try {
    const res = await taskManagerClient.query(
      "DELETE FROM tasks WHERE task_title=$1",
      taskTitle
    );
  } catch (err) {
    console.log(err);
  }
}

module.exports = { SelectAll, InsertTask, deleteTask };
