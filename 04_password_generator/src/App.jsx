import React, { useState, useCallback, useEffect } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*()-_=+\\|[]{};:/?.>,<";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, number, char]);

  // Generate password whenever dependencies change
  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 mx-80 justify-self-center bg-gray-800 text-orange-500">
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
        </div>
        <div className="w-full max-w-md mx-auto px-4">
          <label>
            Length:
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              min="1"
              className="ml-2"
            />
          </label>
          <label className="ml-4">
            Include Numbers:
            <input
              type="checkbox"
              checked={number}
              onChange={(e) => setNumber(e.target.checked)}
              className="ml-2"
            />
          </label>
          <label className="ml-4">
            Include Special Characters:
            <input
              type="checkbox"
              checked={char}
              onChange={(e) => setChar(e.target.checked)}
              className="ml-2"
            />
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
