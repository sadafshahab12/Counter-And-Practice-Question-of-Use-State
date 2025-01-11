import React, { useState } from "react";
import { BiMoon } from "react-icons/bi";
import { IoSunnyOutline } from "react-icons/io5";

const Mode = () => {
  const [mode, setMode] = useState("light");
  function toggleMode() {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }

  return (
    <div className="border-2 border-slate-800 p-4 rounded-lg bg-box3 bg-cover bg-no-repeat">
      <h1 className="md:text-2xl text-xl font-bold text-center pb-3">
        Toggle Dark Mode Light Mode
      </h1>
      <div className=" flex items-center gap-4 justify-center my-3 ">
        <button className="button" onClick={toggleMode}>
          {mode === "light" ? (
            <IoSunnyOutline className="w-10 h-10 bg-slate-300 p-2 rounded-md cursor-pointer" />
          ) : (
            <BiMoon className="w-10 h-10 bg-slate-300 p-2 rounded-md cursor-pointer" />
          )}
        </button>
        <div
          className={`box h-20 w-40 border border-slate-700 rounded-lg transition-all duration-300 ${
            mode === "light" ? "bg-white" : "bg-slate-800"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Mode;
