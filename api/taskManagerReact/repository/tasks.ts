const database = require('../configurations/db.js');

export function getAllTasks(): Promise<object[]>{
    return database.client.query("SELECT * FROM tasks");
}

export function updateTask(text: string, id: string): string{
    let str: string = ''
    database.client.query("UPDATE tasks SET text=$1 WHERE id=$2", [text, id]).
    then((data: any)=>{
        console.log(data)
        str =  data.toString();
    })
    .catch((err: any)=>{
        str = err.toString()
    })
    return str
}