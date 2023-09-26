import {create} from 'zustand'


const useStore = create((set)=> ({
    count : 0,
    IncrementCount : ()=> set(state => ({count : state.count + 1})),
    DecrementCount : ()=> set(state => ({count : state.count - 1}))
}))

export default useStore