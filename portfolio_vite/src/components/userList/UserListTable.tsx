import { useEffect, useState } from "react";

function UserListTable() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [users, setUsers] = useState<any[]>([]);

  const userData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );
      const data = await response.json();
      setUsers(data);
    } catch {
      console.log("Error");
    }
  };

  useEffect(() => {
    userData();
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                {user.address.street}, {user.address.suite}, {user.address.city}
                , {user.address.zipcode}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserListTable;
