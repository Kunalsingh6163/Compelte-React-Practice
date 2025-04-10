import { useAppSelector, useAppDispatch } from "./redux_store/hooks";
import { increment, decrement } from "./redux_store/slices/counter";
import Counter from "./components/counter/Counter";
import UserListData from "./components/userList/UserListData"



export default function App() {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>This is Count value:- {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <div>
        <Counter />
      </div>
      <div>
        <h2>user list data</h2>
        <UserListData />
      </div>
    </div>
  );
}
