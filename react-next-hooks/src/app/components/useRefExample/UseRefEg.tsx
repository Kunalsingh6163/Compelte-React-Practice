"use client";
import React, { useRef, useState } from "react";

function UseRefEg() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [charCount, setCharCount] = useState(0);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = () => {
    if (inputRef.current) {
      setCharCount(inputRef.current.value.length);
    }
  };
  return (
    <div>
      <div>
        <input
          ref={inputRef}
          onChange={handleInputChange}
          type="text"
          className="border-lime-200"
        />
        <button onClick={focusInput}>Focus Input</button>
        <input
          type="text"
          placeholder="Text Messages"
          className="border-lime-200"
        />
        <p>Text Count:- {charCount}</p>
      </div>
    </div>
  );
}

export default UseRefEg;
