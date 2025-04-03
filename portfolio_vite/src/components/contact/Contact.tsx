import { useEffect, useState } from "react";

function Contact() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any[]>([]);

  const result = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );
      const data = await response.json();
      setUser(data);
    } catch {
      console.log("Error");
    }
  };

  useEffect(() => {
    result();
  }, []);
  return (
    <div>
      <h3>Get in touch</h3>
      <div>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Id</th>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Phone</th>
            </tr>
          </thead>
          <tbody className="items-center justify-center text-2xl">
            {user.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="border border-gray-300 p-2">{item.id}</td>
                  <td className="border border-gray-300 p-2">{item.name}</td>
                  <td className="border border-gray-300 p-2">{item.email}</td>
                  <td className="border border-gray-300 p-2">{item.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contact;
