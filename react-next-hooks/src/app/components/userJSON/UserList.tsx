"use client";
import React, { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  const userFetch = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1/comments"
      );
      const data = await response.json();
      setUsers(data);
    } catch {
      console.log("Error fetching data");
    }
  };

  useEffect(() => {
    userFetch();
  }, []);

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-semibold mb-4">User List</h1>
      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Body</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any) => (
              <tr
                key={user.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-gray-700 break-words">
                  {user.name}
                </td>
                <td className="py-3 px-6 text-gray-700 break-words">
                  {user.email}
                </td>
                <td className="py-3 px-6 text-gray-700 break-words">
                  {user.body}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
