import './App.css'
import PropsExample from "./components/props/PropsExample";
import Greeting from "./components/props/PropsExample2";
import GreetingJsx from "./components/jsx/JsxExample";
import LikeUnlike from "./components/state/LikeUnlike"

function App() {

  return (
    <>
    <div className='card-container'>
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
    </>
  )
}

export default App;
