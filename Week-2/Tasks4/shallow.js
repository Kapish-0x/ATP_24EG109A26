const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };
let copy = {...user,name:'Kaps'}
copy.preferences.theme="Light"
console.log(user)
console.log(copy)