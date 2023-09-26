import { useState } from "react"
import Button from "./components/Button"

function App() {
  const [count,setCount] = useState(0)
  return (
    <>
      <h1>count is {count}</h1>

      <Button content={'Increment'} method={'Inc'} />
      <Button content={'Decrement'} method={'Dec'} />
    </>
  )
}

export default App
