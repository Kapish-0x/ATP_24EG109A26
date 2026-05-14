const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

//1. filter() only "Sci-Fi" movies
let r = movies.filter((m)=>m.genre==='Sci-Fi')
console.log(r)

//find() movie "Joker"
let f = movies.find((m)=>m.title==='Joker')
console.log(f)

//findIndex() of "Avengers"
let c = movies.findIndex((m)=>m.title==='Avengers')
console.log(c)

//map() to return:"Inception (8.8)"
let m = movies.filter(m=>m.title==='Inception').map(m=>`${m.title} (${m.rating})`)
console.log(m)

//reduce() to find average movie rating
let n = movies.length
let l = movies.reduce((acc,ele)=>acc+ele.rating,0)
let avg = l/n
console.log(avg)
