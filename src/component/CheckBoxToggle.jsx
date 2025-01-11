import React, { useState } from "react";

const CheckBoxToggle = () => {
  const [checked, setChecked] = useState(true);
  const handleToggle = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div className="border-2 border-slate-800 p-4 rounded-lg text-center bg-box5 bg-cover bg-no-repeat grid content-center">
      <h1 className="md:text-2xl text-xl font-bold text-center  pb-3 text-white">
        Checkbox Toggle
      </h1>
      <div className="inline-flex justify-center items-center gap-4 bg-gray-200 py-2 px-4 rounded-lg ">
        <label htmlFor="coding" className="cursor-pointer">
          Coding
        </label>
        <input
          type="checkbox"
          name="coding"
          id="coding"
          checked={checked}
          onChange={handleToggle}
        />
      </div>
      <p className="text-sm py-3 text-gray-200">
        {checked ? "Checked" : "UnChecked"}
      </p>
    </div>
  );
};

export default CheckBoxToggle;
