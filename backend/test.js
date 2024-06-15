const  orders= [
    {
      "items": [
        {
          "price": 1
        },
        {
          "price": 2
        }
      ]
    },
    {
      "items": [
        {
          "price": 50
        },
        {
          "price": 70
        }
      ]
    },
    {
      "items": [
        {
          "price": 60
        },
        {
          "price": 80
        }
      ]
    },
    {
      "items": [
        {
          "price": 80
        }
      ]
    }
  ]

  const arr = orders.map((cur)=>{
    // console.log();
    return [...cur.items.map((c)=>c.price)]
  })

  console.log(arr.flat(2).reduce((a,c)=>a+c));