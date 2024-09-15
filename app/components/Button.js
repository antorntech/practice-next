"use client";

import React, { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <main>
      <div>
        <span className="text-xl font-bold">Count : {count}</span>
      </div>
      <div className="flex items-center gap-5 mt-3">
        <button
          className="px-4 py-2 bg-slate-800 text-white rounded-md"
          onClick={() => setCount(count + 1)}
        >
          Plus +
        </button>
        <button
          className="px-4 py-2 bg-slate-800 text-white rounded-md"
          onClick={() => setCount(0)}
        >
          Reset ↻
        </button>
      </div>
    </main>
  );
};

export default Button;
