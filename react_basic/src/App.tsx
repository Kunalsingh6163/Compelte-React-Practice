// import JsxExample from "./components/jsxEg/Example1"
import PersistentDrawerLeft from "./components/drower/MuiDrower";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example1 from "./components/jsxEg/Example1";
import History from "./components/history/History";
import PropsEg from "./components/props/PropsEg";
import ReactListPage from  "./components/list/ReactListPage";
import ReactEventPage from "./components/events/ReactEventPage";
import SelectCountry from "./components/select_country/SelectCountry"

function App() {
  return (
    <>
      <BrowserRouter>
        <PersistentDrawerLeft />
        <Routes>
          <Route path="/example1" element={<Example1 />} />
          <Route path="/history" element={<History />} />
          <Route path="/props" element={<PropsEg />} />
          <Route path="/react-list" element={<ReactListPage />} />
          <Route path="/react-event" element={<ReactEventPage />} />
          <Route path="/country-select" element={<SelectCountry />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
