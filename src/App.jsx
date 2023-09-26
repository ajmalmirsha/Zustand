import Button from "./components/Button"
import useStore from "./store/store"
import Input from "./components/Input"

function App() {
  const {name,count} = useStore(state => state)
  const fetch = useStore(state => state.fetch)
  async function fetchData () {
   const data = await fetch('about')
   console.log(data,34);
  }
  return (
    <>
      <h1>count is {count}</h1>
      <br />
      <h1>name is {name}</h1>
      <h1>data is {name}</h1>
      <br />
      <button onClick={fetchData} >fetch Data</button>
      <br />
      <br />
      <Input  />
      <br />
      <br />
      <Button content={'Increment'} method={'Inc'} />
      <br />
      <br />
      <Button content={'Decrement'} method={'Dec'} />
    </>
  )
}

export default App
