import { Outlet } from "react-router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {UserProvider} from "./context/UserDataContext";

function Layout() {
  return (
    <div>
      <Header />
      <UserProvider>
        <Outlet />
      </UserProvider>
      <Footer />
    </div>
  );
}

export default Layout;
