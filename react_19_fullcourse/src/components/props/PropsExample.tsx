import '../../App.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PropsExample({title}: any) {
  return (
    <div className='card'>
        <h2>Props Example 1</h2>
        <h2>{title}</h2>
    </div>
  )
}

export default PropsExample;