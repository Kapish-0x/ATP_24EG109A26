// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
    if(!title) {
      return 'Title is Empty'
    }
    if(title.length<=3) {
      return 'Min 3 characters required'
    }
    return true
}
                      
// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
  const prio=['LOW','MEDIUM','HIGH']
  let result = prio.includes(prio)
  if(result === false) {
    return 'Invalid priority'
  }
  return true
} 
                      
// 3. Validate due date (must be future date)
function validateDueDate(date) {
  let dueDate = new Date('2026-02-24')
  let today = new Date()
  if(dueDate > today) {
    return 'Invalid due date'
  }
  return true
}

export{validateTitle,validatePriority,validateDueDate}


