import useStore from "../store/store"


export default function Input () {
    const addName = useStore(state => state.setName)
    function handleInputChange (e) {
        addName(e.target.value)
    }
    return <input type="text" onChange={handleInputChange} />
}