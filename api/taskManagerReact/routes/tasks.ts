const tasksRouteExpress = require('express');
const tasksRouter = tasksRouteExpress.Router();
const {getAllTasks} = require("../repository/tasks.js");

tasksRouter.route('/')
.get((req: any, res: any)=>{
    console.log('/api/taskManagerReact/tasks was hit');
    getAllTasks().then((data:any)=>{res.send(data.rows)});
})
.put((req:any, res:any)=>{
    console.log(req.body)
})

module.exports=tasksRouter;