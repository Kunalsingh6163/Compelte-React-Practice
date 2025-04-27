import StartRating from "./components/useState/StarRating";
import TitleChange from "./components/useEffect/TitleChange";
import AdminLogin from "./components/useEffect/AdminLogin";
import DataFetch from "./components/useEffect/DataFetch";
import "./App.css";

function App() {
  return (
    <>
      <div id="maindiv">
      <AppRoutes />
        <StartRating />
      </div>
      <div>
      <h3>First Example of useEffect</h3>
        <TitleChange />
        <h3>Second Example of useEffect</h3>
        <AdminLogin />
        <h3>Third Example of useEffect</h3>
        <DataFetch />
      </div>
    </>
  );
}

export default App;
