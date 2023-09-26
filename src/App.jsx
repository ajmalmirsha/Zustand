import { useState } from "react"
import Button from "./components/Button"
import useStore from "./store/store"

function App() {
  const count = useStore(state => state.count)

  return (
    <>
      <h1>count is {count}</h1>

      <Button content={'Increment'} method={'Inc'} />
      <Button content={'Decrement'} method={'Dec'} />
    </>
  )
}

export default App
