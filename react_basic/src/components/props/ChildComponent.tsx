
function ChildComponent(props : any) {
  return (
    <div style={{position:'relative'}}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default ChildComponent;