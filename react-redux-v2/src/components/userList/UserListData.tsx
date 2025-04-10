import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux_store/slices/userlist"; // adjust path

const UserList = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.userList);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>
            <h2>User List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item, index)=>(
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
