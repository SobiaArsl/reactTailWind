import React from "react";
// import Home from "./Home"

const MyTable = (props) => {
  const tableData = props.tableData;
  console.log(tableData);
  // const rows=[
  //   {id:1, name:"iPad1",  color:" gry",categery:"tablet", price:"400$"},
  // ];
  return (
    <div className="wrp overflow-x-auto">
      <table className="w-full text-sn text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-600 uppercase   bg-gray-500 dark:bg-white-500 dark:text-gray-500">
          <tr className="text-black">
          <th scope="col" className="px-6 py-4">
              {" "}
               id{" "}
            </th>
            <th scope="col" className="px-6 py-4">
              {" "}
              Product name{" "}
            </th>
            <th scope="col" className="px-6 py-4">
              {" "}
               age{" "}
            </th>
            <th scope="col" className="px-6 py-3">
              {" "}
              Color{" "}
            </th>
            <th scope="col" className="px-6 py-3">
              {" "}
              Category{" "}
            </th>
            <th scope="col" className="px-6 py-3">
              {" "}
              Price{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => {
            console.log({ item });
            return (
              <tr
                key={item.id}
                className="bg-white border-b dark:bg-gry-800 dark:border-gray-800"
              >
                <th
                  scope="row"
                //  key= {item.name}
                  className="px-6 py-4 font-medium text-gray-800 ">
                  {item.id}
                </th>
                <td className="px-6 py-4"> {item.name}</td>
                <td className="px-6 py-4">{item.age}</td>
                <td className="px-6 py-4">{item.color}</td>
                <td className="px-6 py-4">{item.categery}</td>
                <td className="px-6 py-4">{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;
