import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state > 0 ? state - 1 : state = 0,
    },
});

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;