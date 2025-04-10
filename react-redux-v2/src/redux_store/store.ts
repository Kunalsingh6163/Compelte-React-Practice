import { configureStore } from '@reduxjs/toolkit';
import counterSlice from "./slices/counter";
import userListSlice from "./slices/userlist";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    userList: userListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;