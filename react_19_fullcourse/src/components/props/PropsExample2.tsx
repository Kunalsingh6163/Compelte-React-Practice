import '../../App.css'


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Greeting(props: any) {
  return (
    <div className="card2">
      <h3>Hello, {props.name}!</h3>
      <p>You are {props.age} years old.</p>
    </div>
  );
}

export default Greeting;