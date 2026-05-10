// Object containing user details and preferences
const user = {
  id: 101,
  name: "Ravi",

  // Nested object for user preferences
  preferences: {
    theme: "dark",
    language: "en",
  },
};

// Creating a shallow copy of the user object and updating the name
let copy = { ...user, name: "Kaps" };

// Modifying nested object property in copied object
copy.preferences.theme = "Light";

// Displaying original object
console.log(user);

// Displaying copied object
console.log(copy);