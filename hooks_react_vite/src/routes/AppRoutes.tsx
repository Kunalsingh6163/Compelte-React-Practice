import { Routes, Route } from "react-router";
import DataFetch from "../components/useEffect/DataFetch"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DataFetch />} />
    </Routes>
  );
};

export default AppRoutes;
