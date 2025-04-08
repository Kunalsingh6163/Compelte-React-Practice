import {UserProvider} from "./context/UserDataContext";
import UserDataContext from "./components/userData/UserData";

function App() {
  return (
    <UserProvider>
      <UserDataContext />
    </UserProvider>
  );
}

export default App;