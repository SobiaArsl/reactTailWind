import React from 'react'
import BookTable from './Backpage'
const BookData=[
  {
   id: 1,
    book:'Science',
    class: "all",
    price: "ten",
  },
    {id:2,
       book:'English',
       class:'all',
       price: 200,
      },
       {id:3,
         book:'Math',
         class:10,
         price:200,
        },
        {id:4,
          book:'Economics',
          class:'all',
          price: 200,
         },
          {id:5,
            book:'Science',
            class:10,
            price:200,
           },

           {id:6,
            book:'Science',
            class:'all',
            price: 200,
           },
            {id:7,
              book:'Science',
              class:10,
              price:200,
             },

             {id:9,
              book:'Science',
              class:'all',
              price: 200,
             },
              {id:10,
                book:'Science',
                class:10,
                price:200,
               },

       
               

   
]


export default function Work() {
  console.log("BookShop")
  return (
    <div>
 <h3 className=" wrp text-[40px] ">Book Lab</h3>

<BookTable bookData={BookData} />

<div className="mt-[200px]  "></div>
    </div>
  );
}
