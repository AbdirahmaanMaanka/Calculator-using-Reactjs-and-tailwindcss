
import React, { useState } from "react";

export default function Calculator({ onLogout }) {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const handleClear = () => setInput("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Calculator</h2>
        <input
          type="text"
          value={input}
          readOnly
          className="w-full mb-4 p-2 border rounded text-right"
        />
        <div className="grid grid-cols-4 gap-2">
          {[1,2,3,"+",4,5,6,"-",7,8,9,"*",0,"C","=","/"].map((btn, i) => (
            <button
              key={i}
              onClick={() =>
                btn === "="
                  ? handleCalculate()
                  : btn === "C"
                  ? handleClear()
                  : handleClick(btn.toString())
              }
              className="bg-blue-400 text-white py-2 rounded hover:bg-blue-600"
            >
              {btn}
            </button>
          ))}
        </div>
        <button
          onClick={onLogout}
          className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
