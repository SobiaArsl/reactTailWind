import React from 'react'



const BookTable = (props) => {
    const bookData = props.bookData;
    console.log(bookData);

return(
    <div  className="wrp overflow-x-auto">
        <table className="w-full text-sn text-left text-gray-500 dark:text-gray-400">
            <thead className='text-s text-yellow-600 uppercase  bg-pink-600'>
                <tr>
            <th scope="col" className="px-6 py-4">
              {" "}
               id{" "}
            </th>
            <th scope="col" className="px-6 py-4">
              {" "}
              Book name{" "}
            </th>
            <th scope="col" className="px-6 py-4">
              {" "}
               Class{" "}
            </th>
           <th scope="col" className="px-6 py-3">
              {" "}
              Price{" "}
            </th>
          </tr>
            </thead>
            <tbody>
          {bookData.map((item, index) => {
            // console.log({ item });
            return (
                <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-400 dark:border-gray-800"
              >
                <th
                  scope="row"
                //  key= {item.name}
                  className="px-7 py-4 font-medium text-gray-800 ">
                  {item.id}
                </th>
                <td className="px-6 py-4"> {item.book}</td>
                <td className="px-6 py-4">{item.class}</td>
                <td className="px-6 py-4">{item.price}</td>
              </tr>
            );
          })}
        </tbody>
        </table>
    </div>
)

}





export default BookTable;
  

