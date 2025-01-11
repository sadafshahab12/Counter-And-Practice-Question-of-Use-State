import React, { useState } from "react";

const ArrayState = () => {
  const [list, setList] = useState("");
  const [item, setItems] = useState([]); // To store the array of items

  function setItemsList(e) {
    e.preventDefault();

    setItems((prevItem) => [...prevItem, list]);
    setList("");
  }
  return (
    <div className="border-2 border-slate-800 p-4 rounded-lg lg:col-span-1 sm:col-span-2 col-span-1 bg-box4 bg-cover bg-no-repeat">
      <h1 className="md:text-2xl text-xl font-bold pb-5 text-white">
        Array State
      </h1>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Add Items"
          className="border border-slate-800 py-2 px-4 rounded-md w-full  "
          value={list}
          onChange={(e) => setList(e.target.value)}
        />
        <button
          className="bg-blue-500 text-sm px-5 py-2 rounded-md cursor-pointer w-full"
          onClick={setItemsList}
        >
          Add
        </button>
      </div>
      <div>
        <h4 className="font-semibold text-lg py-4 text-white">
          Items in Array
        </h4>
        <ul className="w-full border-2 border-slate-700 bg-gray-300 inline-block py-2 px-8 min-h-20 rounded-lg ">
          {item.map((items, index) => {
            return (
              <li className="list-disc" key={index}>
                {items}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ArrayState;
