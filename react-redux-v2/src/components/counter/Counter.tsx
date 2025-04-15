
import { useAppSelector } from '../../redux_store/hooks';

function Counter() {
  const count = useAppSelector((state)=> state.counter)
  return (
    <div>
      <p>Count: {count}</p>
    </div>
  )
}

export default Counter