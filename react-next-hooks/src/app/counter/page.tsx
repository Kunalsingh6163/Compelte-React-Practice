import React from 'react';
import Counter from "../components/counter-contextAPI/Counter"
import Home from "../components/contextAPI/page"
function page() {
  return (
    <div>
        <h1>This is Counter Application Created using Context API.</h1>
        <Counter />
        <div>
          <h1>this is 2nd example using own layout.</h1>
          <Home />
        </div>
    </div>
  )
}

export default page