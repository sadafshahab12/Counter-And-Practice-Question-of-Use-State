import React from "react";
import { useState } from "react";

const FormInput = () => {
  const [inputText, setInputText] = useState(""); // State to hold the current input text
  const [saveText, setSaveText] = useState(""); // State to hold the saved text for preview
  const [changing, setChanging] = useState(false);
  function saving(e) {
    e.preventDefault();
    setChanging(true);
    setTimeout(() => {
      setSaveText(inputText);
    }, 1000);
    setInputText("");
  }
  setTimeout(() => {
    setChanging(false);
  }, 2800);

  return (
    <div className="border-2 border-slate-800 p-4 rounded-lg lg:col-span-2 col-span-1 bg-box2 bg-cover bg-no-repeat">
      <h1 className="md:text-2xl text-xl font-bold pb-5 text-white text-center">
        Form Input Saving
      </h1>
      <form action="" className=" space-y-4 ">
        <input
          type="text"
          placeholder="Write Something..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="border border-slate-800 py-2 px-4 rounded-md w-full  "
        />

        <button
          onClick={saving}
          className={`bg-rose-400 px-5 text-sm py-2 rounded-md cursor-pointer ${
            changing ? "text-gray-500" : "text-slate-800"
          }`}
        >
          {changing ? "Adding..." : "Submit"}
        </button>
      </form>
      <div>
        <p className="font-semibold text-lg py-4  text-white ">
          Preview of Form Text
        </p>
        <p className="w-full border-2 border-slate-700 bg-gray-300 inline-block py-2 px-4 h-20 rounded-lg ">
          {saveText}
        </p>
      </div>
    </div>
  );
};

export default FormInput;
