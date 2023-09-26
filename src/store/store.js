import {create} from 'zustand'


const addCount = (set) => ({
    count : 0,
    IncrementCount : ()=> set(state => ({count : state.count + 1})),
    DecrementCount : ()=> set(state => ({count : state.count - 1}))
})

const addName = (set) => ({
    name: '',
    setName: (name) => set({name})
})

const fetchData = (set) => ({
    data: [],
    fetch: async (end_point) => {
        return await fetch(`http://localhost:3000/${end_point}`)
     }
})



const useStore = create((...set)=> ({
    ...addCount(...set),
    ...addName(...set),
    ...fetchData(...set)
}))

export default useStore