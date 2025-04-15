import { createSlice } from "@reduxjs/toolkit";

export const userListSlice = createSlice({
    name: "userList",
    initialState: [],
    reducers: {
        setUserList: (_state, action) => {
            return action.payload;
        },
    }
});


export const fetchUsers = () => async (dispatch: any) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        dispatch(setUserList(data));
    } catch (error) {
        console.error("Failed to fetch users:", error);
    }
};

export const {setUserList} = userListSlice.actions;
export default userListSlice.reducer;