import React, { useEffect, useState } from "react";

function AdminLogin() {
  const [name, setName] = useState("Kunal");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    console.log(`Congrats: `, name);
    return setName(name);
  }, [name]);

  useEffect(() => {
    console.log("Admin is: ", admin);
    return setAdmin(admin);
  }, [admin]);

  return (
    <div>
      <h1>Winner Name</h1>
      <p>Congratulations {name}</p>
      <button onClick={() => setName("Jish")}>Change Winner</button>
      <h1>Admin Login</h1>
      <p>{admin ? "loggedIn" : "Not loggedIn"}</p>
      <button onClick={() => setAdmin(true)}>
        {admin ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default AdminLogin;
