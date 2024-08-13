import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("olive"); // Initial color

  return (
    <div className="w-full h-screen w-screen" style={{ backgroundColor: color }}>
      
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
      <button onClick={() => setColor("red")} className="bg-red-500 text-white p-2 m-2 rounded">
        Red
      </button>
      <button onClick={() => setColor("green")} className="bg-green-500 text-white p-2 m-2 rounded">
        Green
      </button>
      <button onClick={() => setColor("blue")} className="bg-blue-500 text-white p-2 m-2 rounded">
        Blue
      </button>
      <button onClick={() => setColor("yellow")} className="bg-yellow-500 text-black p-2 m-2 rounded">
        Yellow
      </button>
      <button onClick={() => setColor("pink")} className="bg-pink-500 text-white p-2 m-2 rounded">
        Pink
      </button>
    </div>
    </div>
     </div>
  );
}

export default App;
