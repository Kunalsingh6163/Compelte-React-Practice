import "./App.css";
import PropsExample from "./components/props/PropsExample";
import Greeting from "./components/props/PropsExample2";
import GreetingJsx from "./components/jsx/JsxExample";
import LikeUnlike from "./components/state/LikeUnlike";
import { Suspense, lazy } from "react";

const LAzyLoadingStateCads = lazy(
  () => import("./components/lazyLoading/LazyLoading")
);

function App() {
  return (
    <>
      <div className="card-container">
        <PropsExample title="React Props" />
        <Greeting name="Kunal Singh" age="25" />
      </div>
      <div>
        <h4>JSX Examples.</h4>
        <GreetingJsx />
      </div>
      <div>
        <LikeUnlike title="KunalPics" />
      </div>
      <div>
        <h3>Lazy Loading Example.</h3>
        <Suspense
          fallback={<div style={{ textAlign: "center" }}>Loading Cards...</div>}
        >
          <LAzyLoadingStateCads />
        </Suspense>
      </div>
    </>
  );
}

export default App;
