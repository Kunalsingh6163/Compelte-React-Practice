import { useEffect, useState } from "react";

function MockUserData() {
  const [userData, setUserData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`/public/MOCK_DATA.json`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error(`Hi this is error:- `, error);
      });
  }, []);
  return (
    <div>
      <h1>Mock Data</h1>
      <div>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Id</th>
              <th className="border border-gray-300 p-2">First Name</th>
              <th className="border border-gray-300 p-2">Last Name</th>
              <th className="border border-gray-300 p-2">Gender</th>
              <th className="border border-gray-300 p-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <div>
                <h1>Loading...</h1>
              </div>
            ) : (
              userData.map((user, index) => {
                return (
                  <tr key={index} className="bg-gray-200">
                    <td className="border border-gray-300 p-2">{user.id}</td>
                    <td className="border border-gray-300 p-2">
                      {user.first_name}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {user.last_name}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {user.gender}
                    </td>
                    <td className="border border-gray-300 p-2">{user.email}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MockUserData;
