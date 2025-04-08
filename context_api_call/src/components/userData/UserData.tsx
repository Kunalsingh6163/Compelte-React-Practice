import { useUserContext } from "../../context/UserDataContext";

function Contact() {
  const { users, loading, count, increment } = useUserContext();

  if (loading) {
    return <p className="text-center text-lg font-bold">Loading...</p>;
  }
  const handleUserinfo = () =>{
    console.log(users);
  }
  return (
    <div className="p-4">
      <h3 className="text-2xl font-bold mb-4">Get in touch</h3>
      <p className="text-lg">{count}</p>
      <button onClick={increment}>Increse</button>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Id</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Phone</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody className="items-center justify-center text-lg">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border border-gray-300 p-2">{user.id}</td>
                <td className="border border-gray-300 p-2">{user.name}</td>
                <td className="border border-gray-300 p-2">{user.email}</td>
                <td className="border border-gray-300 p-2">{user.phone}</td>
                <td className="border border-gray-300 p-2"><button onClick={handleUserinfo}>userInfo</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contact;
