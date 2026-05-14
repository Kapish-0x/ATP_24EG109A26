 import {validateTitle,validatePriority,validateDueDate} from './validator.js';
let tasks = [];
// 1. Add new task
export function addTask(title, priority, dueDate) {
// Validate using imported functions
if(!validateTitle(),!validatePriority(),!validateDueDate()) {
    return 'Invalid Task'
}
// If valid, add to tasks array
  tasks.push({title,priority,dueDate})
// Return success/error message
}
// 2. Get all tasks
export function getAllTasks() {
// Return all tasks
return tasks
}
// 3. Mark task as complete
function completeTask(taskId) {
// Find task and mark as complete
}

