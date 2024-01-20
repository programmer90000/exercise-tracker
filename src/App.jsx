import { useState } from 'react'
import NewWorkout from './components/NewWorkout/NewWorkout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NewWorkout />
    </>
  )
}

export default App
