// Validates task title
// Title should not be empty and must contain at least 3 characters
function validateTitle(title) {

    // Check if title is empty
    if (!title) {
        return 'Title is Empty';
    }

    // Check minimum length of title
    if (title.length <= 3) {
        return 'Min 3 characters required';
    }

    return true;
}

// Validates task priority
// Allowed values: low, medium, high
function validatePriority(priority) {

    // Array containing valid priorities
    const prio = ['LOW', 'MEDIUM', 'HIGH'];

    // Convert input to uppercase and check if it exists
    let result = prio.includes(priority.toUpperCase());

    // Return error if priority is invalid
    if (result === false) {
        return 'Invalid priority';
    }

    return true;
}

// Validates due date
// Due date must be a future date
function validateDueDate(date) {

    // Convert input date into Date object
    let dueDate = new Date(date);

    // Get current date
    let today = new Date();

    // Check if due date is in the past
    if (dueDate <= today) {
        return 'Invalid due date';
    }

    return true;
}

// Exporting validation functions
export { validateTitle, validatePriority, validateDueDate };