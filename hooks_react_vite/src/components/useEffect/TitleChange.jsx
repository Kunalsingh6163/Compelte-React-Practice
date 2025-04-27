import React, { useEffect, useState } from 'react'

function TitleChange() {
    const[name, setName] = useState('Jish');

    useEffect(()=>{
        document.title = `Congrats ${name}`
    },[name])

  return (
    <div>
        <p>Look at the Title.</p>
        <h2>Congratulations {name}</h2>
        <button onClick={()=>setName('Mili')}>Change Winner</button>
    </div>
  )
}

export default TitleChange