import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <h1 className={`text-sky-400  text-center text-3xl font-bold mb-8 p-4 ${color}`}>
        CLICK THE COLOR-BUTTONS <span className="underline">&lt;BELOW&gt;</span> TO GET RESPECTIVE BACKGROUND COLOR
      </h1>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-4 py-4 rounded-3xl'>
            <button
              onClick={() => setColor("black")}
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Black
            </button>
            <button
              onClick={() => setColor("yellow")}
              type="button"
              className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("red")}
              type="button"
              className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              type="button"
              className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              type="button"
              className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Blue
            </button>
            <button
              onClick={() => setColor("gray")}
              type="button"
              className="rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
              Gray
            </button>
            <button
              onClick={() => setColor("purple")}
              type="button"
              className="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
            >
              Purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
