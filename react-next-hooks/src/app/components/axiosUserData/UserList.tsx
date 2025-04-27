import axios from "axios";
import React, { useEffect, useState } from "react";

interface UserData{
    name: string
}
function UserListaxios() {
  const [users, setUsers] = useState<UserData []>([]);

//   let axiosInstance = axios.create({
//     baseURL: `https://jsonplaceholder.typicode.com/posts/1/comments`,
//     timeout: 2000,
//   });

  const fetchData = async () => {
    await axios
      .get(`https://jsonplaceholder.typicode.com/posts/1/comments`)
      .then((response) => setUsers(response.data))
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(()=>{
    fetchData();
  },[])
  return(
    <>
    <div>
        {users.map((user, index)=>(
            <>
            <ol className="bg-amber-300">
                <li key={index}>{user.name}</li>
            </ol>
            </>
        ))}
    </div>
    </>
  )
}

export default UserListaxios;
