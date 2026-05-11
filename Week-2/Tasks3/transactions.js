const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

//filter() all credit transactions
let r = transactions.filter((t)=>t.type==='credit')
console.log(r)

//find() the first debit transaction
let f = transactions.find((t)=>t.type==='debit')
console.log(f)

//findIndex() of transaction with amount 10000
let c = transactions.findIndex((t)=>t.amount===10000)
console.log(c)

//map() to extract only transaction amounts
let m = transactions.map((t)=>t.amount)
console.log(m)



