import React from 'react'
import Jokes from '../components/RandomJokes/Jokes'
import ParentComponent from '../components/useCallback/CallbackEg'

function JokesNew() {
  return (
    <div>JokesNew
        <Jokes />
        <p>callback Example</p>
        <ParentComponent />
    </div>
  )
}

export default JokesNew