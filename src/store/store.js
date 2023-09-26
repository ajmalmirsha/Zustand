import {create} from 'zustand'


const useStore = create((set)=> ({
    count : 0,
    IncrementCount : ()=> set(state => state + 1),
    DecrementCount : ()=> set(state => state - 1)
}))

export default useStore