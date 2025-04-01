"use client"
import React from "react";
import BindEvent from "./BindEvent"

function EventEg() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  const showAlert = () => {
    alert("this is alert genrated");
  };
  return (
    <div>
      <button onClick={handleClick}>Click console</button>
      <div>
        <button onClick={showAlert}>Click Alert</button>
      </div>
      <p>
        this is bind event clickHandler
      </p>
      <BindEvent />
    </div>
  );
}

export default EventEg;
