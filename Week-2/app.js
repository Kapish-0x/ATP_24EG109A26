import { addTask, getAllTasks } from './tasks.js';

// Adding tasks with priority and due date
addTask('eating', 'high', '2026-02-25');
addTask('drinking', 'low', '2026-02-25');

// Retrieving all tasks
const tasks = getAllTasks();

// Displaying all tasks
console.log(tasks);