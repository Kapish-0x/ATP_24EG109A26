// Object containing user details
let user = {
    name: 'Ravi',
    city: 'Hyderabad',
};

// Creating a new object using spread operator and adding age property
let copyUser = { ...user, age: 25 };

// Displaying original object
console.log('Original Obj', user);

// Displaying copied object with additional property
console.log('Copy: ', copyUser);