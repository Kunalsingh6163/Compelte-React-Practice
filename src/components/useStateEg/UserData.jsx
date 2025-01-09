import React, { useState } from "react";

const UpdateAgeExample = () => {
  // Initial state
  const [user, setUser] = useState({
    name: "kunal",
    gender: "male",
    age: 26,
  });


  const ageUpdate = () =>{
    setUser((prev)=>({
        ...prev,
        age: prev.age + 1
    }))
  }
  return (
    <div>
      <h1>User Information</h1>
      <p>Name: {user.name}</p>
      <p>Gender: {user.gender}</p>
      <p>Age: {user.age}</p>

      <button onClick={ageUpdate}>Increase Age</button>
    </div>
  );
};

export default UpdateAgeExample;
