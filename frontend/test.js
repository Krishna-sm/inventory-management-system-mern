 const items = [
  { name: "pizza", price: 50, _id: "66697d9ae60da9ba990c63a8" },
  { name: "pizza2", price: 70, _id: "66697d9ae60da9ba990c63a9" },
];


const actual_price = items.reduce((a,cur)=>{
   return a.price+cur.price
})


console.log(actual_price);