import "./App.css";
import Counter from "./components/useStateEg/Counter";
import UpdateAgeExample from "./components/useStateEg/UserData";

function App() {
  return (
    <div className="App">
      <div>
        <h2>This is the useState Hook section.</h2>
        <Counter />
        <UpdateAgeExample />
      </div>
    </div>
  );
}

export default App;
