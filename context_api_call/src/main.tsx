import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Layout from "./Layout.tsx";
import UserDataContext from "./components/userData/UserData.tsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='api-context' element={<UserDataContext />} />
      {/* <Route path="userList" element={<UserListTable />} />
      <Route path="contact" element={<Contact />} />
      <Route path="mockdata" element={<MockData />} />
      <Route path="testmock" element={<MockUserData />} />
      <Route path="useMemo-user" element={<ShowDataMemoization />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       /> */}
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
