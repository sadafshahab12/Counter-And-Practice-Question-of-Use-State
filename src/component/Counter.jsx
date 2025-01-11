
import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    function increase() {
      setCount((prevCount) => prevCount + 1);
    }
    function decrease() {
      setCount((prevCount) => prevCount - 1);
    }
  return (
    <div className='border-2 border-slate-800 p-4 rounded-lg bg-box1 bg-cover  bg-no-repeat'>
        <h1 className="md:text-2xl text-xl font-bold text-center pb-3">Counter App with React + Vite</h1>
      <div className="flex items-center gap-3 justify-center my-5">
        <div
          className="h-12 w-12 bg-slate-700 rounded-lg flex items-center justify-center cursor-pointer hover:bg-slate-600 transition-all duration-100 active:scale-95"
          onClick={decrease}
        >
          <button className=" text-white text-2xl "> - </button>
        </div>
        <div className="h-12 w-12 bg-rose-400 rounded-lg flex items-center justify-center ">
          <p>{count}</p>
        </div>
        <div
          className="h-12 w-12 bg-slate-700 rounded-lg flex items-center justify-center cursor-pointe  hover:bg-slate-600 transition-all duration-100 active:scale-95"
          onClick={increase}
        >
          <button className="text-white text-2xl"> + </button>
        </div>
      </div>
    </div>
  )
}

export default Counter
