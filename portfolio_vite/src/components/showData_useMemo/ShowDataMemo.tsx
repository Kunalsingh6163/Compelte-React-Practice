import { useEffect, useMemo, useState } from "react";

function ShowDataMemoization() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [userData, setUserData] = useState<any[]>([]);

    useEffect(()=>{
        fetch(`/MOCK_DATA.json`)
        .then((result)=> result.json())
        .then((data)=>{
            setUserData(data);
        })
        .catch((error)=>{
            console.error(`Error here`, error)
        })
    });

    const memoizedUsers  = useMemo(()=>{
        return(
            userData.map((item, index)=>{
                return(
                    <tr key={index}>
                        <td className="border border-gray-300 p-2">{item.first_name}</td>
                        <td className="border border-gray-300 p-2">{item.last_name}</td>
                        <td className="border border-gray-300 p-2">{item.email}</td>
                        <td className="border border-gray-300 p-2">{item.job_title}</td>
                    </tr>
                )
            })
        )
    },[userData])
  return (
    <div>
        <h2>ShowDataMemo</h2>
        <div>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 p-2">Id</th>
                        <th className="border border-gray-300 p-2">First Name</th>
                        <th className="border border-gray-300 p-2">Last Name</th>
                        <th className="border border-gray-300 p-2">Email</th>
                        <th className="border border-gray-300 p-2">Job Role</th>
                    </tr>
                </thead>
                <tbody>
                    {memoizedUsers}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ShowDataMemoization;