import {addTask,getAllTasks} from './tasks.js'

//add a task
addTask('eating','high','2026-02-25')
addTask('drinking','low','2026-02-25')
const tasks = getAllTasks()
console.log(tasks)