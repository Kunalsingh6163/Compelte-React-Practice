import React from 'react'

function Child(props) {
  return (
    <div>
        <h1>Child Component</h1>
        <p>{props.name}</p>
    </div>
  )
}

export default Child;