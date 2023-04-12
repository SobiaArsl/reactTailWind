import React from "react";
import MyTable from "./Table";
// import MyTable from "./Table";
const TableData = [
  {
    id: 1,
    name: "iPad1",
    age: "0",
    color: " red",
    categery: "tablet",
    price: "400$",
  },
  {
    id: 2,
    name: "iPad2",
    age: 0,
    color: " yellow",
    categery: "tablet",
    price: "400$",
  },
  {
    id: 3,
    name: "iPad3",
    age: 0,
    color: " gray",
    categery: "tablet",
    price: "400$",
  },
  {
    id: 4,
    name: "iPad4",
    age: 0,
    color: " white",
    categery: "tablet",
    price: "400$",
  },
  {
    id: 5,
    name: "iPad5",
    age: 0,
    color: " gray",
    categery: "tablet",
    price: "400$",
  },
  {
    id: 6,
    name: "iPad6",
    age: 0,
    color: " blue",
    categery: "tablet",
    price: "400$",
  },
  {
    id: 7,
    name: "iPad7",
    age: 0,
    color: " gray",
    categery: "tablet",
    price: "400$",
  },
  {
    id: 8,
    name: "Mack Book",
    age: 'new',
    color: " pink",
    categery: "tablet",
    price: "400$",
  },
]

export default function Home() {
  console.log("hello world");
  return (
    <div>
      <h2 className="text-[40px]">Table Lab</h2>

      <MyTable tableData={TableData} />

      <div className="mt-[200px]  bg-green"></div>
    </div>
  );
}
